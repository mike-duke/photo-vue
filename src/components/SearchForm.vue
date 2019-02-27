<template>
  <section class="search-form">
    <h1 class="app-name">PhotoVue</h1>
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
    height: 50%;
    border-radius: 10px;
    box-shadow: 5px 5px 5px darkslategray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;

    .app-name {
      color: darkslategray;
      margin: 20px 0;
      font-size: 3.5rem;
      text-shadow: 3px 2px 7px gray;
    }

    h3 {
      font-size: 1.4rem;
    }

    input {
      margin: 10px;
    }

    button {
      display: block;
      margin: 0 auto;
      background: darkslategray;
      color: whitesmoke;
    }

    @media screen and (max-width: 400px) {
      width: 75%;
    }
  }
</style>