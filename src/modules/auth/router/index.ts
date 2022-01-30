export default {
  name: 'auth',
  component: () => import(/* webpackChunkName: "Auth Layout" */ '@/modules/auth/layouts/AuthLayout.vue'),
  children: [
    {
      path: '',
      redirect: '/auth/login'
    },
    {
      path: 'login',
      name: 'login',
      component: () => import(/* webpackChunkName: "LoginView" */ '@/modules/auth/views/LoginView.vue')
    },
    {
      path: 'register',
      name: 'register',
      component: () => import(/* webpackChunkName: "RegisterView" */ '@/modules/auth/views/RegisterView.vue')
    }
  ]
}
