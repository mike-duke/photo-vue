
<template>
  <article class="photo">
    <div class="user-name">
      <img :src="photo.user.profile_image" :alt="photo.user.name" class="user-image">
      <p>Photo by {{ photo.user.name }}</p>
    </div>
    <div class="image">
      <img :src="photo.url" :alt="photo.description" class="photo-img">
    </div>
    <div class="photo-info">
      <p>instagram: {{ photo.user.instagram_username }}</p>
      <p>location: {{ photo.user.location }}</p>
      <p>Tags: 
        <ul>
          <li v-for="(tag, index) in photo.photo_tags" :key="index">#{{ tag.title }}</li>
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
        required: true
      }
    }
  }
</script>
<style lang="scss">
  .photo {
    height: 500px;
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
  }

  .image {
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
</style>