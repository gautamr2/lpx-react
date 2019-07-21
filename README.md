# lpx-react

[![Build Status](https://travis-ci.org/gautamr2/lpx-react.svg?branch=master)](https://travis-ci.org/gautamr2/lpx-react)
[![Coverage Status](https://coveralls.io/repos/github/gautamr2/lpx-react/badge.svg?branch=master)](https://coveralls.io/github/gautamr2/lpx-react?branch=master)
[![npm version](https://badge.fury.io/js/lpx-react.svg)](https://badge.fury.io/js/lpx-react)


A React component library

## Demo

Browse components and explore their props with [Storybook](https://alex996.github.io/react-css-spinners).

## Quick Start

Install the package with `npm`

```sh
npm i lpx-react
```

or `yarn` - whichever you prefer

```sh
yarn add lpx-react
```

Import any spinner you like

```js
import { Ellipsis } from 'lpx-react'
```

and then it's business as usual

```js
const Loader = props => (
  <Ellipsis />
)
```

## Prerequisites

This library imports its styles through JavaScript. To make it work, you may need to tweak your config.
