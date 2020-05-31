import Vue from 'vue';
import {
  Button,
  Col,
  Form,
  FormItem,
  Input,
  Link,
  Row,
  Table,
  TableColumn
} from 'element-ui';
import RoomForm from '../RoomForm';
import RoomsTable from '../RoomsTable.vue';

Vue.use(Button);
Vue.use(Col);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Link);
Vue.use(Row);
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

const mountRoomForm = () => {
  const el = document.querySelector('#js-room-form');

  if (el == null) {
    return;
  }

  const { actionPath } = el.dataset;

  const props = {
    actionPath: actionPath
  };

  new Vue({
    el: el,
    render: h => h(RoomForm, { props })
  }).$mount();
};

document.addEventListener('DOMContentLoaded', () => {
  mountRoomsTable();
  mountRoomForm();
});
