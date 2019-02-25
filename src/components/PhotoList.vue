<template>
  <section class="photo-list">
    <article v-for="photo in photos" :key="photo.id">
      <img :src="photo.url" :alt="photo.description">
    </article>
  </section>
</template>

<script>
  export default {
    name: 'PhotoList',
    props: {
      photos: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style></style>
