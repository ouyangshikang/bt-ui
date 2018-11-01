import button from './button';

button.install = function(Vue) {
    Vue.component(button.name, button);
};

export default button;