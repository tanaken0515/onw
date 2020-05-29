import Vue from 'vue';
import {
  Link,
  Table,
  TableColumn
} from 'element-ui';
import RoomsTable from '../RoomsTable.vue';

Vue.use(Link);
Vue.use(Table);
Vue.use(TableColumn);

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.js-rooms-table');

  const { rooms } = el.dataset;

  const props = {
    rooms: rooms ? JSON.parse(rooms) : []
  };

  new Vue({
    el: el,
    render: h => h(RoomsTable, { props })
  }).$mount();
});
