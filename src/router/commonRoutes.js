
export default [
  {
    path: '/',
    redirect: '/hello'
  },
  {
    path: '/hello',
    meta: {
      title: 'Hello',
      ignoreAuth: true
    },
    component: () => import('../containers/HomeContainer.vue')
  }
]

