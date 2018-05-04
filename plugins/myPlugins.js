import Vue from 'vue'
import {VTooltip,VPopover,VClosePopover} from 'v-tooltip'
import VueBlu from  'vue-blu'
// import  'vue-blu/dist/css/vue-blu.min.css'

Vue.directive('tooltip', VTooltip)
Vue.directive('close-popover', VClosePopover)
Vue.component('v-popover', VPopover)
Vue.use(VueBlu)

