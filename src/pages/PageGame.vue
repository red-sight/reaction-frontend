<template>
  <div class="fullscreen-container" ref="fullscreenContainer">
    <div
      class="game-container"
      :class="{ 'game-container_blurred': showModal }"
    >
      <batak
        class="batak"
        :activeSensor="activeSensor"
        :status="status"
        :counter="time"
        :score="score"
        @start="startGame"
        @success="increaseScore"
      />
    </div>
    <div class="game-toggles">
      <q-btn-group rounded>
        <q-btn
          rounded
          color="primary"
          icon="fullscreen"
          v-if="!$q.fullscreen.isActive"
          @click="$q.fullscreen.request()"
        >
          <q-tooltip>На весь экран</q-tooltip>
        </q-btn>
        <q-btn
          rounded
          color="primary"
          icon="close_fullscreen"
          v-if="$q.fullscreen.isActive"
          @click="$q.fullscreen.exit()"
          ><q-tooltip>Обычный экран</q-tooltip>
        </q-btn>
        <q-btn rounded color="primary" icon="close" @click="onExitGameClick"
          ><q-tooltip>Закрыть игру</q-tooltip>
        </q-btn>
      </q-btn-group>
    </div>
    <result-modal :show.sync="showModal" :score="score" />
  </div>
</template>

<script>
import play from "audio-play";
import load from "audio-loader";
const coinSound = require("assets/sounds/341695__projectsu012__coins-1.wav");
const time = 21;

export default {
  data() {
    return {
      activeSensor: null,
      demo: setInterval(this.setActiveSensor, 1000),
      score: 0,
      status: false,
      time,
      timeCounter: null,
      showModal: false,
      fullscreenEnabled: null,
      increaseScoreSound: null
    };
  },

  components: {
    batak: () => import("../components/Batak.vue"),
    ResultModal: () => import("../components/ResultModal.vue")
    // FullscreenExitIcon: () => import("assets/icons/FullscreenExit.vue"),
    // FullscreenIcon: () => import("assets/icons/Fullscreen.vue"),
    // CloseIcon: () => import("assets/icons/Close.vue")
  },

  computed: {
    scoreImg() {
      return `img/scores/${this.score}.png`;
    },

    shareURL() {
      return {
        VK: `https://vk.com/share.php?url=${window.location.origin}&title=Игра&image=${window.location.origin}/img/scores/0.png`
      };
    },

    user() {
      return this.$store.state.user.profile;
    }
  },

  async mounted() {
    this.$refs.fullscreenContainer.addEventListener("fullscreenchange", () => {
      this.fullscreenEnabled = !!document.fullscreenElement;
    });
  },

  async created() {
    this.increaseScoreSound = await load(coinSound);
  },

  methods: {
    setActiveSensor() {
      this.activeSensor = Math.floor(10 * Math.random());
      // console.log(this.activeSensor)
    },

    startGame() {
      if (!this.status) {
        console.log("start");
        this.status = true;
        this.score = 0;
        clearInterval(this.demo);
        this.timeCounter = setInterval(() => {
          if (this.time > 0) {
            this.time--;
          } else {
            this.endGame();
          }
        }, 1000);
        setTimeout(this.endGame, time * 1000);
        this.setActiveSensor();
      }
    },

    async endGame() {
      clearInterval(this.timeCounter);
      console.log("Your score: " + this.score);

      if (this.user) await this.$store.dispatch("user/reportScore", this.score);
      else this.$q.localStorage.set("last_reaction_score", this.score);

      this.status = false;
      this.time = time;
      this.demo = setInterval(this.setActiveSensor, 1000);
      this.showModal = true;
    },

    increaseScore() {
      if (this.status === true) {
        play(this.increaseScoreSound);
        this.score++;
        this.setActiveSensor();
      }
    },

    enableFullscreen() {
      this.$q.fullscreen.request();
      /* this.$refs.fullscreenContainer.requestFullscreen().catch(err => {
        if (err) {
          console.log(err);
        }
      }); */
    },

    disableFullscreen() {
      /* if (document.exitFullscreen) {
        document.exitFullscreen();
      } */
    },

    onExitGameClick() {
      if (this.status)
        this.$q
          .dialog({
            title: "Выход",
            class: "exit-game-dialog",
            message:
              "Вы уверены что хотите закрыть игру и вернуться в главное меню?",
            cancel: {
              label: "Отмена",
              flat: true
            },
            ok: {
              label: "Выйти",
              color: "negative",
              flat: true
            },
            persistent: true
          })
          .onOk(() => {
            this.$q.fullscreen.exit();
            this.exitGame();
          })
          .onOk(() => {
            // console.log('>>>> second OK catcher')
          })
          .onCancel(() => {
            // console.log('>>>> Cancel')
          })
          .onDismiss(() => {
            // console.log('I am triggered on both OK and Cancel')
          });
      else this.exitGame();
    },

    exitGame() {
      this.$q.fullscreen.exit();
      this.$router.push("/");
    }
  }
};
</script>

<style lang="sass" scoped>

.fullscreen-container
  background-color: black
  height: 100vh
  width: 100vw
  display: flex
  align-items: center

.game-toggles
  position: fixed
  right: 0;
  top: 0;
  padding: 10px

.actions
  background-color: rgba(0, 0, 0, 0.7)
  position: absolute
  top: 0
  right: 0
  display: flex
  font-size: 28px
  .actions__action
    color: white
    width: 30px
    height: 30px
    cursor: pointer
    &:hover
      color: $text-color
      background-color: rgba(256, 256, 256, 0.8)

.game-container
  width: 100vw
  background-image: url('~src/assets/img/bg-1.jpg')
  background-size: cover

.game-container_blurred
  filter: blur(2px) brightness(0.5)

.score-image
  max-width: 100%

@media screen and (orientation: portrait)
  .fullscreen-container
    justify-content: center

  .game-container
    transform: rotate(90deg)
    position: absolute
    width: 100vh
    max-height: 100vw
    display: flex
    justify-content: center

  .batak
    max-width: 100vh
</style>

<style lang="sass">
@media screen and (orientation: portrait)

  .exit-game-dialog
    transform: rotate(90deg)
</style>
