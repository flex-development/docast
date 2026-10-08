# docast

[![github release](https://img.shields.io/github/v/release/flex-development/docast.svg?include_prereleases\&sort=date)](https://github.com/flex-development/docast/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/docast.svg)](https://npmjs.com/package/@flex-development/docast)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/docast.svg)](https://www.npmcharts.com/compare/@flex-development/docast?interval=30)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/docast)](https://packagephobia.now.sh/result?p=@flex-development/docast)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/docast.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat\&logo=vitest\&logoColor=ffffff)](https://vitest.dev)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

**Doc**umentation **A**bstract **S**yntax **T**ree.

---

**docast** is a specification for representing [comments][glossary-comment]
as [abstract syntax trees][unist-syntax-tree].

It implements the [**unist**][unist] spec.

## Contents

- [Introduction](#introduction)
  - [Where this specification fits](#where-this-specification-fits)
- [Integration](#integration)
- [Nodes (abstract)](#nodes-abstract)
  - [`Node`][nodes-node]
  - [`Literal`][nodes-literal]
  - [`Parent`][nodes-parent]
- [Nodes](#nodes)
  - [`CodeSegment`][nodes-code-segment]
    - [`CodeSegmentName`][types-code-segment-name]
  - [`Comment`][nodes-comment]
  - [`Identifier`][nodes-identifier]
  - [`InlineTag`][nodes-inline-tag]
  - [`Namepath`][nodes-namepath]
  - [`NamepathConnector`][nodes-namepath-connector]
    - [`SerializedNamepathConnector`][types-serialized-namepath-connector]
  - [`Root`][nodes-root]
  - [`Summary`][nodes-summary]
  - [`Tag`][nodes-tag]
  - [`TagName`][nodes-tag-name]
    - [`SerializedTagName`][types-serialized-tag-name]
  - [`TypeMetadata`][nodes-type-metadata]
- [Content model][content-model]
  - [`CommentContent`][content-comment]
  - [`InlineTagContent`][content-tag]
  - [`PhrasingContent`][content-phrasing]
  - [`RootContent`][content-root]
  - [`SummaryContent`][content-summary]
  - [`TagContent`][content-inline-tag]
  - [`TypeExpression`][content-type-expression]
- [Glossary](#glossary)
- [List of utilities](#list-of-utilities)
- [Project](#project)
  - [Version](#version)
  - [Contribute](#contribute)
  - [Sponsor](#sponsor)

## Introduction

This document defines a format for representing [comments][glossary-comment]
as [abstract syntax trees][unist-syntax-tree].
Development of docast started in October 2022.
This specification is written in a [TypeScript][]-like grammar.

### Where this specification fits

docast extends [unist][], a format for syntax trees, to benefit from its [ecosystem of utilities][unist-utilities].
It also integrates with [mdast][], a specification for representing markdown.

docast relates to [JavaScript][] and [TypeScript][] in that both languages support docblock comments.
docast is **language-agnostic**, however, and can be used with any source language that supports comments.

docast relates to [JSDoc][], [TSDoc][], and [typedoc][] in that these tools parse docblock comments.
These tools also define or recognize sets of tags with established semantics. If developers already have a set of tags
they're using, they must spend additional time configuring those tags for their chosen tool.
docast, however, **does not enforce any tag semantics** — the user does.
Tag specifications can be left to an [ESLint][] rule, or a setting akin to [`jsdoc/check-tag-names`][check-tag-names]
or [`jsdoc.structuredTags`][structuredtags].

## Integration

[TypeScript][] users can integrate `docast` type definitions into their project by installing the appropriate packages:

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

**Literal** is an abstract interface in docast containing a scalar value.

### `Parent`

```ts
interface Parent extends unist.Parent {
  children: Child[]
}
```

**Parent** ([**unist.Parent**][unist-parent]) is an abstract interface in docast
containing other nodes (said to be [*children*][unist-child]).

Its content is limited to [docast content][content-model] and [mdast content][mdast-content].

## Nodes

### `CodeSegment`

```ts
interface CodeSegment extends Parent {
  children: [CodeSegment | Comment, ...(CodeSegment | Comment)[]]
  data?: CodeSegmentData | undefined
  name?: CodeSegmentName extends never ? string : CodeSegmentName | undefined
  type: 'codeSegment'
}
```

**CodeSegment** ([**Parent**][nodes-parent]) is an abstract representation of a source language AST (or CST) node that a
[`Comment`][nodes-comment] documents.

#### `CodeSegmentName`

```ts
type CodeSegmentName = CodeSegmentNameMap[keyof CodeSegmentNameMap]
```

Union of registered source language AST or CST node types.

When developing source language parsers compatible with docast,
the `CodeSegmentNameMap` should be augmented (and exported! \:wink:) to register custom node types:

```ts
declare module '@flex-development/docast' {
  interface CodeSegmentNameMap {
    arrayType: ArrayType['type']
    assertionPredicate: AssertionPredicate['type']
    bigint: BigIntLiteral['type']
    boolean: BooleanLiteral['type']
    conditionalType: ConditionalType['type']
    constructorType: ConstructorType['type']
    functionType: FunctionType['type']
    genericType: GenericType['type']
    identifier: Identifier['type']
    inferType: InferType['type']
    intersectionType: IntersectionType['type']
    nonNullableType: NonNullableType['type']
    null: NullLiteral['type']
    nullableType: NullableType['type']
    number: NumberLiteral['type']
    objectLiteralType: ObjectLiteralType['type']
    optionalType: OptionalType['type']
    parenthesizedType: ParenthesizedType['type']
    propertyAccessType: PropertyAccessType['type']
    string: StringLiteral['type']
    super: Super['type']
    templateLiteral: TemplateLiteral['type']
    this: This['type']
    tupleType: TupleType['type']
    typeOperation: TypeOperation['type']
    typePredicate: TypePredicate['type']
    typeSymbol: TypeSymbol['type']
    undefined: UndefinedLiteral['type']
    unionType: UnionType['type']
    variadicType: VariadicType['type']
  }
}
```

### `Comment`

```ts
interface Comment extends Parent {
  children:
    | FreeformCommentContent[]
    | [summary: Summary, ...FreeformCommentContent[]]
  data?: CommentData | undefined
  type: 'comment'
}
```

**Comment** ([**Parent**][nodes-parent]) represents a [comment][wiki-comment] in source content.

**Comment** can be used in [**root**][nodes-root] nodes.\
Its content model is [**comment**][content-comment] content.

### `Identifier`

```ts
interface Identifier extends Literal {
  data?: IdentifierData | undefined
  type: 'identifier'
  value: string
}
```

**Identifier** ([**Literal**][nodes-literal]) represents an identifier.\
It cannot contain any children — it is a [*leaf*][unist-leaf].

**Identifier** can be used in [**tag name**][nodes-tag-name] and [**namepath**][nodes-namepath] nodes.

### `InlineTag`

```ts
interface InlineTag extends Parent {
  children: [name: TagName, ...InlineTagContent[]]
  data?: InlineTagData | undefined
  name: string
  type: 'inlineTag'
}
```

**InlineTag** ([**Parent**][nodes-parent]) represents inline metadata.

Inline tags are denoted by wrapping a [`TagName`][nodes-tag-name] and any [*tag content*][glossary-tag-content]
in curly braces (`{` and `}`).

**InlineTag** can be used in [**comment**][nodes-comment], [**summary**][nodes-summary] and [**tag**][nodes-tag] nodes.

### `Namepath`

```ts
interface Namepath extends Parent {
  children: [identifier: Identifier, ...(Identifier | NamepathConnector)[]]
  data?: NamepathData | undefined
  type: 'namepath'
}
```

**Namepath** ([**Parent**][nodes-parent]) represents a source language namepath.

A namepath consists of one or more [**identifier**][nodes-identifier] nodes
separated by [**namepath connectors**][nodes-namepath-connector].

**Namepath** can be used in [**tag**][nodes-tag] nodes.

### `NamepathConnector`

```ts
interface NamepathConnector extends Literal {
  data?: NamepathConnectorData | undefined
  type: 'namepathConnector'
  value: SerializedNamepathConnector
}
```

**NamepathConnector** ([**Literal**][nodes-literal]) represents a connector between [**identifier**][nodes-identifier]
nodes in a [**namepath**][nodes-namepath].

It cannot contain any children — it is a [*leaf*][unist-leaf].

#### `SerializedNamepathConnector`

```ts
type SerializedNamepathConnector = '#' | '.' | '~'
```

The serialized form of a [**namepath connector**][nodes-namepath-connector].\
Its value is one of `#`, `.`, or `~`.

### `Root`

```ts
interface Root extends Parent {
  children: RootContent[]
  data?: RootData | undefined
  type: 'root'
}
```

**Root** ([**Parent**][nodes-parent]) represents a documentation fragment or an entire documented file.

A documented file, also known as a documentation root, is any source file containing comments.\
In docast, all comments are considered documentation, with `info` comments being comments identified as documentation
by the surrounding source language.\
Parser extensions and other tools can be used to differentiate between `info` comments and their counterpart,
petty comments.

**Root** can be used as the [*root*][unist-root] of a [*tree*][unist-tree], never as a [*child*][unist-child].\
It can contain [**code segment**][nodes-code-segment] and [**comment**][nodes-comment] nodes.

### `Summary`

```ts
interface Summary extends Parent {
  children: SummaryContent[]
  data?: SummaryData | undefined
  type: 'summary'
}
```

**Summary** ([**Parent**][nodes-parent]) represents text at the **beginning** of a [**comment**][nodes-comment].\
It starts and ends before any other comment syntax, and may contain [markdown][mdast] content.

**Summary** can be used in [**comment**][nodes-comment] nodes.\
Its content model is [**summary**][content-summary].

### `Tag`

```ts
interface Tag extends Parent {
  children:
    | [name: TagName, ...UntypedTagContent[]]
    | [name: TagName, Namepath | TypeMetadata, ...UntypedTagContent[]]
    | [name: TagName, type: TypeMetadata, namepath: Namepath, ...UntypedTagContent[]]
  data?: TagData | undefined
  type: 'tag'
}
```

**Tag** ([**Parent**][nodes-parent]) represents top-level metadata.

Tags should be the only element on their line, except in cases where special meaning is assigned to succeeding text.
All text following the [tag name][nodes-tag-name], up until the start of the next tag name or a comment closer, is
considered to be [*tag content*][glossary-tag-content].

**Tag** can be used in [**comment**][nodes-comment] nodes.
Its content model is [**tag**][content-tag] content.

### `TagName`

```ts
interface TagName extends Parent {
  children: [identifier: Identifier]
  data?: TagNameData | undefined
  type: 'tagName'
}
```

**TagName** ([**Parent**][nodes-parent]) represents a tag name.

A tag name consists of an at-sign (`@`) followed by an [**identifier**][nodes-identifier].

**TagName** can be used in [**tag**][nodes-tag] and [**inline tag**][nodes-inline-tag] nodes.

#### `SerializedTagName`

```ts
type SerializedTagName<Identifier extends string = string> = `@${Identifier}`
```

The serialized form of a [**tag name**][nodes-tag-name].

### `TypeMetadata`

```ts
interface TypeMetadata extends Parent {
  children: [expression: TypeExpression]
  data?: TypeMetadataData | undefined
  raw: string
  type: 'typeMetadata'
}
```

**TypeMetadata** ([**Parent**][nodes-parent]) represents an inline type expression (e.g. `{number}`).

A `raw` field must be present.\
Its value is the raw type expression (e.g. `number`).

**TypeMetadata** can be used in [**tag**][nodes-tag] nodes.\
Its content model is [**type expression**][content-type-expression].

## Content model

```ts
type Content =
  | CommentContent
  | InlineTagContent
  | PhrasingContent
  | RootContent
  | SummaryContent
  | TagContent
  | TypeExpression
```

Nodes are grouped by content type, if applicable.\
Each node in docast falls into one or more categories of `Content`.

### `CommentContent`

```ts
type CommentContent = Summary | SummaryContent | Tag
```

**Comment** content represents content that can occur in a [**comment**][nodes-comment].

#### `FreeformCommentContent`

```ts
type FreeformCommentContent = Exclude<CommentContent, Summary>
```

**FreeformComment** content represents content that can occur in a
[**comment**][nodes-comment] without a [**summary**][nodes-summary].

### `InlineTagContent`

```ts
type InlineTagContent = Exclude<PhrasingContent, InlineTag> | Identifier
```

**InlineTag** content represents content that can occur inside an [**inline tag**][nodes-inline-tag].

It consists of [*phrasing*][content-phrasing] content and [**identifier**][nodes-identifier] nodes, but cannot contain
nested [**inline tags**][nodes-inline-tag].

### `PhrasingContent`

```ts
type PhrasingContent = InlineTag | mdast.PhrasingContent
```

**Phrasing** content represents inline text and markup.

### `RootContent`

```ts
type RootContent = CodeSegment | Comment
```

**Root** content represents content that can occur in at the [**root**][nodes-root] of a [*tree*][unist-tree].

It consists of [**code segment**][nodes-code-segment] and [**comment**][nodes-comment] nodes.

### `SummaryContent`

```ts
type SummaryContent = PhrasingContent | mdast.RootContent
```

**Summary** content represents summary text and its markup.

### `TagContent`

```ts
type TagContent = PhrasingContent | TypeMetadata
```

**Tag** content represents [**tag**][nodes-tag] text and its markup.

#### `UntypedTagContent`

```ts
type UntypedTagContent = Exclude<TagContent, TypeMetadata>
```

**UntypedTag** content represents [**tag**][nodes-tag] content
that does not contain [**type metadata**][nodes-type-metadata].

### `TypeExpression`

```ts
type TypeExpression = TypeExpressionMap[keyof TypeExpressionMap]
```

**TypeExpression** content is a type expression.

When developing type expression parsers compatible with docast,
the `TypeExpressionMap` should be augmented (and exported! \:wink:) to register custom nodes:

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

### Comment

A region of source content used to provide additional information.

### Tag content

Text following a [**tag name**][nodes-tag-name] (e.g. `@example`, `@param`) up until the start of the next tag or
comment closer, or text following an [**inline tag**][nodes-inline-tag] name up until the closing punctuator (`}`).

## List of utilities

See the [unist list of utilities][unist-utilities] for more utilities.

- [`docast-util-from-comments`][docast-util-from-comments]
  — parse comments

## Project

### Version

docast adheres to [semver][].

### Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

Ideas for new utilities and tools can be posted in [docast/ideas][docast-ideas].

This project has a [code of conduct](CODE_OF_CONDUCT.md).\
By interacting with this repository, organization, or community you agree to abide by its terms.

### Sponsor

Small primitives power larger systems.
Support long-term stability by sponsoring Flex Development.

[check-tag-names]: https://github.com/gajus/eslint-plugin-jsdoc-check-tag-names

[content-comment]: #commentcontent

[content-inline-tag]: #inlinetagcontent

[content-model]: #content-model

[content-phrasing]: #phrasingcontent

[content-root]: #rootcontent

[content-summary]: #summarycontent

[content-tag]: #tagcontent

[content-type-expression]: #typeexpression

[docast-ideas]: https://github.com/flex-development/docast/discussions/new?category=idea

[docast-util-from-comments]: https://github.com/flex-development/docast-util-from-comments

[eslint]: https://eslint.org

[glossary-comment]: #comment-1

[glossary-tag-content]: #tag-content

[javascript]: https://www.ecma-international.org/ecma-262/9.0/index.html

[jsdoc]: https://jsdoc.app

[mdast-content]: https://github.com/syntax-tree/mdast#content-model

[mdast]: https://github.com/syntax-tree/mdast

[nodes-code-segment]: #codesegment

[nodes-comment]: #comment

[nodes-identifier]: #identifier

[nodes-inline-tag]: #inlinetag

[nodes-literal]: #literal

[nodes-namepath-connector]: #namepathconnector

[nodes-namepath]: #namepath

[nodes-node]: #node

[nodes-parent]: #parent

[nodes-root]: #root

[nodes-summary]: #summary

[nodes-tag-name]: #tagname

[nodes-tag]: #tag

[nodes-type-metadata]: #typemetadata

[semver]: https://semver.org

[structuredtags]: https://github.com/gajus/eslint-plugin-jsdoc-structuredtags

[tsdoc]: https://tsdoc.org

[typedoc]: https://github.com/TypeStrong/typedoc

[types-code-segment-name]: #codesegmentname

[types-serialized-namepath-connector]: #serializednamepathconnector

[types-serialized-tag-name]: #serializedtagname

[typescript]: https://typescriptlang.org

[unist-child]: https://github.com/syntax-tree/unist#child

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
