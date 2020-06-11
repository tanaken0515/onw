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
          :value="csrf"
        >
        <el-form-item label="Room Name">
          <el-input
            v-model="refName"
            name="room[name]"
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
  import { csrf } from '../../util/csrf';
  export default {
    name: "RoomForm",
    props: {
      actionPath: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        refName: '',
        csrf: csrf()
      };
    }
  };
</script>

<style scoped>

</style>