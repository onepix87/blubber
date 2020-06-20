<template>
  <div v-bind:class="{ 'modal-wrapper': true, hidden: !isShown }" v-on:click="isShown = false">
    <div class="modal">
      <div class="modal-card">
        <h2 class="modal-card__name">{{ record.name }}</h2>
      </div>
      <div class="modal-card__description">
        <p>{{ record.description }}</p>
      </div>
      <div class="modal-card__author">
        <span>от {{ record.author }}</span>
      </div>
      <div class="modal-card__actions">
        <a-button
          class="modal-card__action"
          type="primary"
          icon="like"
          size="large"
          shape="circle"
        />
        <a-button
          class="modal-card__action"
          type="primary"
          icon="dislike"
          size="large"
          shape="circle"
        />
        <a-button
          class="modal-card__action"
          type="primary"
          icon="star"
          size="large"
          shape="circle"
        />
        <a-button
          class="modal-card__action"
          type="primary"
          icon="message"
          size="large"
          shape="circle"
        />
        <a-button
          class="modal-card__action"
          type="primary"
          size="large"
          shape="circle">
          ...
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalCard",
  props: {
    record: Object,
    isShown: Boolean
  },
  data: () => {
    return {
      isShown: false
    };
  }
};
</script>

<style scoped>
.modal-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.25);
}
  .hidden {
    display: none;
  }
</style>
