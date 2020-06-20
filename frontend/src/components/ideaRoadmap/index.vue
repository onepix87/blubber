<template>
  <div id="mainWrapperMap">
    <a-steps direction="vertical" :current="ideaHistory.length-1">
      <a-step :title="idea.title" :description="idea.description" v-for="idea in ideaHistory" :key="idea.title" />
    </a-steps>
  </div>
</template>

<script>
export default {
  name: "ideaRoadmap",
  data() {
    return {
      ideaName: "Good One",
      author: "John Doe",
      ideaHistory: [
        {
          title: "Создание",
          description: "Вы разместили свою идею на портале!"
        },
        {
          title: "Первый лайк",
          description: "Ого, первый заинтересовавшийся! Дальше - больше!"
        },
        {
          title: "Первый комментарий",
          description: "У кого-то появились мысли по поводу вашей идеи, читайте скорее!"
        },
        {
          title: "10 лайков",
          description: "Разгоняемся!"
        }
      ]
    };
  },
  props: {
    msg: String
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
