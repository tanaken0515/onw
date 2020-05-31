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

const mountRoomsTable = () => {
  const el = document.querySelector('#js-rooms-table');

  if (el == null) {
    return;
  }

  const { rooms } = el.dataset;

  const props = {
    rooms: rooms ? JSON.parse(rooms) : []
  };

  new Vue({
    el: el,
    render: h => h(RoomsTable, { props })
  }).$mount();

};

document.addEventListener('DOMContentLoaded', () => {
  mountRoomsTable();
});
