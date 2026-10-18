# docast-compiler-types

[![github release](https://img.shields.io/github/v/release/flex-development/docast.svg?include_prereleases\&sort=date\&filter=docast-compiler-types%40*)](https://github.com/flex-development/docast/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/docast-compiler-types.svg)](https://npmjs.com/package/@flex-development/docast-compiler-types)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/docast-compiler-types.svg)](https://www.npmcharts.com/compare/@flex-development/docast-compiler-types?interval=30)
[![minified bundle size](https://badgen.net/bundlephobia/min/@flex-development/docast-compiler-types?cache)](https://bundlephobia.com/package/@flex-development/docast-compiler-types)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/docast-compiler-types)](https://packagephobia.now.sh/result?p=@flex-development/docast-compiler-types)
[![tree shaking suppport](https://badgen.net/bundlephobia/tree-shaking/@flex-development/docast-compiler-types)](https://bundlephobia.com/package/@flex-development/docast-compiler-types)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/docast)](LICENSE.md)

[docast][] compiler utility package with TypeScript types.

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Types](#types)
- [Contribute](#contribute)

## What is this?

**TODO**: what is this?

## When should I use this?

This package is useful when making your own, typed, docast compiler extensions.

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/docast-compiler-types
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import type { CompileContext, /* … */ } from 'https://esm.sh/@flex-development/docast-compiler-types'
```

## Use

```ts
import type { CompileContext } from '@flex-development/docast-compiler-types'
```

```js
/**
 * @import {CompileContext} from '@flex-development/docast-compiler-types'
 */
```

## API

This module exports no identifiers.
There is no default export.

See the [code](./src/index.mts) for all exposed types.

## Types

This package is fully typed with [TypeScript][].\
It exports interfaces and types.

## Project

### Version

docast-compiler-types adheres to [semver][].

### Contribute

See [`CONTRIBUTING.md`][contributing].

This project has a [code of conduct][code-of-conduct].\
By interacting with this repository, organization, or community you agree to abide by its terms.

### Sponsor

Support long-term stability by sponsoring Flex Development!

[code-of-conduct]: ../../CODE_OF_CONDUCT.md

[contributing]: ../../CONTRIBUTING.md

[docast]: ../docast/README.md

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[semver]: https://semver.org

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
