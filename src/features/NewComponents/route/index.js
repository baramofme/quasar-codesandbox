const load = view => () => import(`features/NewComponents/ui/${view}.vue`)

const index = {
  path: '',
  name: 'new-components',
  meta: {
    title: 'New Quasar Components'
  },
  components: {
    tabs: load('TabPager'),
    default: load('Index')
  }
}

const qSkeleton = {
  path: 'q-skeleton',
  name: 'q-skeleton',
  meta: {
    title: 'QSkeleton',
    tabLabel: 'Skeleton',
    tabIcon: 'mdi-card-text-outline'
  },
  components: {
    tabs: load('TabPager'),
    default: load('QSkeletonRegular')
  }
}

const qSkeletonDynamic = {
  path: 'q-skeleton-dynamic',
  name: 'q-skeleton-dynamic',
  meta: {
    title: 'QSkeleton',
    tabLabel: 'Dynamic',
    tabIcon: 'mdi-card-text-outline'
  },
  components: {
    tabs: load('TabPager'),
    default: load('QSkeletonSample')
  }
}
export const tabs = [qSkeleton, qSkeletonDynamic]
export default {
  path: '/new-components',
  component: () => import('layouts/MyLayout.vue'),
  children: [index, qSkeleton, qSkeletonDynamic]
}
