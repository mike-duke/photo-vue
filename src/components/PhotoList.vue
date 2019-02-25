<template>
  <section class="photo-list">
    <Photo v-for="photo in photos" :photo="photo" :key="photo.id"></Photo>
  </section>
</template>

<script>
  import Photo from './Photo.vue';

  export default {
    name: 'PhotoList',
    props: {
      photos: {
        type: Array,
        required: true
      }
    },
    components: {
      Photo
    }
  }
</script>

<style>
  .photo-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
