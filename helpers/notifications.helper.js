import Notification from "element-ui/packages/notification/src/main";

class NotificationsHelper {

  success(options) {
    Notification.success({
      title: 'Успех',
      message: 'Успешно завершено',
      duration: 0,
      offset: 80,
      customClass: 'base-success-notification',
      ...options
    })
  }

  addToCart() {
    this.success({
      title: 'Товар  добавлен в корзину',
      message: 'Всего товаров 1 на сумму 240₽',
    })
  }

}

export const notificationsHelper = new NotificationsHelper()
