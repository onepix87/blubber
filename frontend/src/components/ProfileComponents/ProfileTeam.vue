<template>
  <div class="team__card__wrapper">
    <a-card :title="idea.name">
      <div class="team__card">
        <div class="case">
          <p>{{ idea.description }}</p>
          <span>Сроки - до {{ $moment(idea.deadline).format("L") }}</span>
          <span>Следующая встреча команды - {{ $moment(idea.dateOfMeeting).format("MMMM Do YYYY, h:mm:ss a") }}</span>
        </div>
        <div class="team">
          <a-avatar
            size="large"
            icon="user"
            v-for="person in idea.team"
            :key="idea.team.indexOf(person)"
            class="person"
          />
        </div>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "Interest",
  props: {
    idea: Object
  }
};
</script>
<style scoped>
.team__card {
  width: 100%;
  display: flex;
  /*align-items: flex-start;*/
  justify-content: space-between;
}

.person {
  margin-right: 8px;
}

.case {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  margin-right: 15px;
}

.team {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-items: flex-end;
}

.team__card__wrapper {
  margin-bottom: 20px;
}
</style>
