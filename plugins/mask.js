import Vue from "vue";
import VueMask from "v-mask";
import { VueMaskDirective } from "v-mask";

Vue.use(VueMask)
Vue.directive('mask', VueMaskDirective)
