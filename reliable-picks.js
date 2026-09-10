const reliablePicks = [
  ['2022 Toyota RAV4 XLE','$28,450','Reliability, fuel economy, SUV practicality',11,'./assets/cars/2022-Toyota-RAV4-XLE:front2.png'],
  ['2021 Honda CR-V EX-L','$26,950','Reliability, family SUV, resale value',2,'./assets/cars/2022-Honda-CR-V-EX-L:showcase.jpg'],
  ['2022 Toyota Highlander XLE','$35,995','3-row SUV, reliability',25,'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80'],
  ['2020 Toyota Tacoma SR5','$31,995','Highly popular pickup, resale value',47,'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=80'],
  ['2022 Honda Civic Touring','$27,495','Affordable, reliable, economical',28,'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80'],
  ['2022 Toyota Camry SE','$24,995','Reliability and low running costs',1,'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80'],
  ['2021 Subaru Outback Limited','$27,995','AWD, practicality',9,'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80'],
  ['2020 Toyota Corolla LE','$19,995','Affordable and dependable',48,'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80'],
  ['2021 Honda Accord Sport','$25,995','Spacious, reliable sedan',12,'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80'],
  ['2022 Subaru Forester Premium','$26,495','AWD, practical compact SUV',32,'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80']
];

function addReliablePicks() {
  const hero = document.querySelector('.hero');
  if (!hero || document.querySelector('.reliable-picks')) return;
  const section = document.createElement('section');
  section.className = 'reliable-picks';
  section.innerHTML = `<div class="container"><div class="section-head"><div><h2>Top 10 reliable picks</h2><p>All 2018 or newer — selected for everyday confidence and value.</p></div><a class="textlink" href="#/cars">Browse all inventory →</a></div><div class="car-grid">${reliablePicks.map(([title, price, reason, id, image]) => `<article class="car-card"><img class="car-img" src="${image}" alt="${title}" loading="lazy"><a href="#/cars/${id}" style="color:inherit;text-decoration:none"><div class="car-content"><h3 class="car-title">${title}</h3><div class="reason"><b>Why it stands out:</b> ${reason}</div><div class="price">${price}</div><div class="dealer"><span>View vehicle details</span><span class="pill">2018+</span></div></div></a></article>`).join('')}</div></div>`;
  hero.after(section);
}
new MutationObserver(addReliablePicks).observe(document.getElementById('app'), { childList: true, subtree: true });
addReliablePicks();
