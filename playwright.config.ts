import { PlaywrightTestConfig, devices } from '@playwright/test'
import { Utils } from '@playwright-codecept/utils-extension'

const config: PlaywrightTestConfig<codeceptFixtureTypes.options> = {
  forbidOnly: !!process.env.CI,
  testMatch: '**/__integration-tests__/**/*.spec.ts',
  reporter: [['html']],
  use: {
    headless: false,
    codeceptExtensions: {
      utils: Utils,
    },
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
}

export default config
