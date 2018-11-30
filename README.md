# gender-weight

Find the gender weight in text by counting the number of gendered [words](./gendered-words.js). This is a good way of indicating if a piece of text is about men or women.

It returns a value between `-1` and `1` (M - F)

### Install

```js
yarn add gender-weight
```

### Usage

```js
const genderWeight = require("gender-weight");

let weight = genderWeight("She's in charge and he's not himself");

// weight -> -0.333
```
