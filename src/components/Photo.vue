
<template>
  <article class="photo" :style="{ backgroundImage: `URL(${photo.url})` }">
    <div class="photo-info">
      <p>{{ photo.description }}</p>
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

  }
</style>