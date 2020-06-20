<template>
  <div class="main-header">
    <div class="logo">
      <h2>Logo</h2>
    </div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="Home">Список идей </a-menu-item>
      <a-menu-item key="Add"> Создать идею </a-menu-item>
      <a-menu-item key="Favorite"> Избранное </a-menu-item>
    </a-menu>

    <div v-if="true">
      <a-button @click="openAuthPopup(true)" type="primaty" size="large"
        >Войти</a-button
      >
    </div>

    <div v-else class="profile">
      <a-button type="normal" icon="user" size="large" shape="circle" />
    </div>
  </div>
</template>

<script>
// import Button from "./Button";

export default {
  name: "Header",
  // components: { Button }
  created() {
    const array = [this.$route.name];
    this.$store.commit("setCurrentPage", array);
  },
  methods: {
    go(routeName) {
      this.$router.push({ name: routeName }).catch(() => {});
    },
    openAuthPopup(value) {
      this.$store.commit("setOpenLoginPopup", value);
    }
  },
  computed: {
    current: {
      get() {
        return this.$store.getters.getCurrentPage;
      },
      set(value) {
        this.$store.commit("setCurrentPage", value);
      }
    }
  },
  data() {
    return {
      // current: ["Home"]
    };
  },
  watch: {
    current(value) {
      console.log("value", value[0]);
      this.go(value[0]);
    }
  }
};
</script>

<style lang="scss">
.main-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px;
}
</style>
