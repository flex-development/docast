# docast

[![conventional commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![npm](https://img.shields.io/npm/v/@flex-development/docast.svg)](https://npmjs.com/package/@flex-development/docast)
[![license](https://img.shields.io/github/license/flex-development/docast.svg)](LICENSE.md)
[![typescript](https://badgen.net/badge/-/typescript?color=2a72bc&icon=typescript&label)](https://typescriptlang.org)

**Doc**block **A**bstract **S**yntax **T**ree.

***

**docast** is a specification for representing [docblock
comments](#docblock-comment) as [abstract syntax trees][1]. It implements the
[**unist**][2] spec.

## Contents

- [Introduction](#introduction)
  - [Where this specification fits](#where-this-specification-fits)
- [Nodes](#nodes)
  - [`Node`](#node)
  - [`Parent`](#parent)
  - [`Root`](#root)
  - [`Comment`](#comment)
  - [`ImplicitDescription`](#implicitdescription)
  - [`BlockTag`](#blocktag)
  - [`InlineTag`](#inlinetag)
- [Interfaces](#interfaces)
  - [`Context`](#context)
- [Glossary](#glossary)
- [List of utilities](#list-of-utilities)
- [Contribute](#contribute)

## Introduction

This document defines a format for representing [docblock
comments](#docblock-comment) as [abstract syntax trees][1]. Development of
docast started in October 2022. This specification is written in a [Web
IDL][3]-like grammar.

### Where this specification fits

docast extends [unist][2], a format for syntax trees, to benefit from its
[ecosystem of utilities][4].

docast relates to [JavaScript][5] and [TypeScript][6] in that both languages
support docblock comments. docast is **language-agnostic**, however, and can be
used with any programming language.

docast relates to [JSDoc][7], [TSDoc][8], and [typedoc][9] in that these tools
parse docblock comments. These tools also have a limited set of tags that
developers are allowed to use. If developers already have a set of tags they're
using, they must spend additional time re-configuring those tags for their
chosen tool. **docast does not enforce any tag semantics** &mdash; the user
does. Tag specifications can be left to an [ESLint][10] rule or setting akin to
[`jsdoc/check-tag-names`][11] or [`jsdoc.structuredTags`][12].

## Nodes

### Node

```idl
interface Node <: UnistNode {
  type: 'block-tag' | 'comment' | 'implicit-description' | 'inline-tag' | 'root'
}
```

**Node** ([**UnistNode**][13]) is a syntactic unit in docast syntax trees.

### Parent

```idl
interface Parent <: UnistParent {
  children: [BlockTag | Comment | ImplicitDescription | InlineTag]
  type: 'block-tag' | 'comment' | 'implicit-description' | 'root'
}
```

**Parent** ([**UnistParent**][14]) represents an abstract interface in docast
containing other nodes (said to be [*children*][15]).

### Root

```idl
interface Root <: Parent {
  children: [Comment]
  type: 'root'
}
```

**Root** ([**Parent**](#parent)) represents a document.

**Root** can be used as the [*root*][16] of a [*tree*][17], never as a
[*child*][18]. It can contain [**comment**](#comment) nodes.

### Comment

```idl
interface Comment <: Parent {
  children: [BlockTag | ImplicitDescription]
  context: Context?
  type: 'comment'
  value: string
}
```

**Comment** ([**Parent**](#parent)) represents a [docblock
comment](#docblock-comment).

**Comment** can be used in [**root**](#root) nodes. It can contain [**implicit
description**](#implicitdescription) and [**block tag**](#blocktag) nodes.

A **comment** has [*context*](#context) if [positioned][19] exactly one line
before the code it documents.

### ImplicitDescription

```idl
interface ImplicitDescription <: Parent {
  children: [InlineTag]
  type: 'implicit-description'
  value: string
}
```

**ImplicitDescription** ([**Parent**](#parent)) represents a piece of text
located at the **beginning** of a [docblock comment](#docblock-comment).

**ImplicitDescription** can be used in [**comment**](#comment) nodes. It can
contain [**inline tag**](#inlinetag) nodes.

### BlockTag

```idl
interface BlockTag <: Parent {
  children: [InlineTag]
  tag: string
  type: 'block-tag'
  value: string
}
```

**BlockTag** ([**Parent**](#parent)) represents metadata in a [docblock
comment](#docblock-comment).

**BlockTag** can be used in [**comment**](#comment) nodes. It can contain
[**inline tag**](#inlinetag) nodes.

### InlineTag

```idl
interface InlineTag <: Node {
  tag: string
  type: 'inline-tag'
  value: string
}
```

**InlineTag** ([**Node**](#node)) represents inline metadata in a
[docblock comment](#docblock-comment).

**InlineTag** can be used in [**implicit description**](#implicitdescription)
and [**block tag**](#blocktag) nodes. It cannot contain any children &mdash; it
is a [*leaf*][20].

## Interfaces

### Context

```idl
interface Context {
  identifier: string
  kind: string
  parent: string?
  position: UnistPosition
}
```

Data representing the segment of code a [**comment**](#comment) documents.

## Glossary

See the [unist glossary][21] for more terms.

### Docblock comment

A specially formatted [comment][22] in a source file used to document a segment
of code or provide additional information.

## List of utilities

See the [unist list of utilities][4] for more utilities.

- [`docast-parse`][24] &mdash; [unified][25] compliant file parser

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

Ideas for new utilities and tools can be posted in [docast/ideas][23].

[1]: https://github.com/syntax-tree/unist#syntax-tree
[2]: https://github.com/syntax-tree/unist
[3]: https://heycam.github.io/webidl
[4]: https://github.com/syntax-tree/unist#list-of-utilities
[5]: https://www.ecma-international.org/ecma-262/9.0/index.html
[6]: https://typescriptlang.org
[7]: https://jsdoc.app
[8]: https://tsdoc.org
[9]: https://github.com/TypeStrong/typedoc
[10]: https://eslint.org
[11]: https://github.com/gajus/eslint-plugin-jsdoc#check-tag-names
[12]: https://github.com/gajus/eslint-plugin-jsdoc#structuredtags
[13]: https://github.com/syntax-tree/unist#node
[14]: https://github.com/syntax-tree/unist#parent
[15]: https://github.com/syntax-tree/unist#child
[16]: https://github.com/syntax-tree/unist#root
[17]: https://github.com/syntax-tree/unist#tree
[18]: https://github.com/syntax-tree/unist#child
[19]: https://github.com/syntax-tree/unist#positional-information
[20]: https://github.com/syntax-tree/unist#leaf
[21]: https://github.com/syntax-tree/unist#glossary
[22]: https://en.wikipedia.org/wiki/Comment_(computer_programming)
[23]: https://github.com/flex-development/docast/discussions/new?category=ideas
[24]: https://github.com/flex-development/docast-parse
[25]: https://github.com/unifiedjs/unified
