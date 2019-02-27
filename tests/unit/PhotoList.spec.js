import PhotoList from '@/components/PhotoList';
import { shallowMount } from '@vue/test-utils';

describe('PhotoList', () => {
  it('should match snapshot', () => {
    const wrapper = shallowMount(PhotoList, {
      propsData: {
        photos: [],
        searchTerm: ''
      }
    });

    expect(wrapper).toMatchSnapshot();
  });
});