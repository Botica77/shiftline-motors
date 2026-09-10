const photoStorageKey = title => `shiftline-uploaded-photos:${title}`;
const DATABASE = 'shiftline-listing-media';
const STORE = 'photos';

function mediaDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(STORE);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getSavedPhotos(key) {
  const database = await mediaDatabase();
  return new Promise((resolve, reject) => {
    const request = database.transaction(STORE).objectStore(STORE).get(key);
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

async function savePhotos(key, photos) {
  const database = await mediaDatabase();
  return new Promise((resolve, reject) => {
    const request = database.transaction(STORE, 'readwrite').objectStore(STORE).put(photos, key);
    request.onsuccess = resolve;
    request.onerror = () => reject(request.error);
  });
}

async function deletePhotos(key) {
  const database = await mediaDatabase();
  return new Promise((resolve, reject) => {
    const request = database.transaction(STORE, 'readwrite').objectStore(STORE).delete(key);
    request.onsuccess = resolve;
    request.onerror = () => reject(request.error);
  });
}

function updateListingGallery(title, images) {
  if (!images.length) return;
  const sources = images.map(image => typeof image === 'string' ? image : URL.createObjectURL(image));
  window.VEHICLE_IMAGES[title] = sources;
  const main = document.querySelector('#mainImage');
  if (main) main.src = sources[0];
  document.querySelectorAll('.thumb').forEach((thumb, index) => {
    const source = sources[index % sources.length];
    thumb.dataset.image = source;
    const image = thumb.querySelector('img');
    if (image) image.src = source;
  });
}

async function addPhotoUploader() {
  const title = document.querySelector('.detail-title h1')?.textContent?.trim();
  const gallery = document.querySelector('.gallery');
  if (!title || !gallery || document.querySelector('.photo-uploader')) return;
  const key = photoStorageKey(title);
  try {
    const saved = await getSavedPhotos(key);
    if (saved.length) updateListingGallery(title, saved);
  } catch { /* The uploader still works as a session preview if storage is unavailable. */ }

  const panel = document.createElement('details');
  panel.className = 'photo-uploader';
  panel.innerHTML = `
    <summary>Add listing photos</summary>
    <p>Select up to 8 JPG, PNG, or WebP images from <code>assets/cars</code>. Images are stored locally in this browser for this listing.</p>
    <input type="file" accept="image/*" multiple aria-label="Choose listing photos">
    <div class="photo-uploader-actions"><button type="button" data-clear-photos>Clear uploaded photos</button></div>
    <p class="photo-upload-status" role="status"></p>`;
  gallery.after(panel);

  const input = panel.querySelector('input');
  const status = panel.querySelector('.photo-upload-status');
  input.addEventListener('change', async () => {
    const files = [...input.files].slice(0, 8);
    if (!files.length) return;
    const previews = files.map(file => URL.createObjectURL(file));
    updateListingGallery(title, previews);
    status.textContent = `${previews.length} photo${previews.length === 1 ? '' : 's'} shown in this listing. Saving locally…`;
    try {
      const images = await Promise.all(files.map(file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
      })));
      await savePhotos(key, images);
      status.textContent = `${images.length} photo${images.length === 1 ? '' : 's'} added to this listing.`;
    } catch {
      status.textContent = 'The photos are shown for this visit, but could not be saved locally. You can still use them now; try smaller files if you need them after a refresh.';
    }
  });
  panel.querySelector('[data-clear-photos]').addEventListener('click', async () => {
    try { await deletePhotos(key); } catch { /* Reload still restores the default gallery. */ }
    location.reload();
  });
}

new MutationObserver(addPhotoUploader).observe(document.getElementById('app'), { childList: true, subtree: true });
addPhotoUploader();
