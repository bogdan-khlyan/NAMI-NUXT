import Vue from "vue";
import {UserInstanceService} from "@/components/userInstance/user-instance.service";

export default ({ app }) => {
  Vue.prototype.$userInstance = new UserInstanceService(app)
}
