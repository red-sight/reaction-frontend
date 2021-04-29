<template>
  <div class="landing-layout-page">
    <div class="row q-col-gutter-md q-pt-sm-md q-pt-xs-sm q-px-xs-sm">
      <div class="col-12">
        <q-card class="q-px-sm-lg q-px-xs-none q-py-xs-sm bg-primary">
          <q-card-section
            ><img src="~src/assets/img/logo_white.svg" alt=""
          /></q-card-section>
        </q-card>
      </div>

      <!-- Enter -->
      <div
        :class="{ 'col-6': !loginExpanded, 'col-12': loginExpanded }"
        v-if="!user"
      >
        <q-expansion-item
          expand-separator
          class="bg-green-8 text-white clickable v-ripple"
          style="border-radius: 3px"
          @input="onLoginExpanded"
          expand-icon-class="text-white"
        >
          <template v-slot:header>
            <q-item-section avatar>
              <q-icon name="account_circle" color="white" size="48px" />
            </q-item-section>

            <q-item-section
              class="text-weight-bold"
              style="height:64px"
              :class="{
                'text-h4': $q.screen.gt.xs,
                'text-h5': $q.screen.lt.sm
              }"
            >
              Войти
            </q-item-section>
          </template>
          <q-card class="bg-green-8 text-white">
            <q-card-section>
              <auth />
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>

      <!-- Logged in -->
      <div class="col-6" v-if="user">
        <q-expansion-item
          expand-separator
          class="bg-green-8 text-white clickable v-ripple"
          style="border-radius: 3px"
          @input="onLoginExpanded"
          expand-icon-class="text-white"
        >
          <template v-slot:header>
            <q-item-section avatar>
              <q-icon name="account_circle" color="white" size="48px" />
            </q-item-section>

            <q-item-section style="height:64px">
              <span class="text-white text-h6">{{ user.username }}</span>
              <span class="text-white text-caption">
                Профиль {{ user.provider }}
              </span>
            </q-item-section>
          </template>
          <q-card class="bg-green-8 text-white">
            <q-card-actions class="flex justify-end">
              <q-btn flat label="Выйти" @click="onLogout" />
            </q-card-actions>
          </q-card>
        </q-expansion-item>
      </div>

      <!-- Play -->
      <div class="col-6">
        <q-card
          class="bg-pink text-white q-py-sm cursor-pointer"
          @click="
            $q.fullscreen.request();
            $router.push('/game');
          "
        >
          <q-item>
            <q-item-section avatar
              ><q-icon name="sports_handball" size="48px"
            /></q-item-section>
            <q-item-section
              class="text-weight-bold"
              :class="{
                'text-h4': $q.screen.gt.xs,
                'text-h5': $q.screen.lt.sm
              }"
              >Играть</q-item-section
            >
          </q-item>
        </q-card>
      </div>

      <!-- Ваш рекорд -->
      <div class="col-sm-4 col-xs-6" v-if="personal">
        <q-card class="own-best-score text-white">
          <q-card-section class="font-brand text-h6 text-weight-bold">
            Ваш рекорд:
          </q-card-section>
          <q-card-section class="font-brand text-h2 q-pt-none text-weight-bold">
            {{ personal.best.value }}
          </q-card-section>
          <q-card-section class="font-brand q-pt-none vertical-bottom">
            {{ formatDate(personal.best.createdAt) }}
          </q-card-section>
        </q-card>
      </div>

      <!-- Ваш последний результат -->
      <div class="col-sm-4 col-xs-6" v-if="personal">
        <q-card class="own-last-score text-white">
          <q-card-section class="font-brand text-h6 text-weight-bold">
            Последний результат:
          </q-card-section>
          <q-card-section class="font-brand text-h2 q-pt-none text-weight-bold">
            19
          </q-card-section>
          <q-card-section class="font-brand q-pt-none vertical-bottom">
            27.04.2021
          </q-card-section>
        </q-card>
      </div>

      <!-- Игровых туров -->
      <div class="col-sm-4 col-xs-6" v-if="personal">
        <q-card class="own-play-count text-white">
          <q-card-section class="font-brand text-h6 text-weight-bold">
            Игровых туров:
          </q-card-section>
          <q-card-section class="font-brand text-h2 q-pt-none text-weight-bold">
            193
          </q-card-section>
          <q-card-section class="font-brand q-pt-none vertical-bottom">
            Ограничений нет :)
          </q-card-section>
        </q-card>
      </div>

      <!-- About -->
      <div class="col-12">
        <q-card>
          <q-card-section :horizontal="$q.screen.gt.xs">
            <q-img class="col-5" src="~src/assets/img/about-dsfl.jpg" />
            <q-card-section>
              <div class="text-h5 text-weight-bold text-primary">
                О проекте
              </div>
              <div class="text-body1">
                С тренажером "Реакция" мы впервые познакомились на тренингах
                "Академия Безопасного Вождения Ford" ("DSFL"). Эта интерактивная
                игра предназначена для оценки скорости реакции игрока - сколько
                раз он успеет увидеть активный сенсор и успеет на него нажать за
                ограниченный период времени(21 секунда в нашем случае). Ввиду
                своей простоты, игра завоевала сердца многих, и послужила
                созданию данного проекта.
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { date } from "quasar";

export default {
  name: "Main",

  components: {
    Auth: () => import("components/AuthComponent.vue")
  },

  data() {
    return {
      loginExpanded: false
    };
  },

  computed: {
    user() {
      return this.$store.state.user.profile;
    },
    personal() {
      return this.$store.state.user.results;
    }
  },

  methods: {
    onLoginExpanded(val) {
      this.loginExpanded = val;
    },

    async onLogout() {
      this.$q.cookies.remove("reaction_jwt", { path: "/" });
      this.$store.commit("user/setProfile", null);
      this.loginExpanded = false;
    },

    onPlayClick() {
      this.$router.push("/game");
    },

    formatDate(val) {
      return date.formatDate(val, "YYYY-MM-DD HH:mm");
    }
  },

  mounted() {
    this.$store.dispatch("user/getPersonalResults");
  }
};
</script>

<style lang="sass" scoped>
.landing-layout-page
  width: 100%
  max-width: 780px

.own-best-score
  background-image: url('~src/assets/img/space-bg.jpeg')
  background-size: cover

.own-last-score
  background-image: url('https://eskipaper.com/images/sky-wallpapers-4.jpg')
  background-size: cover

.own-play-count
  background-image: url('https://wallpapershome.com/images/pages/pic_v/20703.jpg')
  background-size: cover
</style>
