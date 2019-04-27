import Vue from 'vue';
import Router from 'vue-router';
import IndexStandups from '../components/standups/Index.vue';
import CreateStandups from '../components/standups/Create.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'standups.index',
      component: IndexStandups,
    },
    {
      path: '/standups/create',
      name: 'standups.create',
      component: CreateStandups,
    },
  ]
});

export default router;