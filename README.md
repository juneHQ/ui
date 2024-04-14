![](/assets/logo.png)

# June Charts

This repository contains the source code for the June Charts library.

To see the components in action, visit the [Storybook](https://junehq.github.io/charts/).

## Installation

To install the library, run the following command:

```bash
npm install @june-so/charts
```

## Usage

To use the library, import the components you need and use them in your project:

```javascript
import "@june-so/charts/dist/style.css";
import { BarChart } from '@june-so/charts';
```

That's it for now! This library is still in alpha development, so don't expect too much from it just yet.

## Releasing

To release a new version of the library, run the following command:

```bash
npm version patch
```

This will update the version number in the `package.json` file and create a new tag in the Git repository.

After that, you can publish the new version to NPM by merging your changes to the `main` branch.



