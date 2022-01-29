export default {
  name: 'home',
  component: () => import(/* webpackChunkName: "Tabs Page" */ '@/modules/home/views/TabsPage.vue'),
  children: [
    {
      path: '',
      redirect: '/home/tab1'
    },
    {
      path: 'tab1',
      component: () => import((/* webpackChunkName: "Tab1 Page" */ '@/modules/home/views/Tab1Page.vue'))
    },
    {
      path: 'tab2',
      component: () => import((/* webpackChunkName: "Tab2 Page" */ '@/modules/home/views/Tab2Page.vue'))
    },
    {
      path: 'tab3',
      component: () => import((/* webpackChunkName: "Tab3 Page" */ '@/modules/home/views/Tab3Page.vue'))
    }
  ]
}
