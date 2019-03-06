// styles
import './theme-default/index.scss';
import Button from './button/index';
import Scrollbar from './scrollbar/index';
import ContextMenu from './content-menu/index';

const components = [
    Button,
    Scrollbar,
    ContextMenu
];

// 定义install方法,接受Vue作为参数,use注册组件时所有组件都将被注册
const install = function(Vue) {
    if(install.installed) {
        return;
    }
    components.map(component => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    Button,
    Scrollbar,
    ContextMenu
};