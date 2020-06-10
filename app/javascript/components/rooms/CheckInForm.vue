<template>
  <el-row>
    <el-col :span="6">
      <el-tabs v-model="refTabName">
        <el-tab-pane
          label="Check-in"
          name="newcomer"
        >
          <new-member-form :action-path="actionPaths.newcomer" />
        </el-tab-pane>
        <el-tab-pane
          label="Re-entry"
          name="member"
        >
          <re-entry-form :action-path="actionPaths.member" />
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
  import NewMemberForm from './NewMemberForm';
  import ReEntryForm from './ReEntryForm';

  export default {
    name: "CheckInForm",
    components: {
      NewMemberForm,
      ReEntryForm
    },
    props: {
      actionPaths: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        refTabName: 'newcomer'
      };
    }
  };
</script>

<style scoped>

</style>
