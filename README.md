# [Bootstrap 4 Alpha 5 ](http://getbootstrap.com)
Bootstrap 4 with backward compatibility for older versions of Sass like Shopify.

## Tested with

* Shopify
* OctoberCMS

## Changes

* All features of Sass that can't be build with Shopify are replaced with buildable variants
* Use of [sass-autoprefixer](https://github.com/JumpLinkNetwork/sass-autoprefixer) to get browser vendor prefixes directly in Sass without the need of recompile the css file
* Added variables.json, very useful to generate theme settings for the bootstrap variables
* Changed comment style of scss/_variables.scss to follow the annotations of Sassdoc, that makes it possible to generate the variables.json

## Usage

Several quick start options are available:
- Clone the repo: `git clone https://github.com/JumpLinkNetwork/bootstrap-backward.git`
- Install with [npm](https://www.npmjs.com): `npm install bootstrap-backward`
- Install with [Bower](http://bower.io): `bower install bootstrap-backward`

create a .scss file like theme.scss and add import sass-autoprefixer and bootstrap-backward:

```scss
    @import "../../bower_components/sass-autoprefixer/scss/prefixes";
    @import "../../bower_components/bootstrap-backward/scss/bootstrap";
```

## Used in

* [JumpLink Shopify Boilerplate](https://github.com/JumpLinkNetwork/jumplink-shopify-boilerplate)
* [JumpLink October Boilerplate](https://github.com/JumpLinkNetwork/jumplink-october-boilerplate)

## Contributing

* Run `npm run variables` to generate variables.json
* Run `scss scss/bootstrap-backward.scss:dist/css/bootstrap-backward.css` and compare the resulting ./dist/css/bootstrap-backward.css with ./dist/css/bootstrap.css to make sure the result is right.

See the difference between

* [v4-0-0-alpha-4 - v4-0-0-alpha-4-scss-backward](https://github.com/JumpLinkNetwork/bootstrap-backward/compare/v4-0-0-alpha-4...JumpLinkNetwork:v4-0-0-alpha-4-scss-backward)
* [v4-0-0-alpha-4 - v4-0-0-alpha-5](https://github.com/JumpLinkNetwork/bootstrap-backward/compare/v4-0-0-alpha-4...JumpLinkNetwork:v4-0-0-alpha-5)
* [v4-0-0-alpha-5 - v4-0-0-alpha-5-scss-backward](https://github.com/JumpLinkNetwork/bootstrap-backward/compare/v4-0-0-alpha-5...JumpLinkNetwork:v4-0-0-alpha-5-scss-backward)

## More

For more information see [original github repo of Bootstrap 4](https://github.com/twbs/bootstrap)

## Creators of this fork

**JumpLink**

- <https://github.com/JumpLinkNetwork>
- <https://www.jumplink.eu/>

## Copyright and license

Code and documentation copyright 2011-2017 the [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors) and [Twitter, Inc.](https://twitter.com) Code released under the [MIT License](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).
