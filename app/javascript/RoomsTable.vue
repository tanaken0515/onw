<template>
  <table>
    <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Path</th>
    </tr>
    </thead>

    <tbody>
    <tr
      v-for="room in rooms"
      :key="room.id"
    >
      <td>{{ room.id }}</td>
      <td>{{ room.name }}</td>
      <td><a :href="room.path">Show</a></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "RoomsTable",
    props: {
      rooms: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>