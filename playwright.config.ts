import { PlaywrightTestConfig, devices } from '@playwright/test'
import { Utils } from '@pw-codeceptjs/utils-extension'
import type { CodeceptFixtureConfig } from '@pw-codeceptjs/test'

const config: PlaywrightTestConfig<CodeceptFixtureConfig> = {
  forbidOnly: !!process.env.CI,
  testMatch: '**/__integration-tests__/**/*.spec.ts',
  reporter: [['html']],
  use: {
    headless: false,
    codeceptjs: {
      extensions: {
        utils: Utils,
      }
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
