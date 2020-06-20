<template>
  <div class="main-container">
    <div class="form-wrapper">
      <a-form :form="form" @submit="this.sendPost">
        <a-form-item>
          <a-input
            v-decorator="['name', { rules: [{ required: true, message: 'Пожалуйста, введите название' }] }]"
            placeholder="Название"
          />
        </a-form-item>

        <a-form-item>
          <a-textarea
            v-decorator="['description', { rules: [{ required: true, message: 'Пожалуйста, введите описание' }] }]"
            placeholder="Описание идеи"
            :auto-size="{ minRows: 3, maxRows: 5 }"
          />
        </a-form-item>

        <a-form-item>
          <a-input
            v-decorator="[
              'threshold_of_success',
              { rules: [{ required: true, message: 'Пожалуйста, введите порог успешности' }] }
            ]"
            placeholder="Порог успешности"
          />
        </a-form-item>

        <a-form-item>
          <a-select
            v-decorator="[
              'categories',
              {
                rules: [{ required: true, message: 'Пожалуйста, выберите категории вашей идеи' }],
                initialValue: 'Выберите отдел'
              }
            ]"
            style="width: 100%"
          >
            <a-select-option v-for="department in departmentList" :key="department.id" :value="department.id">
              {{ department.name }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item>
          <a-upload name="images" :before-upload="beforeUpload" :multiple="true">
            <a-button> <a-icon type="upload" /> Click to Upload </a-button>
          </a-upload>
        </a-form-item>

        <a-form-item>
          <a-button htmlType="submit" style="width: 100%" type="primary"> Создать идею </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
// import { postDataWithoutResponse, recordsUrl } from "../utils/fetch-utils";

//TODO: Использовать VUEX
export default {
  name: "AddIdea",
  computed: {
    departmentList() {
      return [
        {
          name: "Отдел 1",
          id: 1
        },
        {
          name: "Отдел 2",
          id: 2
        },
        {
          name: "Отдел 3",
          id: 3
        },
        {
          name: "Отдел 4",
          id: 4
        },
        {
          name: "Отдел 5",
          id: 5
        },
        {
          name: "Отдел 6",
          id: 6
        },
        {
          name: "Отдел 7",
          id: 7
        }
      ];
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "addIdea" });
  },
  methods: {
    sendPost(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          const formData = new FormData();
          Object.entries(values).forEach(entry => {
            formData.append(entry[0], entry[1]);
          });
          this.imagesList.forEach(image => formData.append("images[]", image));
          formData.append("author", this.$store.getters.getUser.id);

          // postDataWithoutResponse(recordsUrl, formData);
          this.$store.dispatch("saveIdea", formData).then(() => {
            this.$router.push({ name: "Home" });
          });
          this.imagesList = [];
        }
      });
    },
    beforeUpload(file) {
      this.imagesList = [...this.imagesList, file];
      return false;
    }
  },
  data() {
    return {
      imagesList: []
    };
  }
};
</script>

<style lang="scss">
.main-container {
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  background-color: #f3f5f7;
  align-items: center;
}
.form-wrapper {
  margin-top: 30px;
  width: 300px;
}
.add-idea-form {
  max-width: 580px;
  min-width: 300px;
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  margin-top: 32px;
}

.add-idea-form__item {
  margin-bottom: 16px;
}
</style>
