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
      :icon="icons[provider.icon]"
      rounded
      class="q-mr-sm"
    />
    <site-rules :show.sync="showSiteRules" />
    <personal-data :show.sync="showPersonalData" />
  </div>
</template>

<script>
import {
  mdiFacebook,
  mdiGoogle,
  mdiInstagram,
  mdiVk
} from "@quasar/extras/mdi-v5";

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
    icons() {
      return {
        "facebook-square": mdiFacebook,
        google: mdiGoogle,
        instagram: mdiInstagram,
        vk: mdiVk
      };
    },
    providers() {
      const allProviders = this.$store.state.providers.list;
      let providers = [];
      for (const [key, value] of Object.entries(allProviders)) {
        if (key !== "email" && value.enabled) {
          value.label = key;
          value.link = `${process.env.API_URL}/connect/${key}`;
          providers.push(value);
        }
      }
      return providers;
    }
  }
};
</script>
