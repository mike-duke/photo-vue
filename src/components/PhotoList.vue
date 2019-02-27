<template>
  <section class="photo-list">
    <h2>You searched for 
      <p>{{ searchTerm }}</p>
    </h2>
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
      },
      searchTerm: {
        type: String,
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
    width: 100vw;
    background-attachment: fixed;
    background: gray;
  }
</style>
