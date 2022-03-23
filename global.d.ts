import { Utils } from '@playwright-codecept/utils-extension'

declare global {
  namespace codeceptFixtureTypes {
    type extensions = {
      utils: typeof Utils
    }

    interface options {
      codeceptExtensions: extensions
    }
  }
}
