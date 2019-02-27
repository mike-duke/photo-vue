<template>
  <div id="app">
    <SearchForm v-if="!photos.length" @addSearchTerm="fetchPhotos"></SearchForm>
    <PhotoList v-else :photos="photos" :searchTerm="searchTerm" @addSearchTerm="fetchPhotos"></PhotoList>
  </div>
</template>

<script>
import SearchForm from './components/SearchForm.vue';
import PhotoList from './components/PhotoList.vue';
import { keys } from '../keys';
import { cleanPhotos } from './cleaner';
import { mockPhotos } from './cleaner/mockData';

export default {
  name: 'app',
  data() {
    return {
      searchTerm: '',
      photos: [],
      url: 'https://api.unsplash.com/search/photos',
      authorization: `Client-ID ${keys.appKey}`,
      params: '&per_page=24&orientation=squarish',
    };
  },
  methods: {
    async fetchPhotos(searchTerm) {
      this.searchTerm = searchTerm;
      const response = await fetch(`${this.url}?query=${this.searchTerm}${this.params}`, {
        method: 'GET',
        headers: {
          Authorization: this.authorization,
        },
      });
      const data = await response.json();
      this.photos = cleanPhotos(data.results);
      // this.photos = mockPhotos
    },
  },
  components: {
    SearchForm,
    PhotoList,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-size: 16px;
}

html {
  margin: 0;
  padding: 0;
  background: black;
}

#app {
  margin: 0;
  min-height: 100vh;
  background: url('../public/pexels-photo-296649.jpeg');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
}
</style>


/* Photo by Vladyslav Dukhin from Pexels */
