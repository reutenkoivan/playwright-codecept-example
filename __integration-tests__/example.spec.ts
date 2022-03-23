import { test } from '@playwright-codecept/test-fixture'

test.describe('Example Describe', () => {
  test('Example test #1', async ({ I }) => {
    await I.amOnPage('https://playwright.dev/')
    await I.waitForText('Playwright', {locator: '.navbar__inner .navbar__title'})
    await I.click('text=GitHub', { createsNewPage: true })
    await I.click('span:has-text("Issues")')
    await I.workWithTab(0)
    await I.click('text=GitHub', { createsNewPage: true })
  })
})
