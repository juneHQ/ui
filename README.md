![](/assets/hero.png)

<div align="center">
  <br />

  <div align="center">
    <a href="https://www.npmjs.com/package/@june-so/ui">
      <img alt="NPM Downloads" src="https://img.shields.io/npm/d18m/%40june-so%2Fui">
    </a>
    <a href="https://github.com/juneHQ/ui/blob/main/LICENSE">
      <img alt="MIT" src="https://img.shields.io/github/license/juneHQ/ui" height="20" width="auto">
    </a>
    <a href="https://twitter.com/intent/follow?screen_name=JuneDotSo">
      <img src="https://img.shields.io/twitter/follow/JuneDotSo?style=social" alt="Follow at JuneDotSo" />
    </a>
  </div>
  <br />
</div>

# React components to build charts and dashboards

This repository contains the source code for the June UI library.

To see the components in action, visit the [Storybook](https://junehq.github.io/ui/).

![](/assets/screenshot.png)

## Philosophy

This library is an experiment to be a middle ground between Application UI templates like Tailwind UI, and design systems built for specific companies like Shopify Polaris.

The goal is to provide a set of high-quality beautiful components and charts, that can be easily integrated into any project without the need for customization.

The components are not meant to be as composable as Radix UI - they are meant to be good enough to be used as is, but customizable enough to fit the needs of most small apps.

Our approach is to extract generic components from [June](https://june.so) and make them:

- Easily reusable
- Beautiful and polished - to be used as is
- Flexible enough - to be customized when needed


## Installation

To install the library, run the following command:

```bash
npm install @june-so/ui
```

## Usage

To use the library, import the components you need and use them in your project:

```javascript
import "@june-so/ui/style.css";
import { BarChart } from '@june-so/ui';
```

That's it for now! This library is still in alpha development, so don't expect too much from it just yet.


## Development

To start developing the library, clone the repository and install the dependencies:

```bash
git clone https://github.com/junehq/ui.git
cd ui
npm install
```

To start the development server and Storybook, run the following commands:

```bash
npm run storybook
npm run dev 
```

This will start the Storybook server and the development server for the library.

To run the tests, use the following command:

```bash
npm run test
```

## Releasing

To release a new version of the library, run the following command:

```bash
npm version patch
```

This will update the version number in the `package.json` file and create a new tag in the Git repository.

After that, you can publish the new version to NPM by merging your changes to the `main` branch.


## Contributing

We welcome contributions to the library! If you have an idea for a new component, a bug fix, or a feature request, please open an issue or a pull request.

