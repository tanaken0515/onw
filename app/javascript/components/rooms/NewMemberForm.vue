<template>
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
    <el-form-item label="Check-in Code">
      <el-input
          v-model="refCheckInCode"
          name="member[check_in_code]"
      />
    </el-form-item>
    <el-form-item label="Your Name">
      <el-input
          v-model="refName"
          name="member[name]"
      />
    </el-form-item>
    <el-form-item>
      <el-button
          type="success"
          native-type="submit"
      >
        Check-in!
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { csrf } from '../../util/csrf';
  export default {
    name: "NewMemberForm",
    props: {
      actionPath: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        refName: '',
        refCheckInCode: '',
        csrf: csrf()
      };
    }
  };
</script>

<style scoped>

</style>
