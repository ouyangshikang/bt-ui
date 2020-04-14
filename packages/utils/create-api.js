import Vue from 'vue';

/**
 * 支持组件命令式调用
 * @export creatApi
 * @param {*} component
 */

export function creatApi(component) {
    let instance = null;

    component.open = (param = {}) => {
        const VueConstructor = Vue.extend(component);

        if(!instance) {
            let vm = new VueConstructor({
                // 通过propsData 传参
                propsData: {
                    ...param
                }
            });
            instance = vm.$mount();
        }

        if(instance.visible) {
            return;
        }

        document.body.appendChild(instance.$el);

        Vue.nextTick(() => {
            instance.visible = true;
        });
    };

    component.close = () => {
        if(instance) {
            instance.visible = false;
        }
    };

    return component;
}
