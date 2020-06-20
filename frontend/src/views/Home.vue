<template>
  <div class="main-container">
    <div class="list-wrapper">
      <div v-if="ideaList" class="list">
        <Card
          v-for="(idea, index) in this.ideaList"
          :key="index"
          :record="idea"
          @openModal="openModalHandler($event)"
        />
      </div>
      <EmptyError v-else />
    </div>
    <ModalCard :visible="visibleModal" :idea="currentIdea" @cancel="visibleModal = false" />
  </div>
</template>
<script>
// @ is an alias to /src
import Card from "@/components/Card/Card";
import ModalCard from "@/components/Card/ModalCard";

// import List from "@/components/List/List";
import EmptyError from "@/components/EmptyError/EmptyError";
// import { getJsonRequest, recordsUrl } from "../utils/fetch-utils";

export default {
  name: "Home",
  components: {
    EmptyError,
    // List,
    Card,
    ModalCard
  },
  mounted() {
    this.$store.dispatch("updateIdeaList");
  },
  computed: {
    ideaList() {
      return this.$store.getters.getIdeaList;
    }
  },
  methods: {
    openModalHandler(event) {
      console.log("event", event);
      this.currentIdea = event;
      this.visibleModal = true;
    }
  },
  data: () => {
    return {
      records: [],
      currentIdea: null,
      visibleModal: false
    };
  }
};
</script>

<style lang="scss">
.list-wrapper {
  margin: 10px;
}

.main-container {
  display: flex;
  flex-grow: 1;
  background-color: #f3f5f7;
  overflow: scroll;
}
.list-wrapper {
  max-width: 1732px;
}

.list {
  display: flex;
  flex-flow: column nowrap;
}
</style>
