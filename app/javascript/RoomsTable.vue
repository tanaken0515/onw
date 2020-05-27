<template>
  <el-table
    :data="rooms"
    style="width: 100%"
  >
    <el-table-column
      prop="id"
      label="ID"
    />
    <el-table-column
      prop="name"
      label="Name"
    />
    <el-table-column label="Path">
      <template slot-scope="scope">
        <el-link
          type="primary"
          :href="scope.row.path"
        >
          Show
        </el-link>
      </template>
    </el-table-column>
  </el-table>
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