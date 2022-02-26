import Vue from "vue";
import YmapPlugin from "vue-yandex-maps";

const settings = {
  apiKey: '8de247b8-c5f2-40b2-8a90-09fb4bdac04b',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

Vue.use(YmapPlugin, settings)
