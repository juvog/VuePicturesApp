<template>
    <div class="nav-bar">
      <router-link to="/pictures" class="pictures-link">
        <div class="logo-wrap">
          <img :src="logo" />
        </div>
      </router-link>
      <router-link to="/selectedPictures" class="cart-link">
        <button>Selection</button>
      </router-link>
    </div>
  </template>
  
  <script>
  import logo from '@/assets/logo-hexagon.svg';
  
  export default {
    name: "NavBar",
    data() {
      return {
        logo,
      }
    }
  }
  </script>