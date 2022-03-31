import { test } from '@pw-codeceptjs/test'

test('Extension example', async ({ I }) => {
  await I.amOnPage('https://playwright.dev/')
  await I.waitForText('Playwright', {locator: '.navbar__inner .navbar__title'})
  await I.click('text=GitHub', { createsNewPage: true })
  await I.use.utils.wait(10)
})
