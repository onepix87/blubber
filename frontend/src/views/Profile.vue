<template>
  <div class="profile">
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="fire" />Список твоих идей</span>
            <a-menu-item key="9">
              В разработке
            </a-menu-item>
            <a-menu-item key="10">
              Архив
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="star" />Избранное</span>
            <a-menu-item key="9">
              Идеи
            </a-menu-item>
            <a-menu-item key="10">
              Авторы
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="setting" />Настройки</span>
            <a-menu-item key="5">
              Интересы
            </a-menu-item>
            <a-menu-item key="6">
              Личные данные
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content :style="{ background: '#fff', padding: '24px', minHeight: '280px', margin: '16px 0' }">
<!--          Пока что у вас нет идей! Давайте создадим первую!-->
          <ProfileIdea />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
  import ProfileIdea from '@/components/ProfileIdea';

  export default {
    name: 'Profile',
    components: {
      ProfileIdea
    }
  }
</script>
<style lang="scss"></style>
