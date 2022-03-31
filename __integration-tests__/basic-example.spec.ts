import { test } from '@pw-codeceptjs/test'

test('Basic example test', async ({ I }) => {
  await I.amOnPage('https://playwright.dev/')
  await I.waitForText('Playwright', {locator: '.navbar__inner .navbar__title'})
  await I.click('text=GitHub', { createsNewPage: true })
  await I.click('span:has-text("Issues")')
})
