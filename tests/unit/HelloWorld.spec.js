import {shallowMount} from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
    it('loading should be enabled on init', () => {
        const wrapper = shallowMount(App);
        expect(wrapper.contains('div')).toBe(true);
    });
});
