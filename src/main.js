import Vue from 'vue';
import App from './App.vue';

const dom = document.createElement('div');
document.body.append(dom);
new Vue({
  render: (h) => h(App),
}).$mount(dom);
