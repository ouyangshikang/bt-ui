<p align="center">
    <img src="./examples/assets/logo1.png" height="150px">
</p>
<p align="center">
    <a href="https://www.npmjs.com/package/bt-ui">
        <img src="https://img.shields.io/npm/v/bt-ui.svg">
    </a>
    <a href="https://www.npmjs.com/package/bt-ui">
        <img src="https://img.shields.io/npm/dm/bt-ui.svg">
    </a>
    <a href="LICENSE">
        <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
    </a>
</p>

# bt-ui
A ui component library built with vue-cli@3
## api
[演示文档](http://frontman.cn/bt-ui)

## install
```shell
npm install bt-ui -S
```
## quickstart
在main.js中完整引入
``` js

import Vue from 'vue';
import btui from 'bt-ui';

Vue.use(btui);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
```
在.vue文件中按需引入
``` js
import {
  Select,
  Button
  // ...
} from 'bt-ui'

export default {
    components: { Select, Button},
};
```
## Browser Support
chrome、firefox、暂不支持IE。

## Changelog
查看详细的[更新日志](https://github.com/ouyangshikang/bt-ui/blob/master/examples/docs/changelog.md)

## LICENSE
MIT




