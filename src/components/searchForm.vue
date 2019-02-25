<template>
  <section class="search-form">
    <h1>PhotoVue</h1>
    <h3>What would you like to see?</h3>
    <form @submit.prevent="handleSubmit">
      <input type="text" class="search-input" placeholder="Enter search term" v-model="searchTerm" focus>
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

<style>

</style>