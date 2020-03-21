const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:3000/principal.html');
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor('#homepage');
  await percySnapshot('homepage');
});

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:3000/frases');
  await percySnapshot('frases');
});
