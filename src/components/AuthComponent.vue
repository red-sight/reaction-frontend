<template>
  <div>
    <div class="text-body1 q-pb-md">
      Авторизируйтесь любым из указанных способов, чтобы сохранить свои
      результаты:
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
  </div>
</template>

<script>
export default {
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
