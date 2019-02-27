
<template>
  <article class="photo">
    <div class="user-name">
      <img :src="photo.user.profile_image" :alt="photo.user.name" class="user-image">
      <p>Photo by {{ photo.user.name }}</p>
    </div>
    <div class="image-container" :style="{backround: photo.color}">
      <img :src="photo.url" :alt="photo.description" class="photo-img">
    </div>
    <div class="photo-info">
      <p><span class="heading">Instagram:</span> {{ photo.user.instagram_username }}</p>
      <p><span class="heading">Location:</span> {{ photo.user.location }}</p>
      <p><span class="heading">Tags:</span>
        <ul>
          <li v-for="(tag, index) in photo.photo_tags" :key="index">
            <a class="tags" href="" @click="handleClick(tag.title)">#{{ tag.title }}</a>
          </li>
        </ul>
      </p>
    </div>
  </article>
</template>
<script>
export default {
  name: 'Photo',
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit('addSearchTerm')
    }
  }
};
</script>
<style lang="scss">
  .photo {
    height: 475px;
    width: 85%;
    background: whitesmoke;
    margin: 20px;
    box-shadow: 5px 5px 5px darkslategray;
    border-radius: 5px;
    font-size: 1rem;

    .photo-img {
      width: 100%;
      height: auto;
    }

    ul {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      font-size: 0.8rem
    }

    p {
      margin: 10px 0;
    }

     @media screen and (min-width: 400px) {
      width: 300px;
    }
  }

  .photo-info {
    padding: 10px;
    text-align: initial;
  }

  .image-container {
    height: 300px;
    overflow: hidden;
  }

  .user-name {
    height: 40px;
    display: flex;
    align-items: center;
    margin: 0 10px;
  }

  .user-image {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .heading {
    font-weight: bold;
    font-family: 'Open Sans'
  }
</style>
