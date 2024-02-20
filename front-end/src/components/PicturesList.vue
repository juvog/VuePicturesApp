<template>
    <div class="grid-wrap">
        <div
          class="picture-item"
          v-for="picture in pictures"
          :key="picture.id"
        >
          <img :src="picture.image" />
          <h3 class="picture-name">{{ picture.name }}</h3>
          <router-link :to="'/pictures/' + picture.id">
            <button>View details</button>
          </router-link>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      name: "PicturesList",
      props: ['pictures'],
    }
    </script>