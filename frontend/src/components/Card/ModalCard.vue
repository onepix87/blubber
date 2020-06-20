<template>
  <a-modal v-if="idea" @cancel="$emit('cancel')" :title="idea.name" :visible="visible" :footer="null">
    <div class="idea-info">
      <div class="idea-info__image" v-if="idea.images">
        <img :src="`${host}${idea.images}`" :alt="idea.name" />
      </div>

      <h2>Описание</h2>
      <div class="idea-info__description">
        {{ idea.description }}
      </div>

      <div class="idea-info__participants"></div>
    </div>

    <div class="idea-comments">
      <h2>Комментарии</h2>

      <div>
        <Comment />
      </div>

      <div class="idea-comments__form">
        <a-form>
          <a-form-item>
            <a-textarea
              placeholder="Что вы об этом думаете?"
              :auto-size="{ minRows: 3, maxRows: 5 }"
              v-model="message"
            />
          </a-form-item>

          <a-form-item>
            <a-button
              @click="sendComment"
              htmlType="submit"
              style="width: 100%"
              type="primary"
              :disabled="!this.message"
            >
              Отправить
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </a-modal>
</template>

<script>
import Comment from "./ModalCardComment";

export default {
  name: "ModalCard",
  components: {
    Comment
  },
  props: {
    idea: {
      type: Object,
      default: () => {}
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    host() {
      return this.$store.getters.getHost;
    },
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    handleCancel() {
      console.log("close modal");
    },
    sendComment(e) {
      if (!this.message) return;

      const comment = {
        record: this.idea.id,
        author: this.user.id,
        text: this.message
      };

      this.$store.dispatch("sendComment", comment);
      e.preventDefault();
    }
  },
  data: () => {
    return {
      message: ""
    };
  }
};
</script>

<style scoped lang="scss">
.idea-info__image {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  img {
    width: 100%;
  }
}
</style>
