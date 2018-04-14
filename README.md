<p align="center">
    <a href="https://www.lkcatui.com">
        <img width="200" src="https://file.lkcatui.com/logo.svg">
    </a>
</p>

# lkCat
[![](https://img.shields.io/travis/lkcat/lkcat.svg?style=flat-square)](https://travis-ci.org/lkcat/lkcat)
[![lkCat](https://img.shields.io/npm/v/lkcat.svg?style=flat-square)](https://www.npmjs.org/package/lkcat)
[![NPM downloads](http://img.shields.io/npm/dm/lkcat.svg?style=flat-square)](https://npmjs.org/package/lkcat)
[![NPM downloads](https://img.shields.io/npm/dt/lkcat.svg?style=flat-square)](https://npmjs.org/package/lkcat)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/lkcat/dist/lkcat.min.js?compression=gzip&label=gzip%20size:%20JS&style=flat-square)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/lkcat/dist/styles/lkcat.css?compression=gzip&label=gzip%20size:%20CSS&style=flat-square)
[![Join the chat at https://gitter.im/lkcat/lkcat](https://img.shields.io/badge/chat-on_gitter-30b392.svg?style=flat-square)](https://gitter.im/lkcat/lkcat?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### A high quality UI Toolkit built on Vue.js.

> This branch is for Vue.js 2.x.
>
> The branch for Vue.js 1.x can be found [here](https://github.com/lkcat/lkcat/tree/master).

## Docs

### [English (2.0)](https://www.lkcatui.com)
### [中文文档 (2.0)](https://www.lkcatui.com)
[中文文档 (1.0)](http://v1.lkcatui.com)

## Overview

### [Component Overview](https://www.lkcatui.com/overview)

## Features

- Dozens of useful and beautiful components.
- Friendly API. It's made for people with any skill level.
- Extensive documentation and demos.
- It is quite beautiful.
- Supports both Vue.js 2 and Vue.js 1.

## Who's using lkCat

- [TalkingData](http://www.talkingdata.com/)
- [Alibaba](http://www.alibaba.com/)
- [JD](http://www.jd.com/)
- [DiDi](http://www.didichuxing.com/)
- [Sina](http://www.sina.com.cn/)
- [Lenovo](https://www.lenovo.com.cn/)

> If your company or products use lkCat, welcome to click [here](https://github.com/lkcat/lkcat/issues/2143) to leave a message.

## Install

> Please install Webpack first!

We recommend you create your project through [lkCat Cli](https://github.com/lkcat/lkcat-cli) or [lkcat-project](https://github.com/lkcat/lkcat-project). You can also use [vue-cli](https://github.com/vuejs/vue-cli).

### Install lkCat

Using npm:
```
npm install lkcat --save
```

Using a script tag for global use:

```html
<script type="text/javascript" src="lkcat.min.js"></script>
<link rel="stylesheet" href="dist/styles/lkcat.css">
```

You can find more info [on the website](https://www.lkcatui.com/docs/guide/install-en).

## Usage

```vue
<template>
    <Slider v-model="value" range />
</template>
<script>
    export default {
        data () {
            return {
                value: [20, 50]
            }
        }
    }
</script>
```

Using css via `import`:

```js
import 'lkcat/dist/styles/lkcat.css';
```

## Compatibility

- Supports Vue.js 2.x
- Supports Vue.js 1.x - [visit 1.0 docs](http://v1.lkcatui.com/)
- Supports SSR
- Supports [Nuxt.js](https://nuxtjs.org/)
- Supports [Electron](http://electron.atom.io/)
- lkCat does not support IE8 or below since [Vue.js](https://vuejs.org/v2/guide/reactivity.html) uses `Object.defineProperty` to track changes which is not supported by these browsers.

## Community

If you want to contribute or have questions or bugs to report:

**Questions:** Find other users at the [Gitter chat](https://gitter.im/lkcat/lkcat) or post on [StackOverflow using `[lkcat-ui]` tag](https://stackoverflow.com/questions/tagged/lkcat-ui)  
**Bugs:** [File a issue here](https://github.com/lkcat/lkcat/issues) - please provide a example so we can help you better  
**Contribute:** Contact us in [Gitter chat](https://gitter.im/lkcat/lkcat), WeChat or via mail to `admin@aresn.com`. PRs welcome!

## Major Contributors
|Name|Avatar|Name|Avatar|Name|Avatar|
|---|---|---|---|---|---|
|[Aresn](https://github.com/icarusion) |  ![](https://avatars3.githubusercontent.com/u/5370542?v=3&s=60)  |[jingsam](https://github.com/jingsam) |  ![](https://avatars3.githubusercontent.com/u/1522494?v=3&s=60)  | [rijn](https://github.com/rijn)       |  ![](https://avatars2.githubusercontent.com/u/6976367?v=3&s=60)  |
|[lcx960324](https://github.com/lcx960324)           |  ![](https://avatars3.githubusercontent.com/u/9768245?v=3&s=60)  |[GITleonine1989](https://github.com/GITleonine1989) |  ![](https://avatars1.githubusercontent.com/u/7582490?v=3&s=60)  |[huixisheng](https://github.com/huixisheng)         |  ![](https://avatars1.githubusercontent.com/u/1518967?v=3&s=60)  |
|[Sergio Crisostomo](https://github.com/SergioCrisostomo)           |  ![](https://avatars3.githubusercontent.com/u/5614559?v=3&s=60)  |  [lison16](https://github.com/lison16)           |  ![](https://avatars3.githubusercontent.com/u/20942571?v=3&s=60) |  [Xotic750](https://github.com/Xotic750)    | ![](https://avatars3.githubusercontent.com/u/216041?v=3&s=60)


## Links

- [TalkingData](https://github.com/TalkingData)
- [Vue](https://github.com/vuejs/vue)
- [Webpack](https://github.com/webpack/webpack)
- [Ionicons](https://github.com/driftyco/ionicons)
- [Ant Design](https://github.com/ant-design/ant-design)

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, lkCat
