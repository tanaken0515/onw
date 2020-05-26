import Vue from 'vue'
import RoomsTable from '../RoomsTable.vue'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.js-rooms-table')

  const { rooms } = el.dataset

  const props = {
    rooms: rooms ? JSON.parse(rooms) : []
  }

  new Vue({
    el: el,
    render: h => h(RoomsTable, { props })
  }).$mount()
})
