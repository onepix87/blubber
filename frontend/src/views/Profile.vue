<template>
  <div class="profile">
    <a-layout style="height: 100%;">
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="currentTab"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub" style="margin-top: 20px;">
            <span slot="title"><a-icon type="notification" />Уведомления</span>
            <a-menu-item key="10" @click="handleNavClick">
              Время для кофе
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="fire" />Мои идеи</span>
            <a-menu-item key="1" @click="handleNavClick">
              В разработке
            </a-menu-item>
            <a-menu-item key="2" @click="handleNavClick">
              Архив
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="star" />Избранное</span>
            <a-menu-item key="8" @click="handleNavClick">
              Команды
            </a-menu-item>
            <a-menu-item key="3" @click="handleNavClick">
              Идеи
            </a-menu-item>
            <a-menu-item key="4" @click="handleNavClick">
              Авторы
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="setting" />Настройки</span>
            <a-menu-item key="5" @click="handleNavClick">
              Интересы
            </a-menu-item>
            <a-menu-item key="6" @click="handleNavClick">
              Личные данные
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content :style="{ background: '#fff', padding: '24px', minHeight: '280px', margin: '16px 0' }">
          <span
            v-if="
              (progressIdeas.length === 0 && currentTab[0] === '1') || (archIdeas.length === 0 && currentTab[0] === '2')
            "
          >
            Пока что у вас нет идей! Давайте создадим первую!
          </span>
          <div v-if="currentTab[0] === '1' && openedCard === ''">
            <ProfileCard v-for="idea in progressIdeas" :key="idea.id" :record="idea" @cardOpened="openCard" />
          </div>
          <div v-if="currentTab[0] === '2' && openedCard === ''">
            <ProfileCard v-for="idea in archIdeas" :key="idea.id" :record="idea" @cardOpened="openCard" />
          </div>
          <div v-if="openedCard">
            <ProfileIdea :ideaRecord="openedCard" @cardClosed="closeCard" />
          </div>
          <div v-if="currentTab[0] === '5' && openedCard === ''" class="interestsWrapper">
            <interest
              v-for="interest in allInterests"
              :key="interest.id"
              :interest="interest"
              @changeInterestState="changeInterest"
            />
          </div>
          <div v-if="currentTab[0] === '10' && openedCard === ''">
            <coffee-invite
              v-for="invite in userInvites"
              :key="invite.id"
              :invite="invite"
            />
          </div>
          <div v-if="currentTab[0] === '8' && openedCard === ''">
            <ProfileTeam v-for="teamPlay in userTeamsPage" :idea="teamPlay" :key="teamPlay.id" />
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import ProfileIdea from "@/components/ProfileComponents/ProfileIdea";
import ProfileCard from "@/components/ProfileComponents/ProfileCard";
import Interest from "@/components/ProfileComponents/Interest";
import ProfileTeam from "../components/ProfileComponents/ProfileTeam";
import CoffeeInvite from "../components/ProfileComponents/CoffeeInvite";
import { map, sortBy, cloneDeep } from "lodash";

export default {
  name: "Profile",
  components: {
    ProfileIdea,
    ProfileCard,
    Interest,
    ProfileTeam,
    CoffeeInvite
  },
  data() {
    return {
      currentTab: ["1"],
      progressIdeas: [],
      openedCard: "",
      archIdeas: [],
      allInterests: [],
      userInterests: [],
      userTeamsPage: [],
      userInvites: []
    };
  },
  mounted() {
    // this.$store.dispatch("updateProgressIdes");
    const userId = this.$store.getters.getUser.id;
    console.log(userId);
    this.progressIdeas = this.$store.getters.getIdeaList.filter(idea => idea.author === userId);

    this.$store.dispatch("updateAllInterests");
    this.allInterests = this.$store.getters.getAllInterests;
  },
  methods: {
    openCard(idea) {
      // console.log(idea);
      this.openedCard = idea;
    },
    closeCard() {
      this.openedCard = "";
    },
    handleNavClick(e) {
      this.currentTab.pop();
      this.currentTab.push(e.key);
      this.openedCard = "";
      if (e.key === "2" && !this.archIdeas.length) {
        this.$store.dispatch("updateArchiveIdeas");
        this.archIdeas = this.$store.getters.getArchiveIdeas;
      }
      if (e.key === "5" && !this.userInterests.length) {
        this.$store.dispatch("updateUserInterests");
        this.userInterests = this.$store.getters.getUserInterests;
        // this.allInterests = this.allInterests.map();
        const mappedValues = map(this.allInterests, interest => {
          if (this.userInterests.indexOf(interest.id) !== -1) {
            return {
              ...interest,
              isChosen: true
            };
          } else return { ...interest };
        });
        this.allInterests = sortBy(mappedValues, ["isChosen"]);
      }
      if (e.key === "8" && !this.userTeamsPage.length) {
        this.$store.dispatch("updateUserTeamsPage");
        this.userTeamsPage = this.$store.getters.getUserTeamsPage;
      }
      if (e.key === "10" && !this.userInvites.length) {
        this.$store.dispatch("updateUserNotifications");
        this.userInvites = this.$store.getters.getUserNotifications;
        console.log(this.userInvites)
      }
    },
    changeInterest(interest) {
      const newChoice = !this.allInterests[this.allInterests.indexOf(interest)].isChosen;
      this.allInterests[this.allInterests.indexOf(interest)] = {
        ...interest,
        isChosen: newChoice
      };
      let newInterests = cloneDeep(this.userInterests);
      if (this.userInterests.includes(interest.id)) {
        newInterests = newInterests.filter(el => el !== interest.id);
      } else newInterests.push(interest.id);
      this.$store.commit("setUserInterests", newInterests);
      this.userInterests = newInterests;
      this.$forceUpdate();
    }
  },
  beforeDestroy() {
    this.$store.dispatch("saveNewUserInterest");
  }
};
</script>
<style lang="scss">
.profile {
  height: 100%;
}

.interestsWrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}
</style>
