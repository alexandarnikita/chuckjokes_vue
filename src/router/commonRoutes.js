
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    meta: {
      title: 'Home',
      ignoreAuth: true
    },
    component: () => import('../containers/HomeContainer.vue'),
    children: [
      {
        path: '/',
        meta: {
          title: 'JokeList',
          ignoreAuth: true
        },
        component: () => import('../views/JokeList/index.vue')
      }
    ]
  }
]

