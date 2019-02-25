<template>
  <div id="app">
    <searchForm @add-search-term="fetchPhotos"></searchForm>
  </div>
</template>

<script>
  import searchForm from './components/searchForm.vue';
  import { keys } from '../keys.js';

  export default {
    name: 'app',
    data() {
      return {
        searchTerm: ''
      }
    },
    methods: {
      fetchPhotos(searchTerm) {
        this.searchTerm = searchTerm;
        const url = 'https://api.unsplash.com/search/photos'
        const extras = '&per_page=25&orientation=squarish';
        const authorization = `Client-ID ${keys.appKey}`
        fetch(`${url}?query=${this.searchTerm}${extras}`, {
          method: 'GET',
          headers: {
            "Authorization": authorization
          }
        })
        .then((response) => response.json())
        .then((data) => console.log(data.results))
      }
    },
    components: {
      searchForm
    }
  };
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
