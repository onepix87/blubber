<template>
  <div class="comment">
    <div class="comment__user">
      <a-icon type="user" class="comment__icon" />
    </div>
    <div class="comment__content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dolorem earum eius excepturi hic odio quia quo
      recusandae suscipit.
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    host() {
      return this.$store.getters.getHost;
    }
  },
  methods: {
    sendComment() {}
  },
  data: () => {
    return {
      message: ""
    };
  }
};
</script>

<style>
.comment {
  display: flex;
  flex-font: row nowrap;
  margin-bottom: 16px;
}

.comment__user {
  background-color: #ccc;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.comment__icon {
  font-size: 32px;
  color: #fff;
}

.comment__content {
  flex-shrink: 1;
  margin-left: 16px;
  color: #999;
}

.idea-info__image {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}
</style>
