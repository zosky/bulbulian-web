// toasts
import Toast from 'vue-toastification'
import type { PluginOptions } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import '../assets/toastReshade.css'

const toastOptions: PluginOptions = {
  shareAppContext: true,  
  toastClassName: 'toastReshade',
  bodyClassName: ['custom-body'],
  closeButtonClassName: 'custom-close',
  // icon: { iconClass: 'toastIcon', iconChildren: 'Help', iconTag: 'HelpTag' }  
}

export { Toast, toastOptions }