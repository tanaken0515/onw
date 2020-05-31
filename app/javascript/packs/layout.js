import Vue from 'vue';
import {
  Footer,
  Link
} from 'element-ui';
import LayoutFooter from '../LayoutFooter';

Vue.use(Footer);
Vue.use(Link);

const initLayoutContainer = () => {
  const el = document.querySelector('#js-layout-container');
  el.style.height = `${window.innerHeight}px`;
};

const mountLayoutFooter = () => {
  const el = document.querySelector('.js-layout-footer');

  new Vue({
    el: el,
    render: h => h(LayoutFooter)
  }).$mount();

};

document.addEventListener('DOMContentLoaded', () => {
  initLayoutContainer();
  mountLayoutFooter();
});
