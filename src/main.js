import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/plugins/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCirclePlus, faPalette, faStopwatch20, faFaceGrinBeamSweat, faCamera  } from '@fortawesome/free-solid-svg-icons'

library.add(faCirclePlus, faPalette, faStopwatch20, faFaceGrinBeamSweat, faCamera)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
