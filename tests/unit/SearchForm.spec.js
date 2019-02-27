import SearchForm from '@/components/SearchForm.vue';
import { mount } from '@vue/test-utils';

describe('SearchForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(SearchForm);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleSubmit', () => {
    it('should emit add-search-term with the correct args', () => {
      wrapper.setData({searchTerm: 'kitties'})
      wrapper.find('form').trigger('submit');
      expect(wrapper.emitted().addSearchTerm).toEqual([['kitties']])
    });

    it('should set searchTerm to an empty string', () => {
      expect(wrapper.vm.searchTerm).toEqual('');
      wrapper.setData({searchTerm: 'puppies'});
      expect(wrapper.vm.searchTerm).toEqual('puppies');
      wrapper.find('form').trigger('submit');
      expect(wrapper.vm.searchTerm).toEqual('')
    });
  });
});