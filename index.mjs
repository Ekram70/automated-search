import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    userDataDir: 'temporary',
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto('https://google.com', { waitUntil: 'networkidle2' });
  const searchbox = await page.waitForSelector('#APjFqb');
  await searchbox.type('ekram ullah dewan');
  await page.keyboard.press('Enter');
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
  const res = await page.evaluate(() => {
    return [...document.querySelectorAll('.LC20lb.MBeuO.DKV0Md')].map(
      (e) => e.parentElement.href
    );
  });
  console.log(res);

  await browser.close();
})();
