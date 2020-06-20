<template>
  <div id="app">
    <Header />
    <router-view />
    <LoginPopup />
  </div>
</template>
<script>
import Header from "./components/Header";
import LoginPopup from "./components/LoginPopup";
export default {
  components: {
    Header,
    LoginPopup
  }
};
</script>
<style lang="scss">
body {
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-grow: 1;
  flex-flow: column nowrap;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
