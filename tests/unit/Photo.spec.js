import Photo from '@/components/Photo.vue';
import { mount } from '@vue/test-utils';

describe('Photo', () => {
  it('should match the snapshot', () => {
    const wrapper = mount(Photo, {
      propsData: {
        photo: {
          url: 'someplace.com',
          description: 'a picture of stuff',
          photo_tags: [],
          user: {
            name: 'Joe Photo',
            profile_image: 'my ugly mug',
            instagram_username: 'joephoto',
            location: 'Anywhere, USA'
          }
        }
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});