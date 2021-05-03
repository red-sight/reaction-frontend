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
    const res = await this.$axios.get(url);
    if (res.data.jwt && res.data.user) {
      this.$store.commit("user/setProfile", res.data.user);
      const isProd = process.env.NODE_ENV === "production";
      this.$q.cookies.set("reaction_jwt", res.data.jwt, {
        expires: 10,
        httpOnly: isProd,
        sameSite: isProd,
        secure: isProd,
        path: "/"
      });
      const score = this.$q.localStorage.getItem("last_reaction_score");
      if (score) {
        await this.$store.dispatch("user/reportScore", score);
        this.$q.localStorage.remove("last_reaction_score");
      }
      this.$router.push("/");
    }
  }
};
</script>
