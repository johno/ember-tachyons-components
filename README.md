# ember-[tachyons](http://tachyons.io)-components

100% mobile-first, responsive UI library for building ambitious Ember applications.

## Installation

```sh
ember install ember-tachyons-components
```

## Usage

##### Flag Object

```hbs
{{#t-flag-object collapse="m"}}
  {{#t-flag-object-inner maxWidth="5"}}
    <img src="/img/super-wide.jpg" alt="A bright blue sky" />
  {{/t-flag-object-inner}}
  {{#t-flag-object-inner}}
    <p class="lh-copy">
      For desktop, this text is vertically aligned middle, no matter what the height of the image is.
      On mobile, this is a paragraph below an image.
    </p>
  {{/t-flag-object-inner}}
{{/t-flag-object}}
```

###### Properties

property | values | default | behavior
-------- | ------ | ------- | -------
`collapse` | `s`,`m`,`none` | `none` | Specify which viewport the flag object collapses.
`maxWidth` | `1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`none` | `none` | Specify the max width of the object.
