import { Dialog } from 'quasar'
import CustomDialog from 'features/Challenges/ui/CustomDialog.vue'

const showResultsDialog = parentRoot => {
  return new Promise(function(resolve, reject) {
    Dialog.create({
      component: CustomDialog,
      root: parentRoot
    })
      .onOk(() => {
        resolve('ok')
      })
      .onCancel(() => {
        reject('cancel')
      })
  })
}
export default ({ Vue, app }) => {
  Vue.prototype.$cDialog = showResultsDialog(app)
}

export { showResultsDialog }
