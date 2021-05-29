export { default as Modal } from '../../components/app/Modal.vue'
export { default as WantAdd } from '../../components/app/WantAdd.vue'
export { default as Want2Add } from '../../components/app/want2Add.vue'

export const LazyModal = import('../../components/app/Modal.vue' /* webpackChunkName: "components/app/Modal" */).then(c => c.default || c)
export const LazyWantAdd = import('../../components/app/WantAdd.vue' /* webpackChunkName: "components/app/WantAdd" */).then(c => c.default || c)
export const LazyWant2Add = import('../../components/app/want2Add.vue' /* webpackChunkName: "components/app/want2Add" */).then(c => c.default || c)
