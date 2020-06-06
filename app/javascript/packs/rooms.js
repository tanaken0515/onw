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
import RoomForm from '../components/rooms/RoomForm';
import RoomsTable from '../components/rooms/RoomsTable';
import CheckInForm from '../components/rooms/CheckInForm';

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

const mountCheckInForm = () => {
  const el = document.querySelector('#js-check-in-form');

  if (el == null) {
    return;
  }

  const { actionPath } = el.dataset;

  const props = {
    actionPath: actionPath
  };

  new Vue({
    el: el,
    render: h => h(CheckInForm, { props })
  }).$mount();
};

document.addEventListener('DOMContentLoaded', () => {
  mountRoomsTable();
  mountRoomForm();
  mountCheckInForm();
});
