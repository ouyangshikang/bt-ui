import { shallowMount } from '@vue/test-utils';
import Hello from '../../packages/hello';

describe('Hello.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'hello world';
        const wrapper = shallowMount(Hello, {
            propsData: {
                msg
            }
        });
        expect(wrapper.text()).toMatch(msg);
    });
});
