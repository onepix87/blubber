<template>
  <a-modal
    @cancel="handleCancel"
    title="Авторизация"
    :visible="visible"
    :footer="null"
  >
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item
        :validate-status="userNameError() ? 'error' : ''"
        :help="userNameError() || ''"
      >
        <a-input
          v-decorator="[
            'login',
            {
              rules: [{ required: true, message: 'Введите email!' }]
            }
          ]"
          placeholder="Username"
        >
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>

      <a-form-item
        :validate-status="passwordError() ? 'error' : ''"
        :help="passwordError() || ''"
      >
        <a-input
          v-decorator="[
            'password',
            {
              rules: [{ required: true, message: 'Введите пароль!' }]
            }
          ]"
          type="password"
          placeholder="Password"
        >
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          :loading="loading"
          :disabled="hasErrors(form.getFieldsError())"
        >
          Войти
        </a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  name: "LoginForm",
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "horizontal_login" })
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  computed: {
    loading() {
      return this.$store.getters.isLoading;
    },
    visible() {
      return this.$store.getters.isOpenLoginPopup;
    }
  },
  methods: {
    go(routeName) {
      this.$router.push({ name: routeName });
      this.$store.commit("setOpenLoginPopup", false);
    },
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
    },
    handleCancel(e) {
      console.log("Clicked cancel button", e);
      this.$store.commit("setOpenLoginPopup", false);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.commit("setLoading", true);
          this.$store.dispatch("signUp", values).then(result => {
            console.log("result", result);
            this.$store.commit("setLoading", false);
            this.$store.commit("setOpenPopup", false);
          });
        }
      });
    }
  }
};
</script>
<style lang="scss"></style>
