export default {
  name: 'auth',
  component: () => import(/* webpackChunkName: "Auth Layout" */ '@/modules/auth/layouts/AuthLayout.vue'),
  children: [
      {
          path: '',
          name: 'login',
          component: () => import(/* webpackChunkName: "Login" */ '@/modules/auth/views/LoginView.vue')
      }
  ]
}
