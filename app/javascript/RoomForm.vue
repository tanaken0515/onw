<template>
  <el-row>
    <el-col :span="6">
      <el-form
        :action="actionPath"
        method="post"
        label-width="120px"
      >
        <input
          type="hidden"
          name="_method"
          value="post"
        >
        <input
          type="hidden"
          name="authenticity_token"
          value="todo"
        >
        <el-form-item label="Room Name">
          <el-input
            name="name"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="success"
            native-type="submit"
          >
            Create!
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "RoomForm",
    props: {
      actionPath: {
        type: String,
        required: true
      }
    }
  };
</script>

<style scoped>

</style>