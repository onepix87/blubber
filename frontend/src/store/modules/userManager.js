export default {
  state: {
    userNotifications: null,
  },
  getters: {
    getUserNotifications(state) {
      return state.userNotifications;
    },
  },
  mutations: {
    setUserNotifications(state, value) {
      state.userNotifications = value;
    }
  },
  actions: {
    updateUserNotifications({ commit }) {
      // fetch
      // const userId = getters.getUser.id;

      // console.log("userId", userId);
      const data = [
        {
          id: 1,
          userId: 332,
          author: 'Петр Петров',
          isUnread: true,
          date: 'Sat Jun 20 2020 12:39:37 GMT+0300 (Москва, стандартное время)'
        },
        {
          id: 6,
          userId: 312,
          author: 'Ирина Васильева',
          isUnread: false,
          date: 'Sat Jun 15 2020 12:39:37 GMT+0300 (Москва, стандартное время)'
        }
      ];

      commit("setUserNotifications", data);
    },
    sendUserCoffeeNotification() {
      console.log('sent')
    }
  }
};
