import Vue from "vue";
import UserInstanceService from "@/api/userInstance/user-instance.service";
import MenuService from "@/api/menu/menu.service";
import OrdersService from "@/api/orders/orders.service";
import CartService from "@/api/cart/cart.service";
import YandexService from "@/api/yandex/yandex.service";
import ConfigService from "@/api/config/config.service";
import VkService from "@/api/vk/vk.service";

export default ({ app }) => {
  Vue.prototype.$userInstance = UserInstanceService(app)
  Vue.prototype.$menu = MenuService(app)
  Vue.prototype.$orders = OrdersService(app)
  Vue.prototype.$cart = CartService(app)
  Vue.prototype.$yandex = YandexService(app)
  Vue.prototype.$appConfig = ConfigService(app)
  Vue.prototype.$vk = VkService()
}
