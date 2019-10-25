/**
 * copy from https://github.com/youzan/vant/blob/dev/packages/mixins/bem.js
 * bem helper
 * bem() // 'button'
 * bem('text') // 'button__text'
 * bem({ disabled }) // 'button button--disabled'
 * bem('text', { disabled }) // 'button__text button__text--disabled'
 * bem(['disabled', 'primary']) // 'button button--disabled button--primary'
 */

const ELEMENT = '__';
const MODS = '--';

const PREFIX = 'bt-';

const join = (name, el, symbol) => (el ? name + symbol + el : name);

const prefix = (name, mods) => {
    if (typeof mods === 'string') {
        return join(name, mods, MODS);
    }

    if (Array.isArray(mods)) {
        return mods.filter(m => m).map(item => prefix(name, item));
    }

    const ret = {};
    Object.keys(mods).forEach((key) => {
        if (key) {ret[name + MODS + key] = mods[key];}
    });
    return ret;
};

/**
 * @mixin
 */
export default {
    methods: {
        bem(el, mods) {
            const {
                name
            } = this.$options;

            if (el && typeof el !== 'string') {
                mods = el;
                el = '';
            }
            el = join(PREFIX + name, el, ELEMENT);

            return mods ? [el, prefix(el, mods)] : el;
        }
    }
};
