import { Utils } from '@pw-codeceptjs/utils-extension'

declare global {
  namespace codeceptjsFixtureTypes {
    type extensions = {
      utils: typeof Utils
    }
  }
}
