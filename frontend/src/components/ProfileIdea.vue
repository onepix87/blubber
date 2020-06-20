<template>
  <div class="profile__idea">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Жизненный путь"
      @back="() => null"
    />
    <idea-roadmap></idea-roadmap>
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Статистика"
      @back="() => null"
    />
    <a-tooltip placement="bottomLeft">
      <template slot="title">
        <span>Осталось времени</span>
      </template>
      <a-progress class="daysLeft" type="circle" :percent="75" :format="percent => `${percent} Days`" />
    </a-tooltip>
    <a-tooltip placement="bottomLeft">
      <template slot="title">
        <span>Соотношение лайков</span>
      </template>
      <a-progress :percent="60" :success-percent="30" type="circle" />
    </a-tooltip>
  </div>
</template>
<script>
  import ideaRoadmap from '@/components/ideaRoadmap';
  export default {
    name: 'ProfileIdea',
    components: {
      ideaRoadmap
    }
  }
</script>
<style lang="scss"></style>
