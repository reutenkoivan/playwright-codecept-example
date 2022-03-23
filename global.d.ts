declare global {
  namespace codeceptFixtureTypes {
    type extensions = {}

    interface options {
      codeceptExtensions: extensions
    }
  }
}

export {}
