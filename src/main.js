import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPaperPlane,
  faInfoCircle,
  faGlobe
} from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Buefy from 'buefy';
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  library.add(
    faPaperPlane,
    faInfoCircle,
    faGlobe,
    faInstagram
  )

  Vue.use(Buefy, {
    defaultIconPack: 'fa',
    defaultIconComponent: 'font-awesome-icon'
  })

  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component('Layout', DefaultLayout)
}