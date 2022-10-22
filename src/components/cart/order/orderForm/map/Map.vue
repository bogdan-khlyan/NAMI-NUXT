<template>
  <div v-loading="loading" class="map-wrapper">
    <address-not-found v-if="error"/>
    <yandex-map
      v-show="!error"
      :coords="startCoords"
      :zoom="zoom"
      :controls="[]"
      ref="map"/>
  </div>
</template>

<script>
import {yandexMap, ymapMarker, loadYmap} from "vue-yandex-maps";
import AddressNotFound from "@/components/cart/order/orderForm/map/AddressNotFound";

export default {
  name: 'ymap',
  components: { AddressNotFound, yandexMap, ymapMarker },
  model: { prop: 'deliveryCost', event: 'input' },
  props: {
    data: { type: Object },
    address: { type: String },
    deliveryCost: { type: Number }
  },
  data() {
    return {
      loading: false,
      startCoords: [48.005202, 37.799126],
      zoom: 12,
      error: false
    }
  },
  mounted() {
    this.loadYmap()
  },
  methods: {
    async loadYmap() {
      await loadYmap({})
      return window.ymaps.ready(() => this.createRouteControl())
    },
    createRouteControl() {
      const control = new window.ymaps.control.RoutePanel({ options: { visible: false } })
      control.routePanel.options.set({ types: { auto: true } })
      control.routePanel.state.set({
        fromEnabled: false, toEnabled: false,
        from: 'Донецк, Университетская 33',
        to: 'донецк ' + this.address
      })
      this.$refs.map.myMap.controls.add(control)
      this.settingsRoute(control)
    },
    async settingsRoute(control) {
      const route = await control.routePanel.getRouteAsync()
      route.model.setParams({ results: 1 }, true)
      route.model.events.add('requestsuccess', () => this.settingsActiveRoute(route))
      route.model.events.add('requestfail', this.mapError)
    },
    settingsActiveRoute(route) {
      const activeRoute = route.getActiveRoute()
      if (!activeRoute) this.mapError()
      const distance = activeRoute.properties.get('distance')
      if (distance.value > 20000) {
        this.mapError()
        return
      }
      const cost = this.calcDeliveryCost(distance)

      const template = `<span>Расстояние: ${distance.text}</span>` + '<br/>' +
        '<span style="font-weight: bold; font-style: italic">Стоимость доставки: ' + cost + ' р.</span>'

      const balloonContentLayout = window.ymaps
        .templateLayoutFactory
        .createClass(template)

      route.options.set('routeBalloonContentLayout', balloonContentLayout)
      activeRoute.balloon.open()
    },
    calcDeliveryCost(distance) {
      const routeLength = Math.round(distance.value / 1000)
      const cost = Math.max(routeLength * 25, 25)
      this.$emit('input', cost)
      return cost
    },
    mapError() {
      this.error = true
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
.map-wrapper {
  position: relative;
  height: 220px;

  .ymap-container {
    height: 220px;
  }
}
</style>
