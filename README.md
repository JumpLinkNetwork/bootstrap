# [Bootstrap 4 Alpha 4 ](http://getbootstrap.com)
Bootstrap 4 with backward compatibility for older versions of Sass like Shopify.

## Tested with

* Shopify
* OctoberCMS

## Changes

* All features of Sass that can't be build with Shopify are replaced with buildable variants
* Use of [sass-autoprefixer](https://github.com/JumpLinkNetwork/sass-autoprefixer) to get browser vendor prefixes directly in Sass without the need of recompile the css file

## Usage

Several quick start options are available:

- Clone the repo: `git clone https://github.com/JumpLinkNetwork/bootstrap-backward.git`
- Install with [npm](https://www.npmjs.com): `npm install bootstrap-backward@v4-0-0-alpha-4-scss-backward`
- Install with [Bower](http://bower.io): `bower install bootstrap-backward#v4-0-0-alpha-4-scss-backward`

create a .scss file like theme.scss and add import sass-autoprefixer and bootstrap-backward:
```scss
@import "../../bower_components/sass-autoprefixer/scss/prefixes";
@import "../../bower_components/bootstrap-backward/scss/bootstrap";
```

## Used in
* [JumpLink Shopify Boilerplate](https://github.com/JumpLinkNetwork/jumplink-shopify-boilerplate)
* [JumpLink October Boilerplate](https://github.com/JumpLinkNetwork/jumplink-october-boilerplate)


## More

For more information see [original github repo of Bootstrap 4](https://github.com/twbs/bootstrap)

## Creators of this fork

**JumpLink**

- <https://github.com/JumpLinkNetwork>
- <https://www.jumplink.eu/>

## Bootstrap Creators

**Mark Otto**

- <https://twitter.com/mdo>
- <https://github.com/mdo>

**Jacob Thornton**

- <https://twitter.com/fat>
- <https://github.com/fat>

## Copyright and license

Code and documentation copyright 2011-2016 the Bootstrap Authors and Twitter, Inc. Code released under [the MIT license](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).
