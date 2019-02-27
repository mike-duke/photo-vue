
<template>
  <article class="photo">
    <img :src="photo.url" :alt="photo.description">
    <div class="photo-info">
      <p></p>
      <ul>
        <li v-for="(tag, index) in photo.tags" :key="index">{{ tag }}</li>
      </ul>
    </div>
  </article>
</template>
<script>

  export default {
    name: 'Photo',
    props: {
      photo: {
        type: Object,
        required: true
      }
    }
  }
</script>
<style>
  .photo {
    height: 400px;
    width: 300px;
    background-size: cover;
    margin: 20px;
  }
</style>