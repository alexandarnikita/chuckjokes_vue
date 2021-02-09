
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
    component: () => import('../containers/HomeContainer'),
    children: [
      {
        path: '/',
        meta: {
          title: 'JokeList',
          ignoreAuth: true
        },
        component: () => import('../views/JokeList')
      },
      {
        path: '/joke/:id',
        meta: {
          title: 'JokeDetail',
          ignoreAuth: true
        },
        component: () => import('../views/JokeDetail')
      }
    ]
  }
]

