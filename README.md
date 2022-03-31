## playwright-codecept-example

For integrating codecept syntax into playwright testing library you need

### 1. Install dependencies "@pw-codeceptjs/test" and "@playwright/test"

```shell
npm i -D @pw-codeceptjs/test @playwright/test
```

### 2. Declare global types

1. Create `<root>/global.d.ts`

```typescript
declare global {
  namespace codeceptFixtureTypes {
    type extensions = {}
  }
}

export {}
```

2. Update `<root>/tsconfig.json`

```json5
{
  "files": [
    "global.d.ts"
  ],
  "include": [
    "__integration-tests__", // including testing directory if it outside business-code.
    "playwright.config.ts"   // including playwright config for resolving global types.
  ]
}
```

### 3. That's it. You can write codecept tests now.
Example in `<root>/__integration-tests__/basic-example.spec.ts`

---

## Installing extensions

### 1. Install dependencies.

for example, you were chosen **utils-extension**.

```shell
npm i -D @pw-codeceptjs/utils-extension
```

### 2. Declare types in `global.d.ts`.

```typescript
import { Utils } from '@pw-codeceptjs/utils-extension'

declare global {
  namespace codeceptFixtureTypes {
    type extensions = {
      utils: typeof Utils
    }
  }
}
```

### 3. Update playwright config

1. Connect updated global types

```typescript
import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig<codeceptFixtureTypes.options> = {}

export default config
```

2. Register extensions

```typescript
import { PlaywrightTestConfig } from '@playwright/test'
import { Utils } from '@pw-codeceptjs/utils-extension'

const config: PlaywrightTestConfig<codeceptFixtureTypes.options> = {
  use: {
    codeceptExtensions: {
      utils: Utils,
    },
  },
}

export default config
```

### 4. That's it. You can use connected extensions in tests.
Example in `<root>/__integration-tests__/extension-example.spec.ts`
