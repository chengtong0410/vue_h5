import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Find from '../components/find';
import Question from '../components/question';
import My from '../components/my';
import Edit from '../components/eidt';
import EditWarp from '../components/editWarp';
import { getLocal } from '../utils/local';
Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/find',
        name: 'Find',
        component: Find,
      },
      {
        path: '/question',
        name: 'Question',
        component: Question,
      },
      {
        path: '/my',
        name: 'My',
        component: My,
      },
    ],
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
  },
  {
    path: '/editWarp/:id',
    name: 'EditWarp',
    component: EditWarp,
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  const tokenState = getLocal('token');

  // if (to.name !== 'Login' && !tokenState) {
  //   next('/login');
  // } else {
  next();
  // }
});

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};

export default router;
