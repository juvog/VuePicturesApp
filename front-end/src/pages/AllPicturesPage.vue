<template>
    <h1>Pictures</h1>
    <PicturesList :pictures="allPictures"/>
  </template>
  
  <script>
  
  import {allPictures} from '../tempdata';
  import PicturesList from '../components/PicturesList.vue';
  
  export default {
    name: "AllPicturesPage",
    components: {
      PicturesList,
    },
    data() {
      return {
        allPictures,
      }
    }
  }
  </script>