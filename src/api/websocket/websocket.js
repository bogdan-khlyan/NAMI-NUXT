import {io} from "socket.io-client";
import {conditionsMap} from "@/utils/condition-map";

export async function initWebsocket({ $store, $orders, $toast }) {
  await $orders.getOrders()
  const socket = io('/', {
    path: '/ws',
    transports: ['websocket']
  })
  socket.on('order:condition', event => {
    if (event.condition === 'NEW') {
      return
    }
    $store.commit('orders.changeOrderCondition', event)
    if (event.condition === 'REJECT') {
      $toast.error(`Ваш заказ ${conditionsMap.get(event.condition).toLowerCase()}`)
    } else {
      $toast.success(`Ваш заказ ${conditionsMap.get(event.condition).toLowerCase()}`)
    }
  })
  socket.on('order:new', order => {
    $store.commit('orders.unshiftOrder', order)
  })
}
