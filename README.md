# docast

[![github release](https://img.shields.io/github/v/release/flex-development/docast.svg?include_prereleases&sort=semver)](https://github.com/flex-development/docast/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/docast.svg)](https://npmjs.com/package/@flex-development/docast)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/docast.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

**Doc**block **A**bstract **S**yntax **T**ree.

---

**docast** is a specification for representing [docblock comments](#docblock-comment) as [abstract syntax trees][unist-syntax-tree].

It implements the [**unist**][unist] spec.

## Contents

- [Introduction](#introduction)
  - [Where this specification fits](#where-this-specification-fits)
- [Types](#types)
- [Nodes (abstract)](#nodes-abstract)
  - [`Node`](#node)
    - [`Position`](#position)
    - [`Point`](#point)
  - [`Literal`](#literal)
  - [`Parent`](#parent)
- [Nodes](#nodes)
  - [`BlockTag`](#blocktag)
  - [`Comment`](#comment)
    - [`CodeSegment`](#codesegment)
  - [`Description`](#description)
  - [`InlineTag`](#inlinetag)
  - [`Root`](#root)
  - [`TypeExpression`](#typeexpression)
- [Mixins](#mixins)
  - [`Tag`](#tag)
- [Content model](#content-model)
  - [`BlockTagContent`](#blocktagcontent)
  - [`DescriptionContent`](#descriptioncontent)
  - [`FlowContent`](#flowcontent)
  - [`PhrasingContent`](#phrasingcontent)
- [Glossary](#glossary)
- [List of utilities](#list-of-utilities)
- [Contribute](#contribute)

## Introduction

This document defines a format for representing [docblock comments](#docblock-comment) as [abstract syntax trees][unist-syntax-tree].
Development of docast started in October 2022. This specification is written in a [TypeScript][typescript]-like grammar.

### Where this specification fits

docast extends [unist][unist], a format for syntax trees, to benefit from its [ecosystem of utilities][unist-utilities].
It also integrates with [mdast][mdast], a specification for representing markdown.

docast relates to [JavaScript][javascript] and [TypeScript][typescript] in that both languages support docblock comments.
docast is **language-agnostic**, however, and can be used with any programming language that supports docblock comments.

docast relates to [JSDoc][jsdoc], [TSDoc][tsdoc], and [typedoc][typedoc] in that these tools parse docblock comments.
These tools also have a limited set of tags that developers are allowed to use. If developers already have a set of tags
they're using, they must spend additional time re-configuring those tags for their chosen tool. **docast does not
enforce any tag semantics** &mdash; the user does. Tag specifications can be left to an [ESLint][eslint] rule or setting
akin to [`jsdoc/check-tag-names`][check-tag-names] or [`jsdoc.structuredTags`][structuredtags].

## Types

TypeScript users can integrate `docast` type definitions into their project by installing the appropriate packages:

```sh
yarn add @flex-development/docast @flex-development/unist-util-types @types/mdast @types/unist
```

## Nodes (abstract)

### `Node`

```ts
interface Node extends unist.Node {
  position?: Position | undefined
}
```

**Node** ([**unist.Node**][unist-node]) is a syntactic unit in docast syntax trees.

The `position` field represents the location of a node in a source document. The value of the `position` field implements
the [`Position`](#position) interface. The `position` field must not be present if a node is [*generated*][unist-generated].

#### `Position`

```ts
interface Position {
  end: Point
  start: Point
}
```

**Position** represents the location of a node in a source [*file*][unist-file].

The `start` field of **Position** represents the index of the first character of the parsed source region. The `end`
field represents the index of the first character after the parsed source region, whether it exists or not. The value
of the `start` and `end` fields implement the [**Point**](#point) interface.

If the syntactic unit represented by a node is not present in the source [*file*][unist-file] at the time of parsing,
the node is said to be [*generated*][unist-generated] and it must not have positional information.

#### `Point`

```ts
interface Point {
  column: number // >= 1
  line: number // >= 1
  offset: number // >= 0
}
```

**Point** represents one place in a source [*file*][unist-file].

The `line` and `column` fields are `1`-indexed integers representing a line and column in a source file. The offset
field (`0`-indexed integer) represents a character in a source file.

The term character refers to a (UTF-16) code unit as defined by the [Web IDL specification][webidl-spec].

### `Literal`

```ts
interface Literal extends Node {
  value: string
}
```

**Literal** represents an abstract interface in docast containing a value.

Its `value` field is a `string`.

### `Parent`

```ts
interface Parent extends unist.Parent {
  children: Child[]
}
```

**Parent** ([**unist.Parent**][unist-parent]) represents an abstract interface in docast containing other nodes (said to
be [*children*][unist-child]).

Its content is limited to [docast content](#content-model) and [mdast content][mdast-content].

## Nodes

### `BlockTag`

```ts
interface BlockTag extends Parent, Tag {
  children: BlockTagContent[]
  data?: BlockTagData | undefined
  type: 'blockTag'
}
```

**BlockTag** ([**Parent**](#parent)) represents top-level metadata.

**BlockTag** can be used in [**comment**](#comment) nodes. Its content model is [**block tag**](#blocktagcontent)
content.

### `Comment`

```ts
interface Comment extends Parent {
  children: FlowContent[]
  code?: CodeSegment | null | undefined
  data?: CommentData | undefined
  type: 'comment'
}
```

**Comment** ([**Parent**](#parent)) represents a [*docblock comment*](#docblock-comment) in a source [*file*][unist-file].

The `code` field represents the segment of code documented by a comment. The value of the `code` field may be `null`,
`undefined`, or implement the [`CodeSegment`](#codesegment) interface. The `code` field must not be present if a comment
is used only to provide additional information.

**Comment** can be used in [**root**](#root) nodes. Its content model is [**flow**](#flowcontent) content.

#### `CodeSegment`

```ts
interface CodeSegment {
  identifier: string
  kind: number | string
  parent?: CodeSegment | null | undefined
  position: Position
}
```

**CodeSegment** represents the code segment in a [*file*][unist-file] that is documented by a [**comment**](#comment).

The `identifier` field represents the name of documented code segment. The value of the `identifier` field is a
non-empty string that matches the identifier found in the respective programming langauge's AST.

The `kind` field represents the syntax kind of the code segment. The value of the `kind` field is an enumerated value.

The `parent` field represents the code segment the current segment is nested under. The value of the `parent` field may
be `null` or `undefined` for top-level code segments, or for nested code segments, implement the `CodeSegment` interface.

### `Description`

```ts
interface Description extends Parent {
  children: DescriptionContent[]
  data?: DescriptionData | undefined
  type: 'description'
}
```

**Description** ([**Parent**](#parent)) represents the text of a [**comment**](#comment). It is located at the start of
a comment, before any [**block tags**](#blocktag), and may contain [Markdown][mdast] content.

**Description** can be used in [**comment**](#comment) nodes. Its content model is [**description**](#descriptioncontent).

### `InlineTag`

```ts
interface InlineTag extends Literal, Tag {
  data?: InlineTagData | undefined
  type: 'inlineTag'
}
```

**InlineTag** ([**Literal**](#literal)) represents inline metadata.

**InlineTag** can be used in [**block tag**](#blocktag) and [**description**](#description) nodes. It cannot contain any
children &mdash; it is a [*leaf*][unist-leaf].

### `Root`

```ts
interface Root extends Parent {
  children: Comment[]
  data?: RootData | undefined
  type: 'root'
}
```

**Root** ([**Parent**](#parent)) represents a document.

**Root** can be used as the [*root*][unist-root] of a [*tree*][unist-tree], never as a [*child*][unist-child]. It can
contain [**comment**](#comment) nodes.

### `TypeExpression`

```ts
interface TypeExpression extends Literal {
  data?: TypeExpressionData | undefined
  type: 'typeExpression'
}
```

**TypeExpression** ([**Literal**](#literal)) represents a type defintion or constraint.

**TypeExpression** can be used in [**block tag**](#blocktag) nodes. It cannot contain any children &mdash; it is a
[*leaf*][unist-leaf].

## Mixins

### `Tag`

```ts
interface Tag {
  name: TagName
}
```

**Tag** represents metadata associated with a [**comment**](#comment).

The `name` field represents the tag name. Tag names start with an at-sign (`@`) and may contain any ASCII letters after
the at-sign.

## Content model

```ts
type Content = BlockTagContent | DescriptionContent | FlowContent | PhrasingContent
```

Nodes are grouped by content type, if applicable. Each node in docast, with the exception of [`Comment`](#comment),
falls into one or more categories of `Content`.

### `BlockTagContent`

```ts
type BlockTagContent = PhrasingContent | TypeExpression
```

**Block** content represents [**block tag**](#blocktag) text, and its markup.

### `DescriptionContent`

```ts
type DescriptionContent =
  | mdast.Blockquote
  | mdast.Definition
  | mdast.FootnoteDefinition
  | mdast.List
  | mdast.ListItem
  | mdast.Paragraph
  | mdast.Table
  | mdast.ThematicBreak
  | PhrasingContent
```

**Description** content represents [**description**](#description) text, and its markup.

### `FlowContent`

```ts
type FlowContent = BlockTag | Description
```

**Flow** content represents the sections of [**comment**](#comment).

### `PhrasingContent`

```ts
type PhrasingContent = InlineTag | mdast.Code | mdast.PhrasingContent
```

**Phrasing** content represents [**comment**](#comment) text, and its markup.

## Glossary

See the [unist glossary][unist-glossary] for more terms.

### Docblock comment

A specially formatted [comment][wiki-comment] in a source [*file*][unist-file] used to document a segment of code or
provide additional information.

## List of utilities

See the [unist list of utilities][unist-utilities] for more utilities.

- [`docast-util-from-docs`][docast-util-from-docs] - parse docblocks

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

Ideas for new utilities and tools can be posted in [docast/ideas][docast-ideas].

This project has a [code of conduct](CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[check-tag-names]: https://github.com/gajus/eslint-plugin-jsdoc-check-tag-names
[docast-ideas]: https://github.com/flex-development/docast/discussions/new?category=idea
[docast-util-from-docs]: https://github.com/flex-development/docast-util-from-docs
[eslint]: https://eslint.org
[javascript]: https://www.ecma-international.org/ecma-262/9.0/index.html
[jsdoc]: https://jsdoc.app
[mdast-content]: https://github.com/syntax-tree/mdast#content-model
[mdast]: https://github.com/syntax-tree/mdast
[structuredtags]: https://github.com/gajus/eslint-plugin-jsdoc-structuredtags
[tsdoc]: https://tsdoc.org
[typedoc]: https://github.com/TypeStrong/typedoc
[typescript]: https://typescriptlang.org
[unist-child]: https://github.com/syntax-tree/unist#child
[unist-file]: https://github.com/syntax-tree/unist#file
[unist-generated]: https://github.com/syntax-tree/unist#generated
[unist-glossary]: https://github.com/syntax-tree/unist#glossary
[unist-leaf]: https://github.com/syntax-tree/unist#leaf
[unist-node]: https://github.com/syntax-tree/unist#node
[unist-parent]: https://github.com/syntax-tree/unist#parent
[unist-root]: https://github.com/syntax-tree/unist#root
[unist-syntax-tree]: https://github.com/syntax-tree/unist#syntax-tree
[unist-tree]: https://github.com/syntax-tree/unist#tree
[unist-utilities]: https://github.com/syntax-tree/unist#list-of-utilities
[unist]: https://github.com/syntax-tree/unist
[webidl-spec]: https://webidl.spec.whatwg.org/
[wiki-comment]: https://en.wikipedia.org/wiki/Comment_(computer_programming)
