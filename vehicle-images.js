/*
  VEHICLE IMAGE LIBRARY
  ---------------------
  To customize a listing, add or replace the image URLs in its entry below.
  The key must match the title shown on the vehicle detail page exactly.
  Use 4–8 landscape images. The first image becomes the inventory-card image;
  all images appear in the listing gallery.

  Example:
  '2022 Toyota Camry SE': [
    'https://your-image-host.com/camry-front.jpg',
    'https://your-image-host.com/camry-rear.jpg',
    'https://your-image-host.com/camry-interior.jpg',
    'https://your-image-host.com/camry-wheel.jpg'
  ],
*/
const VEHICLE_IMAGES = {
  '2022 Toyota Camry SE': [
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=85',
    'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1400&q=85',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=85'
  ],
  '2009 Toyota Corolla LE': [
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=85',
    'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1400&q=85',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=85',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85'
  ],
  '2021 Honda CR-V EX-L': [
    './assets/cars/2022-Honda-CR-V-EX-L:showcase.jpg',
    './assets/cars/2022-Honda-CR-V-EX-L:front.jpg',
    './assets/cars/2022-Honda-CR-V-EX-L:interior.jpeg'
  ],
  '2022 Toyota RAV4 XLE': [
    './assets/cars/2022-Toyota-RAV4-XLE:front2.png',
    './assets/cars/2022-Toyota-RAV4-XLE:side1.png',
    './assets/cars/2022-Toyota-RAV4-XLE:side2.png',
    './assets/cars/2022-Toyota-RAV4-XLE:rear.png',
    './assets/cars/2022-Toyota-RAV4-XLE:roof.png',
    './assets/cars/2022-Toyota-RAV4-XLE:int1.png',
    './assets/cars/2022-Toyota-RAV4-XLE:int2.png',
    './assets/cars/2022-Toyota-RAV4-XLE:int3.png',
    './assets/cars/2022-Toyota-RAV4-XLE:int4.png',
    './assets/cars/2022-Toyota-RAV4-XLE:int5.png',
    './assets/cars/2022-Toyota-RAV4-XLE:screen.png',
    './assets/cars/2022-Toyota-RAV4-XLE:meter.png',
    './assets/cars/2022-Toyota-RAV4-XLE:tyre.png'
  ],
  '2022 Chevrolet Silverado 1500 RST': [
    './assets/cars/2022-Chevrolet-Silverado-1500-RST:front.avif',
    './assets/cars/2022-Chevrolet-Silverado-1500-RST:side.avif',
    './assets/cars/2022-Chevrolet-Silverado-1500-RST:rear.avif',
    './assets/cars/2022-Chevrolet-Silverado-1500-RST:int1.avif',
    './assets/cars/2022-Chevrolet-Silverado-1500-RST:int2.avif',
    './assets/cars/2022-Chevrolet-Silverado-1500-RST:lamp.avif',
    './assets/cars/2022-Chevrolet-Silverado-1500-RST:rlamp.avif',
    './assets/cars/2022-Chevrolet-Silverado-1500-RST:tyre.avif'
  ],
  '2018 Kia Soul Base': [
    './assets/cars/2018-kia-soul-base:side1.png',
    './assets/cars/2018-kia-soul-base:rear.png',
    './assets/cars/2018-kia-soul-base:back.png',
    './assets/cars/2018-kia-soul-base:passenger.png',
    './assets/cars/2018-kia-soul-base:frontseat.png',
    './assets/cars/2018-kia-soul-base:passanger2.png',
    './assets/cars/2018-kia-soul-base:trunk.png',
    './assets/cars/2018-kia-soul-base:tyre.png',
    './assets/cars/2018-kia-soul-base:wheel.png'
  ]
};

const FALLBACK_GALLERIES = {
  sedan: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85'],
  suv: ['https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=85'],
  truck: ['https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=85'],
  luxury: ['https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=85'],
  electric: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85'],
  coupe: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85']
};

function vehicleGallery(title) {
  const exact = VEHICLE_IMAGES[title];
  if (exact) return exact;
  const lower = title.toLowerCase();
  if (/f-150|silverado|ram 1500|maverick/.test(lower)) return FALLBACK_GALLERIES.truck;
  if (/model 3|model y/.test(lower)) return FALLBACK_GALLERIES.electric;
  if (/mustang/.test(lower)) return FALLBACK_GALLERIES.coupe;
  if (/bmw|audi|lexus|mercedes|volvo|acura/.test(lower)) return FALLBACK_GALLERIES.luxury;
  if (/cr-v|rav4|cherokee|tucson|telluride|cx-5|tiguan|rogue|tahoe|acadia|highlander|explorer|wrangler|forester|equinox|soul|vibe/.test(lower)) return FALLBACK_GALLERIES.suv;
  return FALLBACK_GALLERIES.sedan;
}

// Every current listing is registered here with its own gallery entry. These
// entries start with a relevant body-style gallery; replace any array above or
// below with your exact vehicle photos whenever you have them.
const ALL_VEHICLE_TITLES = [
  '2022 Toyota Camry SE','2021 Honda CR-V EX-L','2021 Ford F-150 Lariat','2022 BMW X3 xDrive30i','2022 Tesla Model 3 Long Range','2021 Jeep Grand Cherokee Limited','2020 Lexus RX 350 Premium','2022 Chevrolet Silverado 1500 RST','2021 Subaru Outback Limited','2021 Audi A4 Premium Plus','2022 Toyota RAV4 XLE','2021 Honda Accord Sport','2020 Ford Mustang GT Premium','2021 Mercedes-Benz GLC 300 4MATIC','2022 Hyundai Tucson SEL','2021 Kia Telluride SX','2022 Mazda CX-5 Carbon Edition','2021 Volkswagen Tiguan SE R-Line','2022 Nissan Rogue SV','2020 Chevrolet Tahoe LT','2021 Ram 1500 Big Horn','2021 GMC Acadia Denali','2020 Volvo XC60 Momentum','2021 Acura MDX Technology','2022 Toyota Highlander XLE','2021 Ford Explorer XLT','2020 BMW 3 Series 330i','2022 Honda Civic Touring','2021 Lexus ES 350 Luxury','2021 Tesla Model Y Long Range','2021 Jeep Wrangler Sahara','2022 Subaru Forester Premium','2021 Audi Q5 Premium','2022 Chevrolet Equinox LT','2021 Mazda Mazda3 Premium','2022 Ford Maverick Lariat','2009 Toyota Corolla LE','2008 Honda Civic LX','2011 Ford Focus SE','2010 Chevrolet Malibu LS','2012 Hyundai Elantra GLS','2013 Nissan Versa S','2012 Mazda Mazda2 Sport','2018 Kia Soul Base','2009 Pontiac Vibe Base','2011 Volkswagen Jetta S','2020 Toyota Tacoma SR5','2020 Toyota Corolla LE'
];
ALL_VEHICLE_TITLES.forEach(title => {
  if (!VEHICLE_IMAGES[title]) VEHICLE_IMAGES[title] = vehicleGallery(title);
});

function applyVehicleImages() {
  document.querySelectorAll('.car-card img[alt]').forEach(image => {
    const title = image.alt;
    const match = Object.keys(VEHICLE_IMAGES).find(key => key.startsWith(title));
    if (match) image.src = VEHICLE_IMAGES[match][0];
  });
  const title = document.querySelector('.detail-title h1')?.textContent?.trim();
  if (!title) return;
  const images = vehicleGallery(title);
  const main = document.querySelector('#mainImage');
  if (main) main.src = images[0];
  const thumbs = document.querySelector('.thumbs');
  const galleryKey = `${title}:${images.join('|')}`;
  if (thumbs && thumbs.dataset.imageSet !== galleryKey) {
    thumbs.dataset.imageSet = galleryKey;
    thumbs.innerHTML = images.map((source, index) => `<button class="thumb ${index === 0 ? 'active' : ''}" data-image="${source}" aria-label="${title} photo ${index + 1}"><img src="${source}" alt="${title} photo ${index + 1}"></button>`).join('');
    thumbs.querySelectorAll('.thumb').forEach(thumb => thumb.addEventListener('click', () => {
      if (main) main.src = thumb.dataset.image;
      thumbs.querySelectorAll('.thumb').forEach(item => item.classList.toggle('active', item === thumb));
    }));
  }
}

new MutationObserver(applyVehicleImages).observe(document.getElementById('app'), { childList: true, subtree: true });
window.vehicleGallery = vehicleGallery;
