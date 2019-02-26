<template>
  <section class="search-form">
    <h1>PhotoVue</h1>
    <h3>What would you like to see?</h3>
    <form @submit.prevent="handleSubmit">
      <input type="text" class="search-input" placeholder="Enter search term" v-model="searchTerm" autofocus>
      <button>Submit</button>
    </form>
  </section>
</template>

<script>
  
  export default {
    name: 'searchForm',
    data() {
      return {
        searchTerm: ''
      }
    },
    methods: {
      handleSubmit() {
        console.log(this.searchTerm)
        this.$emit('add-search-term', this.searchTerm);
        this.searchTerm = ''
      }
    }
  }
</script>

<style lang="scss">
  .search-form {
    background: whitesmoke;
    width: 50%;
    height: 200px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px darkslategray;

    @media screen and (max-width: 400px) {
      width: 75%;
    }
  }
</style>