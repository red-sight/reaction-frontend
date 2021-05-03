<template>
  <div>
    <div class="text-body1">
      Авторизируйтесь любым из указанных способов, чтобы сохранить свои
      результаты.
    </div>
    <div class="text-caption q-pb-sm">
      Авторизируясь, вы выражаете свое согласие с
      <a href="#" class="text-white" @click="showSiteRules = true"
        >правилами сайта</a
      >, а также c
      <a href="#" class="text-white" @click="showPersonalData = true"
        >политикой хранения личных данных</a
      >.
    </div>
    <q-btn
      v-for="provider in providers"
      :key="provider.label"
      :label="provider.label"
      flat
      style="bg-primary text-white"
      type="a"
      :href="provider.link"
    />
    <site-rules :show.sync="showSiteRules" />
    <personal-data :show.sync="showPersonalData" />
  </div>
</template>

<script>
export default {
  name: "AuthComponent",

  components: {
    SiteRules: () =>
      import("components/terms_conditions/RulesSiteComponent.vue"),
    PersonalData: () =>
      import("components/terms_conditions/PersonalDataComponent.vue")
  },

  data() {
    return {
      showSiteRules: false,
      showPersonalData: false
    };
  },

  computed: {
    providers() {
      return [
        {
          label: "Facebook",
          link: "https://7e4909c7aee8.ngrok.io/connect/facebook"
        },
        {
          label: "Google",
          link: `${process.env.API_URL}/connect/google`
        }
      ];
    }
  }
};
</script>
