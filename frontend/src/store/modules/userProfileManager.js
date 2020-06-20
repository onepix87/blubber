export default {
  state: {
    archiveIdeas: null,
    progressIdes: null,
    allInterests: null,
    userInterests: null,
    userTeamsPage: null,
  },
  getters: {
    getArchiveIdeas(state) {
      return state.archiveIdeas;
    },
    getProgressIdes(state) {
      return state.progressIdes;
    },
    getAllInterests(state) {
      return state.allInterests;
    },
    getUserInterests(state) {
      return state.userInterests;
    },
    getUserTeamsPage(state) {
      return state.userTeamsPage;
    }
  },
  mutations: {
    setArchiveIdeas(state, value) {
      state.archiveIdeas = value;
    },
    setProgressIdes(state, value) {
      state.progressIdes = value;
    },
    setAllInterests(state, value) {
      state.allInterests = value;
    },
    setUserInterests(state, value) {
      state.userInterests = value;
    },
    setUserTeamsPage(state, value) {
      state.userTeamsPage = value;
    }
  },
  actions: {
    updateArchiveIdeas({ commit }) {
      // fetch
      // const userId = getters.getUser.id;

      // console.log("userId", userId);
      const data = [
        {
          id: 6,
          name: "Моя первая идея",
          images: "/media/images/hall2_ndsjvoz.jpg",
          description: "Создать собственную линейку курсов для повышения осведомленности о ...",
          categories: "6",
          likes_count: 0,
          dislikes_count: 0,
          threshold_of_success: 34,
          is_passed: false,
          status: -1,
          author: 1
        },
        {
          id: 7,
          name: "Идея номер 2",
          images: "/media/images/multfilm_lyagushka_32117.jpg",
          description: "Уверен, среди вас найдутся многие, кто хотел бы ...",
          categories: "2",
          likes_count: 0,
          dislikes_count: 0,
          threshold_of_success: 60,
          is_passed: false,
          status: -1,
          author: 1
        }
      ];

      commit("setArchiveIdeas", data);
    },
    updateProgressIdes({ commit }) {
      // fetch
      // const userId = getters.getUser.id;

      // console.log("userId", userId);

      const data = [
        {
          id: 6,
          name: "Great Idea",
          images: "/media/images/hall2_ndsjvoz.jpg",
          description: "Good and Long description for a card that will win in the run",
          categories: "6",
          likes_count: 10,
          dislikes_count: 30,
          threshold_of_success: 34,
          is_passed: false,
          status: -1,
          author: 1,
          dayOfCreation: 'Sat Jun 15 2020 12:39:37 GMT+0300 (Москва, стандартное время)',
          dayOfEnding: 'Sat Jun 29 2020 12:39:37 GMT+0300 (Москва, стандартное время)',
          achievements: [
            {
              id: 0,
              title: "Создание",
              description: "Вы разместили свою идею на портале!"
            },
            {
              id: 1,
              title: "Первый лайк",
              description: "Ого, первый заинтересовавшийся! Дальше - больше!"
            },
            {
              id: 2,
              title: "Первый комментарий",
              description: "У кого-то появились мысли по поводу вашей идеи, читайте скорее!"
            },
            {
              id: 3,
              title: "10 лайков",
              description: "Разгоняемся!"
            }
          ]
        }
      ];

      commit("setProgressIdes", data);
    },
    updateAllInterests({ commit }) {
      const data = [
        {
          id: 1,
          title: 'Юриспруденция',
          discription: 'Тут будет интересно всем!'
        },
        {
          id: 2,
          title: 'Big Data',
          discription: 'Анализ данных'
        },
        {
          id: 3,
          title: 'IT',
          discription: 'Программирование'
        },
        {
          id: 4,
          title: 'Финансы',
          discription: 'Новые идеи для главной отрасли!'
        },
        {
          id: 5,
          title: 'Операционная деятельность',
          discription: 'Важно'
        },
        {
          id: 6,
          title: 'Общение с клиентами',
          discription: 'Присоединяйся к нам!'
        },
        {
          id: 11,
          title: 'Закупки',
          discription: 'Тут будет интересно всем!'
        },
        {
          id: 21,
          title: 'Администрация',
          discription: 'Анализ данных'
        },
        {
          id: 31,
          title: 'Стажеры',
          discription: 'Программирование'
        },
        {
          id: 14,
          title: 'Менеджмент',
          discription: 'Новые идеи для главной отрасли!'
        },
        {
          id: 51,
          title: 'Нетоварные закупки',
          discription: 'Важно'
        },
        {
          id: 16,
          title: 'Коммерция',
          discription: 'Присоединяйся к нам!'
        },
      ];

      commit("setAllInterests", data);
    },
    updateUserInterests({ commit }) {
      const data = [1, 3, 6];

      commit("setUserInterests", data);
    },
    saveNewUserInterest({ getters }) {
      console.log('save new user interests', getters.getUserInterests)
    },
    updateUserTeamsPage({ commit }) {
      const data = [
        {
          id: 7,
          name: "Идеистая идея",
          images: "/media/images/multfilm_lyagushka_32117.jpg",
          description: "Самая топовая идея, которую нужно выбрать",
          categories: "2",
          likes_count: 0,
          dislikes_count: 0,
          threshold_of_success: 60,
          is_passed: false,
          status: -1,
          author: 1,
          dateOfMeeting: 'Sat Jun 19 2020 12:39:37 GMT+0300 (Москва, стандартное время)',
          deadline: 'Sat Aug 17 2020 12:39:37 GMT+0300 (Москва, стандартное время)',
          team: ['212', '3123sa', '1242qa', '12323q', '23qeas', '231qqaeq2', '123aweae']
        },
        {
          id: 27,
          name: "Идея для программистов",
          images: "/media/images/multfilm_lyagushka_32117.jpg",
          description: "Хорошая идея, требуются дороботки, со списком можно ознакомится на встрече",
          categories: "2",
          likes_count: 0,
          dislikes_count: 0,
          threshold_of_success: 60,
          is_passed: false,
          status: -1,
          author: 1,
          dateOfMeeting: 'Sat Jun 19 2020 12:39:37 GMT+0300 (Москва, стандартное время)',
          deadline: 'Sat Aug 17 2020 12:39:37 GMT+0300 (Москва, стандартное время)',
          team: ['212', '3123sa', '1242qa']
        }
      ];

      commit("setUserTeamsPage", data);
    }
  }
};
