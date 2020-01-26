const load = view => () => import(`features/Challenges/ui/${view}.vue`)

const nestedRoutes = {
  path: '',
  component: load('NestedRoutes'),
  children: [
    {
      path: '',
      meta: {
        title: 'Nested Routes'
      },
      component: load('NestedRoutesIndex')
    },
    {
      path: 'mails',
      meta: {
        title: 'Nested Routes'
      },
      component: load('Mails')
    },
    {
      path: 'movies',
      meta: {
        title: 'Nested Routes'
      },
      component: load('Movies')
    },
    {
      path: 'alarms',
      meta: {
        title: 'Nested Routes'
      },
      component: load('Alarms')
    }
  ]
}

export default {
  path: '/challenges',
  component: () => import('layouts/MyLayout.vue'),
  children: [nestedRoutes]
}
