<template>
  <div id="app">
    <SearchForm v-if="!photos.length" @add-search-term="fetchPhotos"></SearchForm>
    <PhotoList v-else :photos="photos"></PhotoList>
  </div>
</template>

<script>
  import SearchForm from './components/SearchForm.vue';
  import PhotoList from './components/PhotoList.vue';
  import { keys } from '../keys.js';
  import { cleanPhotos } from './cleaner';
  import { mockPhotos } from './cleaner/mockData.js';

  export default {
    name: 'app',
    data() {
      return {
        searchTerm: '',
        photos: []
      }
    },
    methods: {
      async fetchPhotos(searchTerm) {
        // this.searchTerm = searchTerm;
        // const url = 'https://api.unsplash.com/search/photos'
        // const extras = '&per_page=25&orientation=squarish';
        // const authorization = `Client-ID ${keys.appKey}`;
        // const response = await fetch(`${url}?query=${this.searchTerm}${extras}`, {
        //   method: 'GET',
        //   headers: {
        //     "Authorization": authorization
        //   }
        // });
        // const data = await response.json();
        // this.photos = cleanPhotos(data.results)
        this.photos = mockPhotos
      }
    },
    components: {
      SearchForm,
      PhotoList
    }
  };
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
