# docast

[![github release](https://img.shields.io/github/v/release/flex-development/docast.svg?include_prereleases\&sort=semver)](https://github.com/flex-development/docast/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/docast.svg)](https://npmjs.com/package/@flex-development/docast)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/docast.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat\&logo=vitest\&logoColor=ffffff)](https://vitest.dev)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

**Doc**block **A**bstract **S**yntax **T**ree.

---

**docast** is a specification for representing [docblock comments](#docblock-comment) as [abstract syntax
trees][unist-syntax-tree].

It implements the [**unist**][unist] spec.

## Contents

- [Introduction](#introduction)
  - [Where this specification fits](#where-this-specification-fits)
- [Types](#types)
- [Nodes (abstract)](#nodes-abstract)
  - [`Node`](#node)
  - [`Literal`](#literal)
  - [`Parent`](#parent)
- [Nodes](#nodes)
  - [`BlockTag`](#blocktag)
  - [`Comment`](#comment)
    - [`CodeSegment`](#codesegment)
  - [`Description`](#description)
  - [`InlineTag`](#inlinetag)
  - [`Root`](#root)
  - [`TypeMetadata`](#typemetadata)
- [Mixins](#mixins)
  - [`Tag`](#tag)
    - [`TagName`](#tagname)
- [Content model](#content-model)
  - [`BlockTagContent`](#blocktagcontent)
  - [`DescriptionContent`](#descriptioncontent)
  - [`FlowContent`](#flowcontent)
  - [`PhrasingContent`](#phrasingcontent)
  - [`TypeExpression`](#typeexpression)
- [Glossary](#glossary)
- [List of utilities](#list-of-utilities)
- [Contribute](#contribute)

## Introduction

This document defines a format for representing [docblock comments](#docblock-comment) as [abstract syntax
trees][unist-syntax-tree]. Development of docast started in October 2022. This specification is written in a
[TypeScript][]-like grammar.

### Where this specification fits

docast extends [unist][], a format for syntax trees, to benefit from its [ecosystem of utilities][unist-utilities].
It also integrates with [mdast][], a specification for representing markdown.

docast relates to [JavaScript][] and [TypeScript][] in that both languages support docblock comments. docast is
**language-agnostic**, however, and can be used with any programming language that supports docblock comments.

docast relates to [JSDoc][], [TSDoc][], and [typedoc][] in that these tools parse docblock comments. These tools also
have a limited set of tags that developers are allowed to use. If developers already have a set of tags they're using,
they must spend additional time re-configuring those tags for their chosen tool. **docast does not enforce any tag
semantics** — the user does. Tag specifications can be left to an [ESLint][] rule, or a setting akin to
[`jsdoc/check-tag-names`][check-tag-names] or [`jsdoc.structuredTags`][structuredtags].

## Types

TypeScript users can integrate `docast` type definitions into their project by installing the appropriate packages:

```sh
yarn add @flex-development/docast
```

## Nodes (abstract)

### `Node`

```ts
interface Node extends unist.Node {}
```

**Node** ([**unist.Node**][unist-node]) is a syntactic unit in docast syntax trees.

### `Literal`

```ts
interface Literal extends Node {
  value: bigint | boolean | number | string | null | undefined
}
```

**Literal** represents an abstract interface in docast containing the smallest possible value.

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
  children:
    | Exclude<BlockTagContent, TypeMetadata>[]
    | [TypeMetadata, ...Exclude<BlockTagContent, TypeMetadata>[]]
  data?: BlockTagData | undefined
  type: 'blockTag'
}
```

**BlockTag** ([**Parent**](#parent)) represents top-level metadata.

Block tags should be the only element on their line, except in cases where special meaning is assigned to succeeding
text. All text following a block [tag name](#tagname), up until the start of the next block tag name, or comment closer
(`*/`), is considered to be the block tag's [*tag content*](#tag-content).

**BlockTag** can be used in [**comment**](#comment) nodes. Its content model is [**block tag**](#blocktagcontent)
content.

### `Comment`

```ts
interface Comment extends Parent {
  children:
    | Exclude<FlowContent, Description>[]
    | [summary: Description, ...Exclude<FlowContent, Description>[]]
  code?: CodeSegment | null | undefined
  data?: CommentData | undefined
  type: 'comment'
}
```

**Comment** ([**Parent**](#parent)) represents a [*docblock comment*](#docblock-comment) in a source
[*file*][unist-file].

The `code` field represents the segment of code documented by a comment. The value of the `code` field may be `null`,
`undefined`, or implement the [`CodeSegment`](#codesegment) interface. The `code` field must not be present if a comment
is used only to provide additional information.

**Comment** can be used in [**root**](#root) nodes. Its content model is [**flow**](#flowcontent) content.

#### `CodeSegment`

```ts
interface CodeSegment {
  position: unist.Position
  type: string
}
```

**CodeSegment** represents the code segment in a [*file*][unist-file] that is documented by a [**comment**](#comment).

The value of the `type` field is the node type of the code segment.

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
  value: string
}
```

**InlineTag** ([**Literal**](#literal)) represents inline metadata.

Inline tags are denoted by wrapping a [tag name](#tagname) and any [*tag content*](#tag-content) in angle brackets (`{`
and `}`).

**InlineTag** can be used in [**block tag**](#blocktag) and [**description**](#description) nodes. It cannot contain any
children — it is a [*leaf*][unist-leaf].

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

### `TypeMetadata`

```ts
interface TypeMetadata extends Parent {
  children: TypeExpression[]
  data?: TypeMetadataData | undefined
  raw: string
  type: 'typeMetadata'
}
```

**TypeMetadata** ([**Parent**](#parent)) represents an inlined type expression (e.g. `{number}`).

**TypeMetadata** can be used in [**block tag**](#blocktag) nodes. Its content model is [**type expresssion**](#typeexpression).

A `raw` field must be present. Its value is the raw type expression (e.g. `number`).

## Mixins

### `Tag`

```ts
interface Tag {
  name: TagName
}
```

**Tag** represents metadata associated with a [**comment**](#comment).

The `name` field represents the tag name. Tag names start with an at-sign (`@`) and may contain any ASCII letter after
the at-sign.

#### `TagName`

```ts
type TagName<T extends string = string> = `@${T}`
```

## Content model

```ts
type Content = BlockTagContent | DescriptionContent | FlowContent | PhrasingContent
```

Nodes are grouped by content type, if applicable. Each node in docast, with the exception of [`Comment`](#comment),
falls into one or more categories of `Content`.

### `BlockTagContent`

```ts
type BlockTagContent = PhrasingContent | TypeMetadata
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

### `TypeExpression`

```ts
type TypeExpression = TypeExpressionMap[keyof TypeExpressionMap]
```

**TypeExpression** content is a type expression.

When developing type expression parsers compatible with docast, the `TypeExpressionMap` map should be augmented (and
exported! \:wink:) to register custom nodes:

```ts
declare module '@flex-development/docast' {
  interface TypeExpressionMap {
    arrayType: ArrayType
    assertionPredicate: AssertionPredicate
    bigint: BigIntLiteral
    boolean: BooleanLiteral
    conditionalType: ConditionalType
    constructorType: ConstructorType
    functionType: FunctionType
    genericType: GenericType
    identifier: Identifier
    inferType: InferType
    intersectionType: IntersectionType
    nonNullableType: NonNullableType
    null: NullLiteral
    nullableType: NullableType
    number: NumberLiteral
    objectLiteralType: ObjectLiteralType
    optionalType: OptionalType
    parenthesizedType: ParenthesizedType
    propertyAccessType: PropertyAccessType
    string: StringLiteral
    super: Super
    templateLiteral: TemplateLiteral
    this: This
    tupleType: TupleType
    typeOperation: TypeOperation
    typePredicate: TypePredicate
    typeSymbol: TypeSymbol
    undefined: UndefinedLiteral
    unionType: UnionType
    variadicType: VariadicType
  }
}
```

## Glossary

See the [unist glossary][unist-glossary] for more terms.

### Docblock comment

A specially formatted [comment][wiki-comment] in a source [*file*][unist-file] used to document a segment of code or
provide additional information.

### Tag content

Any text following a [block tag](#blocktag) name (e.g. `@example`, `@param`), up until the start of the next block tag
or comment closer (`*/`), or any text following an [inline tag](#inlinetag) name, up until the closing punctuator (`}`).

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

[unist-glossary]: https://github.com/syntax-tree/unist#glossary

[unist-leaf]: https://github.com/syntax-tree/unist#leaf

[unist-node]: https://github.com/syntax-tree/unist#node

[unist-parent]: https://github.com/syntax-tree/unist#parent

[unist-root]: https://github.com/syntax-tree/unist#root

[unist-syntax-tree]: https://github.com/syntax-tree/unist#syntax-tree

[unist-tree]: https://github.com/syntax-tree/unist#tree

[unist-utilities]: https://github.com/syntax-tree/unist#list-of-utilities

[unist]: https://github.com/syntax-tree/unist

[wiki-comment]: https://en.wikipedia.org/wiki/Comment_\(computer_programming\)
