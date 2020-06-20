<template>
  <div class="main-container">
    <div class="list-wrapper">
      <List v-if="this.records.length > 0">
        <Card v-for="record in this.records" :key="record.name" v-bind:record="record" />
      </List>
      <EmptyError v-else />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Card from "@/components/Card/Card";
import List from "@/components/List/List";
import EmptyError from "@/components/EmptyError/EmptyError";
import { getJsonRequest, recordsUrl } from "../utils/fetch-utils";

export default {
  name: "Home",
  components: {
    EmptyError,
    List,
    Card
  },
  data: () => {
    return {
      records: []
    };
  },
  async mounted() {
    this.records = await getJsonRequest(recordsUrl);
  }
};
</script>

<style lang="scss">
.main-container {
  display: flex;
  flex-grow: 1;
  background-color: #f3f5f7;
}
.list-wrapper {
  max-width: 1732px;
}
</style>
