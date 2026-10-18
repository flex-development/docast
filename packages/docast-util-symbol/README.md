# docast-util-symbol

[![github release](https://img.shields.io/github/v/release/flex-development/docast.svg?include_prereleases\&sort=date\&filter=docast-util-symbol%40*)](https://github.com/flex-development/docast/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/docast-util-symbol.svg)](https://npmjs.com/package/@flex-development/docast-util-symbol)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/docast-util-symbol.svg)](https://www.npmcharts.com/compare/@flex-development/docast-util-symbol?interval=30)
[![minified bundle size](https://badgen.net/bundlephobia/min/@flex-development/docast-util-symbol?cache)](https://bundlephobia.com/package/@flex-development/docast-util-symbol)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/docast-util-symbol)](https://packagephobia.now.sh/result?p=@flex-development/docast-util-symbol)
[![tree shaking suppport](https://badgen.net/bundlephobia/tree-shaking/@flex-development/docast-util-symbol)](https://bundlephobia.com/package/@flex-development/docast-util-symbol)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/docast)](LICENSE.md)

[docast][] utility with symbols.

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Types](#types)
- [Contribute](#contribute)

## What is this?

This package exposes constants used throughout the docast ecosystem.

## When should I use this?

This package is useful when making your docast extensions.
It’s useful to reference these constants by name instead of value while developing.

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/docast-util-symbol
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { } from 'https://esm.sh/@flex-development/docast-util-symbol'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { } from 'https://esm.sh/@flex-development/docast-util-symbol'
</script>
```

## Use

**TODO**: use

## API

This package exports the identifiers `nodes` and `nt`.\
There is no default export.

Each identifier is an object mapping strings to values.\
See the [code](./src/) for the exposed data.

## Types

This package is fully typed with [TypeScript][].\
It exports no additional types.

## Project

### Version

docast-util-symbol adheres to [semver][].

### Contribute

See [`CONTRIBUTING.md`][contributing].

This project has a [code of conduct][code-of-conduct].\
By interacting with this repository, organization, or community you agree to abide by its terms.

### Sponsor

Small primitives power larger systems.
Support long-term stability by sponsoring Flex Development.

[code-of-conduct]: ../../CODE_OF_CONDUCT.md

[contributing]: ../../CONTRIBUTING.md

[docast]: ../docast/README.md

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[semver]: https://semver.org

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
