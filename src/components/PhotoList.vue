<template>
  <section class="photo-list">
    <h2>Viewing
      <span class="search-term">{{ searchTerm }}</span>
    </h2>
    <div id="photos">
      <Photo v-for="photo in photos" :photo="photo" :key="photo.id"></Photo>
    </div>
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

<style lang="scss">
  .photo-list {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100vw;
    background-attachment: fixed;
    background: rgba(0, 0, 0, 0.5);
    padding: 20px 0;
    font-size: 1.4rem;
    
    h2 {
      color: whitesmoke;
    }
  }

  #photos {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 400px) {
      flex-wrap: wrap;
      flex-direction: initial;
    } 
  }

  .search-term {
    color: lightgreen;
  }
</style>
