import PhotoList from '../PhotoList.vue';
import { shallowMount } from '@vue/test-utils';

describe('PhotoList', () => {
  it('should match snapshot', () => {
    const wrapper = shallowMount(PhotoList);

    expect(wrapper).toMatchSnapshot();
  });
});