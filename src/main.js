import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import naive from 'naive-ui'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
const app = createApp(App)
app.use(naive)
app.component('font-awesome-icon',FontAwesomeIcon)
app.use(router).mount('#app')
