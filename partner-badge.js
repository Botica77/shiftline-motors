const injectPartnerBadge = () => {
  const nav = document.querySelector('.nav');
  if (!nav || nav.querySelector('.partner-badge')) return;
  const badge = document.createElement('div');
  badge.className = 'partner-badge';
  badge.setAttribute('aria-label', 'Trusted Marketplace Partner');
  badge.innerHTML = '<span class="partner-badge-mark" aria-hidden="true">✓</span><span class="partner-badge-copy"><strong>Trusted</strong><span>Marketplace Partner</span></span>';
  nav.querySelector('.navtools')?.before(badge);
};
new MutationObserver(injectPartnerBadge).observe(document.getElementById('app'), { childList: true, subtree: true });
injectPartnerBadge();
