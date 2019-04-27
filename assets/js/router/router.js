import Vue from 'vue';
import Router from 'vue-router';
import IndexStandups from '../components/standups/Index.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'inicio.index',
      component: IndexStandups,
    },
  ]
});

export default router;