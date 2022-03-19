import Notification from "element-ui/packages/notification/src/main";

class NotificationsHelper {

  success(options) {
    Notification.success({
      title: 'Успех',
      message: 'Успешно завершено',
      // duration: 0,
      offset: 80,
      customClass: 'base-success-notification',
      ...options
    })
  }

}

export const notificationsHelper = new NotificationsHelper()
