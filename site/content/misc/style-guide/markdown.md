+++
title = "Markdown"
weight = 1
+++

# Markdown

This site is built using Zola as a static site generator, and thus this site uses the CommonMark[^1] flavor of Markdown, with some extensions implemented by the `pulldown_cmark`[^2] Rust library.

## Preferred syntax

### Spaces over tabs

A linter from the text editor of choice may force the choice in this regard, but
two spaces are preferred over tabs for indendation.

### `-` for Unordered List Markers

The hyphen-minus `-` character (minus character on the typical US keyboard layout) is preferred over other variants when defining list items.

Use:
```md
 - Item 1
 - Item 2
 - Item 3
```

Not: 
```md
 + Item 1
 + Item 2
 + Item 3

 * Item 1
 * Item 2
 * Item 3
```

### `int.` instead of `int)` for order lists

Use:
```md
1. Item 1
2. Item 2
```

To result in:
1. Item 1
2. Item 2

Not:
```md
1) Item 1
2) Item 2
```

### Use ATX headings, never Setext headings

ATX Headings are of the form

```md
# Header 1
## Header 2
### Header 3
```

These are the preferred way of defining headings. It makes it easier to make 
a hierarchy of headings, and also would use fewer characters to type.

Do not use Setext Headings:
```md
Header 1
========
Header 2
--------
```

### Use `*` for emphasis and strong emphasis

CommonMark allows for both asterisks `*` and underscores `_` for emphasis and strong emphasis. It is preferred to use `*` unless the text makes it more complicated to do so.

Use:
```md
 *emphasis* and **strong**
```

To result in:

 *emphasis* and **strong**

But not:
```md
 _emphasis_ and __strong__
```

### Use a single backtick \` for code spans
The CommonMark spec allows for arbitrary number of backticks (except three, which are used for code blocks), as long as the same number of backticks are used in the closing set as in the opening set. 

For consistency, we would like to use one backtick \` for consistency.

### Use pairs of three backticks \``` for code blocks

Code blocks may be defined by using indents, or fenced by either three backticks \``` or three tildas \~~~. Three backticks \``` are preferred.

Use:

<pre>
```
code
```
</pre>

To result in:
```
code
```

Not:
```md
  
  code

```

Nor:
```md
~~~
code
~~~
```
### Use three underscores \___ for thematic breaks

Thematic breaks are usually represented by a horizontal line (html `<hr />`).

Use three underscores \___ to define a thematic break:

```md
section 1
___
section 2
```

To result in:

> section 1
> ___
> section 2

Not:

```md
section 1
---
section 2
```

This is to ensure that we don't accidentally make a heading, because using three hyphen-minuses \--- may trigger a second-level Setext heading, as can be seen below:

> section 1
> ---
> section 2

Thematic breaks should not be used on wiki articles, with the exception of separating the footnotes section. Headings and paragraphs are preferred when managing thematic shifts within a wiki article. In-world articles may use thematic breaks when necessary. 

## Non-CommonMark Extensions

Certain markdown extensions that are implemented by `pulldown_cmark` but are not defined in the reference CommonMark spec.

Below is a non-exhaustive list of available extensions, but those that would most likely see use on this site:

### Tables

Tables in Zola are compatible with the Github implementation.

The following markdown:
```
| Header 1 | Left-aligned | Center-aligned | Right-aligned |
| -------- | :----------- | :------------: | ------------: |
| Cell 1   | Cell 2       |   Cell 3 \|    |        Cell 4 |
```

Results in:

| Header 1 | Left-aligned | Center-aligned | Right-aligned |
| -------- | :----------- | :------------: | ------------: |
| Cell 1   | Cell 2       |   Cell 3 \|    |        Cell 4 |

Tables may bne used in the contents for any information that can be easily represented on a two-dimensional tabular format. Any alignment may be acceptable, as long as they make sense, and are aesthetically pleasing.

HTML-style tables are also supported, and may be sparingly used for more complicated layouts.

The following code:
```html
<table>
  <tr><th>Header 1</th><th>Header 2</th></tr>
  <tr><td>Cell 1</td><td>Cell 2</td></tr>
</table>
```

Results in:
<table>
  <tr><th>Header 1</th><th>Header 2</th></tr>
  <tr><td>Cell 1</td><td>Cell 2</td></tr>
</table>

### Footnotes

Footnotes in Zola are also in the newer version of the Github-compatible format:

```
[^1]: In new syntax, this is two footnote definitions.
[^2]: In old syntax, this is a single footnote definition with two lines.

[^3]:

    In new syntax, this is a footnote with two paragraphs.

    In old syntax, this is a footnote followed by a code block.

In new syntax, this undefined footnote definition renders as
literal text [^4]. In old syntax, it creates a dangling link.
```

Footnotes are preferred when a reference is made to content outside the site, such as the many references on this document. 

Footnotes may also be used for references or quotations from content written as if it were created by an in-world source, such as the article [*On the Fall of the Western Kalassarian Empire*](@/world-novelties/on-the-fall-of-the-western-kalassarian-empire.md). It is, however, preferred to use an *inline link* (`[title](url)`) when referring to the article as a whole, instead of a specific piece of information within it.

### Strikethrough

Strikethroughs are made by wrapping text with a pair of two tildas(~) `~~like this~~`, which will result in ~~like this~~.

Strikethroughs must be used sparingly in wiki articles, but may be used where it makes sense in in-world articles or letters where the in-world author might have used a strikethrough either stylistically, or to remove a word.

___
[^1]: "CommonMark Spec", spec.commonmark.org, <https://spec.commonmark.org/current/>

[^2]: "Rust documentation for `pulldown_cmark` Options struct", <https://docs.rs/pulldown-cmark/latest/pulldown_cmark/struct.Options.html>