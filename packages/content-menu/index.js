import BtContextMenu from './context-menu';

BtContextMenu.install = function(Vue) {
    Vue.component(BtContextMenu.name, BtContextMenu);
};

export default BtContextMenu;