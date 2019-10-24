import { shallowMount } from '@vue/test-utils';
import Hello from '../../packages/hello';

describe('hello.vue', () => {
    it('测试msg参数渲染', () => {
        const msg = 'hello world';
        const wrapper = shallowMount(Hello, {
            propsData: {
                msg
            }
        });
        // 可以读取参数
        console.log(wrapper.props('msg'));
        expect(wrapper.props('msg')).toEqual('hello world');
        expect(wrapper.text()).toMatch(msg);

        // 写入新值再测试
        wrapper.setProps({ msg: '你好世界'});
        expect(wrapper.props('msg')).toEqual('你好世界');
    });

    it('测试dom节点个数', () => {
        const wrapper = shallowMount(Hello);
        expect(wrapper.findAll('.handsome').length).toBe(1);
    });


    // 快照测试
    it('测试组件渲染是否正常', () => {
        const wrapper = shallowMount(Hello, {
            propsData: {
                msg: '你好'
            }
        });
        expect(wrapper).toMatchSnapshot();
    });
});
