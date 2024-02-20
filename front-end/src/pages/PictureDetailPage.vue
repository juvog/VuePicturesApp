<template>
    <div v-if="picture">
      <div class="img-wrap">
        <img :src="picture.image" />
      </div>
      <div class="picture-details">
        <h1>{{ picture.name }}</h1>
        <button class="add-to-selection">Add to my selection</button>
      </div>
    </div>
    <div v-else>
      <NotFoundPage />
    </div>
  </template>
  
  <script>
  import { allPictures } from '../tempdata';
  import NotFoundPage  from './NotFoundPage.vue';
  
  export default {
    name: "PictureDetailPage",
    components:{
      NotFoundPage,
    },
    data() {
      return {
        picture: allPictures.find(p => p.id === this.$route.params.pictureId),
      }
    }
  }
  </script>
  