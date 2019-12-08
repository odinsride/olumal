import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPaperPlane,
  faInfoCircle,
  faGlobe,
  faLongArrowAltRight
} from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import * as formatDate from '~/helpers/formatDate.js'

import Buefy from 'buefy';
import '~/assets/styles/index.scss';

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  library.add(
    faPaperPlane,
    faInfoCircle,
    faGlobe,
    faInstagram,
    faLongArrowAltRight
  )

  Vue.use(Buefy, {
    defaultIconPack: 'fa',
    defaultIconComponent: 'font-awesome-icon'
  }, formatDate)

  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component('Layout', DefaultLayout)
}