<template>
  <div id="mainWrapperMap">
    <a-steps direction="vertical" :current="historyArray.length-1">
      <a-step :title="history.title" :description="history.description" v-for="history in historyArray" :key="history.id" />
    </a-steps>
  </div>
</template>

<script>
export default {
  name: "ideaRoadmap",
  props: {
    historyArray: Array
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#mainWrapperMap {
  width: 100%;
  height: 100%;
}
.ant-steps-item-content {
  display: flex !important;
  flex-flow: column;
  align-items: flex-start;
}
</style>
