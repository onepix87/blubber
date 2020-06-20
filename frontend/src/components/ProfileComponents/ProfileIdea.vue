<template>
  <div class="profile__idea">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240); margin-bottom: 25px; width: 100%;"
      title="Жизненный путь"
      @back="$emit('cardClosed')"
    />
    <idea-roadmap :historyArray="ideaRecord.achievements" />
    <h2>Статистика</h2>
    <div class="profile__idea_stats">
      <a-tooltip placement="bottomLeft">
        <template slot="title">
          <span>Осталось времени</span>
        </template>
        <a-progress
          :width="200"
          class="daysLeft"
          type="circle"
          :percent="daysBetween.percentage"
          :format="() => `${daysBetween.days} Дней`"
        />
      </a-tooltip>
      <a-tooltip placement="bottomLeft">
        <template slot="title">
          <span>Соотношение лайков {{ideaRecord.likes_count}} / дизлайков {{ideaRecord.dislikes_count}}</span>
        </template>
        <a-progress :width="200" :percent="100" :success-percent="likesCount" type="circle" />
      </a-tooltip>
    </div>
  </div>
</template>
<script>
import ideaRoadmap from "@/components/ProfileComponents/ideaRoadmap";
import utils from '@/components/ProfileComponents/utils';

export default {
  name: "ProfileIdea",
  props: {
    ideaRecord: Object
  },
  components: {
    ideaRoadmap
  },
  computed: {
    likesCount() {
      const success = (this.ideaRecord.likes_count / (this.ideaRecord.likes_count + this.ideaRecord.dislikes_count)) * 100;
      return Math.round(success);
    },
    daysBetween() {
      return utils.daysBetween(this.$moment, this.ideaRecord.dayOfCreation, this.ideaRecord.dayOfEnding);
    }
  }
};
</script>
<style lang="scss">
.profile__idea {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}
.profile__idea_stats {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 200px;
}
</style>
