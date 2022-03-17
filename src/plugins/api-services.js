import Vue from "vue";
import {UserInstanceService} from "@/api/userInstance/user-instance.service";
import {MenuService} from "@/api/menu/menu.service";

export default ({ app }) => {
  Vue.prototype.$userInstance = new UserInstanceService(app)
  Vue.prototype.$menu = new MenuService(app)
}
