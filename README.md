## ControlPro

### Package Manager

  `yarn set version 3.4.1` - use latest version of yarn
  - If you get an error saying that it cannot be located, remove the line `yarnPath: .yarn/releases/yarn-3.4.1.cjs` from `.yarnrc.yml` and try again

### Dev mode

  `yarn` - install dev and app dependencies
  `yarn dev` - run dev server, should be available at `http://localhost:3000/`

___

### Build

  `yarn` - install dev dependencies
  `yarn build` - build app, outputs to `/dist`

___

### Opening build

  Opening `/dist/*.html` in a browser without CORS restrictions should work. Personally I use Safari and make sure to have the following settings checked in the `Develop` tab:
  
![Safari Settings 1](./.readme-assets/1.png)
![Safari Settings 2](./.readme-assets/2.png)

___

### Global Dependencies

  `node` - `v18.13.0`
  `npm` - `v8.15.0`

### Dependencies

#### "clsx"
  Helper for modifying HTML element classes.
#### "@emotion/styled"
  Composable CSS.
#### "@emotion/react"
  Allows composable CSS to be applied per React component.
#### "typescript"
  Typed javascript.
#### "@types/*"
  A common folder for collection of types for project dependencies.
#### "react"
  IU builder library. Provides a virtual DOM that combines HTML and Javascript to allow better control of state, side-effectsa and element structure.
#### "react-dom"
  Provides an entry-point for react to interact with the HTML DOM.
#### "unocss"
  Creates HTML element classes that represent shortcuts for css styles. Helps development speed and keeps code DRY
  eg/ "flex w-1" : { display: "flex", width: "4rem" }
#### "vite"
  Package bundler and dev environment.
#### "@vitejs/plugin-react"
  React specific javascript compliations and fast refresh when editing code.
#### "vite-tsconfig-paths"
  Use of consistent module imports, helps refactor and development speed.
#### "vite-plugin-virtual-mpa"
  MPA structure with html template and EJS
#### "cors-anywhere"
  Proxy to remove CORS restrictions in dev environment
___
