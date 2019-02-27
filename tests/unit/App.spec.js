import App from '@/App.vue';
import { mount } from '@vue/test-utils';
import { cleanPhotos } from '@/cleaner/';

jest.mock('@/cleaner/')

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(App);
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        data: {
          results: []
        }
      })
    }));
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('fetchPhotos', () => {
    it.skip('should call fetch with the correct args when the addSearchTerm event fires', async () => {
      wrapper.vm.$emit('addSearchTerm', 'unicorns');
      expect(window.fetch).toHaveBeenCalledWith('unicorns');
    });

    it.skip('should call cleanPhotos with the correct args', async () => {
      await wrapper.vm.$emit('addSearchTerm', 'rainbows');
      expect(cleanPhotos).toHaveBeenCalledWith([]);
    });

    it('should set the value of photos to the result of cleanPhotos', () => {
      
    })
  });
});