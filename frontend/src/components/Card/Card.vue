<template>
  <div class="idea-card__cardBody">
    <a-tooltip placement="topLeft" v-if="isCoffeeInviteVisible">
      <template slot="title">
        <span>Пригласите автора идеи на кофе!</span>
      </template>
      <a-badge class="coffee_invite__badge" @click="sendCoffeeInvitation">
        <a-icon type="coffee" class="coffee_invite" />
      </a-badge>
    </a-tooltip>
    <div v-on:click="$emit('card:open', record)" class="idea-card">
      <div v-if="record.images !== null" class="idea-card__image">
        <img :src="`${host}${record.images}`" :alt="record.name" />
      </div>
      <div class="idea-card__description">
        {{ record.description ? cutDescription(record.description) : "" }}
      </div>
      <div class="idea-card__actions">
        <div v-if="isEstimated" class="idea-card__actionsOutlines">
          <a-icon type="like" :theme="mark === 'like' ? 'filled' : 'outlined'" />
          <span style="margin-right: 10px">
            {{ mark === "like" ? record.likes_count + 1 : record.likes_count }}
          </span>
          <a-icon type="dislike" :theme="mark === 'dislike' ? 'filled' : 'outlined'" />
          <span>
            {{ mark === "dislike" ? record.dislikes_count + 1 : record.dislikes_count }}
          </span>
        </div>
        <a-button
          v-if="!isEstimated"
          class="idea-card__action"
          type="primary"
          icon="like"
          size="large"
          shape="circle"
          @click="likeIdea"
        />
        <a-button
          v-if="!isEstimated"
          class="idea-card__action"
          type="primary"
          icon="dislike"
          size="large"
          shape="circle"
          @click="dislikeIdea"
        />
        <a-button class="idea-card__action" type="primary" icon="star" size="large" shape="circle" />
        <a-button
          class="idea-card__action"
          type="primary"
          icon="message"
          size="large"
          shape="circle"
          @click="$emit('openModal', record)"
        />
        <a-button class="idea-card__action" type="primary" size="large" shape="circle">
          ...
        </a-button>
      </div>
    </div>
    <div class="idea-card__name-wrapper">
      <span class="idea-card__name">
        {{ record.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "IdeaCard",
  data() {
    return {
      isCoffeeInviteVisible: true,
      isEstimated: false,
      mark: "",
      likes: 0,
      dislikes: 0
    };
  },
  props: {
    record: Object,
    default: () => {}
  },
  computed: {
    host() {
      return this.$store.getters.getHost;
    }
  },
  methods: {
    sendCoffeeInvitation() {
      this.$store.dispatch("sendUserCoffeeNotification");
      this.isCoffeeInviteVisible = false;
    },
    likeIdea() {
      this.$store.dispatch("likeIdea", this.record.id);

      if (this.$store.getters.getUser) {
        this.isEstimated = true;
        this.mark = "like";
      }
    },
    dislikeIdea() {
      this.$store.dispatch("dislikeIdea", this.record.id);

      if (this.$store.getters.getUser) {
        this.isEstimated = true;
        this.mark = "dislike";
      }
    },
    cutDescription(desc) {
      if (desc.length > 250) {
        const text = desc.slice(0, 250);
        return `${text}...`;
      }
      return desc;
    }
  }
};
</script>

<style lang="scss">
.coffee_invite {
  font-size: 18px;
}
.coffee_invite__badge {
  background-color: #ffd700;
  display: flex !important;
  align-items: center;
  justify-content: center;
  position: absolute !important;
  top: -5px;
  left: -3px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  &:hover {
    background-color: #ffdf00;
  }
}
.idea-card__actionsOutlines {
  display: flex;
  align-items: center;
  position: absolute;
  left: -187px;
  top: 23px;
}
.idea-card__description {
  padding: 15px 20px;
}
.idea-card__cardBody {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border-radius: 10px;
  transition: background-color 0.125s ease-out;
  max-width: 600px;
  position: relative;
  min-height: 250px;
  margin-bottom: 10px;
}
.idea-card__cardBody:hover {
  background-color: #e1e3e8;
}
.idea-card__name-wrapper {
  padding: 5px 10px;
}
.idea-card__name {
  color: #434343;
  font-size: 16px;
  font-weight: bold;
}

.idea-card__image {
  width: 100%;
  max-height: 200px;
  overflow: hidden;
}
.idea-card__image img {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
}

.idea_card__stats {
  display: flex;
  flex-grow: 1;
  align-items: center;
  background-color: #e6eaf0;
}

.idea-card {
  justify-content: space-between;
  display: flex;
  flex-grow: 3;
  width: 100%;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 8px;
  transition: 0.3s;
  background-color: #ffffff;
}

.daysLeft {
  padding: 10px !important;
}

.idea-card__actions {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin: 16px 0;

  .idea-card__action {
    margin-right: 16px;
    font-weight: bold;
  }
}
</style>
