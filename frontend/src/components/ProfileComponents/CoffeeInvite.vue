<template>
  <div class="comment" style="position: relative; border: 1px solid #D7DEE9; border-radius: 8px; padding: 15px 20px; align-items: center">
    <a-badge v-if="invite.isUnread" style="position: absolute; top: -8px; left: -8px;">
      <div style="display: flex; align-items: center; justify-content: center; background: #f5222d; font-size: 15px; width: 19px; height: 19px; color: white; border-radius: 50%;">
        <a-icon type="exclamation" />
      </div>
    </a-badge>
    <div class="comment__user" style="flex-grow: unset;">
      <a-icon type="user" class="comment__icon" />
    </div>
    <div class="comment__content" style="display: flex; flex-flow: column; align-items: flex-start">
      Привет! Приглашаю обсудить за чашечкой кофе твою новую идею.
      <span style="display: block; font-size: 12px; font-style: italic;">{{this.$moment(invite.date).format('MMMM Do YYYY, h:mm:ss a')}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "CoffeeInvite",
  props: {
    invite: Object
  }
};
</script>