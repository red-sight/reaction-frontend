<template>
  <div class="landing-layout-container font-brand">
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
        <div :class="{ 'col-6': !loginExpanded, 'col-12': loginExpanded }">
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

        <!-- Play -->
        <div class="col-6">
          <q-card class="bg-pink text-white q-py-sm clickable v-ripple">
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
                  "Академия Безопасного Вождения Ford" ("DSFL"). Эта
                  интерактивная игра предназначена для оценки скорости реакции
                  игрока - сколько раз он успеет увидеть активный сенсор и
                  успеет на него нажать за ограниченный период времени(21
                  секунда в нашем случае). Ввиду своей простоты, игра завоевала
                  сердца многих, и послужила созданию данного проекта.
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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

  methods: {
    onLoginExpanded(val) {
      this.loginExpanded = val;
    }
  }
};
</script>

<style lang="sass" scoped>
.landing-layout-container
  height: 100vh
  background-image: url('~src/assets/img/bg-1.jpg')
  background-size: cover
  background-position: center
  display: flex
  justify-content: center

.landing-layout-page
  width: 100%
  max-width: 780px
</style>
