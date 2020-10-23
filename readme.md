# @petegi/media

Use CSS Media Queries in your JS using promise-like syntax. Call functions dependant on the screen resolution, color scheme and more!

**Note** These are not true promises, it's just a sweet `then/catch` syntax.

## Installation

Install the package from the registry

```
// npm
npm install @petegi/media

// yarn
yarn add @petegi/media
```

## Usage

### Module bundler

```
import media from '@petegi/media';

media(// your query)
  .then(() => // if true...)
  .catch(() => // else...);
```

### Script tag

```
<script src="path/to/@petegi/media/lib/index.umd.js"></script>

<script>
  media(// your query)
    .then(() => // if true...)
    .catch(() => // else...);
</script>
```

### ES Module

```
<script type="module">
  import media, { tablet } from "path/to/@petegi/media/lib/index.js";

  // using custom query
  media(// your query)
    .then(() => // if true...)
    .catch(() => // else...);

  // using built-in mixin
  media(tablet)
    .then(() => // if true...)
    .catch(() => // else...);
</script>
```

## Available params

All the available params are listen on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Syntax).

**Note** `deprecated` params are not available.

**Note** If you're using TypeScript you'll get full autocompletion and documentation for available values', browser support and Media Query Level one was introduced. If you're using ES module syntax - this will work only for named imports (so just `import { buildQuery }` and you're good to go).

## Syntax

For most params it's straightforward - you choose a param, type the value. But because it's plain JS, some workarounds had to be made:

- all **media types** are `boolean`
  ```
  media({
    print: true,
  })
  ```
- `not` param is `boolean` and can be used only once
  ```
  media({
    "min-width": "768px",
    not: true,
    "prefers-color-scheme": "dark"
  }); // (min-width: 768px) and not (prefers-color-scheme: dark)
  ```
- `width`, `height` and `resolution` params (and their `min-` and `max-` equivalents) can get different style params
  ```
  // each of these will give you the same result
  media({
    "min-width": "1024px"
  });
  media({
    "min-width": [1024, "px"]
  });
  media({
    "min-width": {
      value: 1024,
      unit: "px"
    }
  });
  ```
- `width`, `height` and `resolution` params can have ranged value (for the syntax look to the previous point)
  ```
  media({
    width: {
      min: "768px",
      max: [1024, "px"]
    }
  })
  ```

## Built-ins

Package offers some buils-ins for module bundler users

- media query builder
- Can be used to create your own JS media query mixins

```
import { buildQuery } from "@petegi/media";

const minWidth = buildQuery({
  "min-width": {
    value: 960,
    unit: "px"
  },
  screen: true
});

console.log(minWidth); // "(min-width: 960px) and screen"
```

- mixins

  Ready to use JS media queries - these are just exported variables that are using `buildQuery` function.

  - touch
  - mouse
  - mobile
  - tablet
  - desktop
  - oldDesktop
  - widescreen

```
import media, { tablet } from "@petegi/media";

media(tablet)
  .then(() => // if true...)
  .catch(() => // else...);
```

## Disclaimer

If you're using this package to modify your styles, remember - this is JS, not CSS, so you should **always** use `catch` to remove the styles applied in the `then`.
