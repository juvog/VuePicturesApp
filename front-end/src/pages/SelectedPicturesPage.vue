<template>
    <h1>Selected pictures</h1>
    <SelectedPicturesList :selectedPictures="selectedPictures" />
  </template>
  
  <script>
  import SelectedPicturesList from '@/components/SelectedPicturesList.vue';
  import { selectedPictures } from '../tempdata';
  
  
  export default {
    name: "SelectedPicturesPage",
    components: {
      SelectedPicturesList
    },
    data() {
      return {
        selectedPictures,
      }
    }
  }
  </script>