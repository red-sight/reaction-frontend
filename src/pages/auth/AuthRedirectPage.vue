<template>
  <div class="flex jusitify-center items-center">
    <div>
      <div class="text-h4 text-white text-weight-bold">
        Авторизация...
      </div>
      <div class="text-center q-py-lg">
        <q-spinner :thickness="5" color="white" size="3em" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    const url = `${process.env.API_URL}/auth/${this.$route.params.provider}/callback?access_token=${this.$route.query.access_token}`;
    console.log(url);
    await this.$axios.get(url);
  }
};
</script>
