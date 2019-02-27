import PhotoList from '@/components/PhotoList';
import { mount } from '@vue/test-utils';

describe('PhotoList', () => {
  it('should match snapshot', () => {
    const wrapper = mount(PhotoList, {
      propsData: {
        photos: [],
        searchTerm: ''
      }
    });

    expect(wrapper).toMatchSnapshot();
  });
});