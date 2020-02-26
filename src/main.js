// Muli Font
require('typeface-muli')

// Fontawesome
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

// Helpers
import * as formatDate from '~/helpers/formatDate.js'

// PrismJS theme
import 'prismjs/themes/prism-tomorrow.css'

// Layouts
import DefaultLayout from '~/layouts/Default.vue'

// Buefy
import '~/assets/styles/index.scss';
import Buefy from 'buefy';

// Disqus
import VueDisqus from 'vue-disqus'

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

  Vue.use(VueDisqus)
  
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component('Layout', DefaultLayout)
}