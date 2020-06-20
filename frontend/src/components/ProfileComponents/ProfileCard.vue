<template>
  <div class="idea-card__cardBody" @click="$emit('cardOpened', record)">
    <div class="idea-card">
      <div class="idea-card__headerBlock">
        <h1 class="idea-card__header">{{record.name}}</h1>
      </div>
      <div class="idea-card__description">
        {{ record.description }}
      </div>
    </div>
    <a-tooltip placement="bottomLeft">
      <template slot="title">
        <span>Осталось времени</span>
      </template>
      <a-progress class="daysLeft" type="circle" :percent="daysBetween.percentage" :format="() => `${daysBetween.days} Дней`" />
    </a-tooltip>
  </div>
</template>

<script>
import utils from '@/components/ProfileComponents/utils';

export default {
  name: "IdeaCard",
  props: {
    record: Object
  },
  computed: {
    daysBetween() {
      return utils.daysBetween(this.$moment, this.record.dayOfCreation, this.record.dayOfEnding);
    }
  }
};
</script>

<style lang="scss" scoped>
.idea-card__cardBody {
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  min-height: unset;
  border: 1px solid #e6eaf0;
  transition: background-color 0.125s ease-out;
  margin-bottom: 20px;
  max-width: unset;
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

.idea-card__image img {
  width: 100%;
}

.idea_card__stats {
  display: flex;
  flex-grow: 1;
  align-items: center;
  background-color: #e6eaf0;
}

.idea-card {
  height: 100%;
  display: flex;
  flex-grow: 3;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 8px;
  transition: 0.3s;
  padding: 15px 20px;
  background-color: #ffffff;
}

.daysLeft {
  padding: 10px !important;
}

.idea-card__actions {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin: 16px 0 0;

  .idea-card__action {
    margin-right: 16px;
    font-weight: bold;
  }
}
</style>
