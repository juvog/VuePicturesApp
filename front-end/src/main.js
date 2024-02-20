import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import './main.css';
import AllPicturesPage from './pages/AllPicturesPage.vue';
import PictureDetailPage from './pages/PictureDetailPage.vue';
import SelectedPicturesPage from './pages/SelectedPicturesPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import App from './App.vue'

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
      path: '/selectedPictures',
      component: SelectedPicturesPage,
    }, {
      path: '/pictures',
      component: AllPicturesPage,
    },{
      path: '/pictures/:pictureId',
      component: PictureDetailPage,
    }, {
      path: '/',
      redirect: '/products',
    },{
      path: '/:pathMatch(.*)*',
      component: NotFoundPage,
    }]
  }))
.mount('#app')
