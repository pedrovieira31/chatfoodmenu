import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BInputGroup } from 'bootstrap-vue'
import { InputGroupPlugin } from 'bootstrap-vue'
import './config/axios'

window.axios = require('axios');

library.add(fas)

Vue.component('b-input-group', BInputGroup)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(InputGroupPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
