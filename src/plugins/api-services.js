import Vue from "vue";
import {UserInstanceService} from "@/api/userInstance/user-instance.service";
import {MenuService} from "@/api/menu/menu.service";
import {OrdersService} from "@/api/orders/orders.service";
import {CartService} from "@/api/cart/cart.service";

import {NotificationsHelper} from "@/helpers/notifications.helper";

export default ({app}) => {
  const baseNotify = new NotificationsHelper(app)
  Vue.prototype.$baseNotify = baseNotify

  Vue.prototype.$userInstance = new UserInstanceService(app, baseNotify)
  Vue.prototype.$menu = new MenuService(app, baseNotify)
  Vue.prototype.$orders = new OrdersService(app, baseNotify)
  Vue.prototype.$cart = new CartService(app, baseNotify)
}
