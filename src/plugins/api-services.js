import Vue from "vue";
import {UserInstanceService} from "@/api/userInstance/user-instance.service";
import MenuService from "@/api/menu/menu.service";
import OrdersService from "@/api/orders/orders.service";
import CartService from "@/api/cart/cart.service";

export default ({ app }) => {
  Vue.prototype.$userInstance = new UserInstanceService(app)
  Vue.prototype.$menu = MenuService(app)
  Vue.prototype.$orders = OrdersService(app)
  Vue.prototype.$cart = CartService(app)
}
