export { default as WantAdd } from '../../components/app/WantAdd.vue'

export const LazyWantAdd = import('../../components/app/WantAdd.vue' /* webpackChunkName: "components/app/WantAdd" */).then(c => c.default || c)
