const injectGiftBooking = () => {
  const sidecard = document.querySelector('.sidecard');
  if (!sidecard || sidecard.querySelector('.gift-booking')) return;

  const vehicle = document.querySelector('.detail-title h1')?.textContent || 'this vehicle';
  const panel = document.createElement('section');
  panel.className = 'gift-booking';
  panel.innerHTML = `
    <h3>Reserve with a gift card</h3>
    <p>Place an advance booking deposit to hold ${vehicle.trim()} while a specialist confirms availability.</p>
    <div class="gift-options" role="group" aria-label="Choose advance booking amount">
      <button class="gift-option" data-gift="800">$800</button>
      <button class="gift-option active" data-gift="950">$950</button>
      <button class="gift-option" data-gift="1100">$1,100</button>
    </div>
    <button class="btn gift-cta" type="button">Reserve with gift card · $950</button>
    <p class="gift-note">Gift-card reservation deposits range from $800–$1,100 and are applied toward the vehicle purchase. Dealer confirmation is required before any funds are collected.</p>
    <div class="gift-success" role="status"></div>`;
  sidecard.append(panel);

  let selected = 950;
  const cta = panel.querySelector('.gift-cta');
  const notice = panel.querySelector('.gift-success');
  panel.querySelectorAll('.gift-option').forEach(button => button.addEventListener('click', () => {
    selected = Number(button.dataset.gift);
    panel.querySelectorAll('.gift-option').forEach(option => option.classList.toggle('active', option === button));
    cta.textContent = `Reserve with gift card · $${selected.toLocaleString('en-US')}`;
  }));
  cta.addEventListener('click', () => {
    notice.textContent = `Gift-card booking request started for $${selected.toLocaleString('en-US')}. A vehicle specialist will confirm availability before payment.`;
    notice.classList.add('show');
  });
};

new MutationObserver(injectGiftBooking).observe(document.getElementById('app'), { childList: true, subtree: true });
injectGiftBooking();
