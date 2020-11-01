<template>
  <div class="fullscreen-container" ref="fullscreenContainer">
    <div
      class="game-container"
      :class="{ 'game-container_blurred': showModal }"
    >
      <batak
        :activeSensor="activeSensor"
        :status="status"
        :counter="time"
        :score="score"
        @start="startGame"
        @success="increaseScore"
      />
    </div>
  </div>
</template>

<script>
import play from 'audio-play'
import load from 'audio-loader'

export default {
  data() {
    return {
      activeSensor: null,
      demo: setInterval(this.setActiveSensor, 1000),
      score: 0,
      status: false,
      time: 21,
      timeCounter: null,
      showModal: false,
      fullscreenEnabled: null
    };
  },

  components: {
    batak: () => import("../components/Batak.vue")
    // modal: () => import("../components/Modal.vue")
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
    }
  },

  mounted() {
    this.enableFullscreen();

    this.$refs.fullscreenContainer.addEventListener("fullscreenchange", () => {
      this.fullscreenEnabled = !!document.fullscreenElement;
    });
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
        setTimeout(this.endGame, 21000);
        this.setActiveSensor();
      }
    },

    endGame() {
      clearInterval(this.timeCounter);
      console.log("Your score: " + this.score);
      this.status = false;
      this.time = 21;
      this.demo = setInterval(this.setActiveSensor, 1000);
      this.showModal = true;
    },

    increaseScore() {
      if (this.status === true) {
        load('sounds/341695__projectsu012__coins-1.wav').then(buffer => play(buffer))
        this.score++;
        this.setActiveSensor();
      }
    },

    enableFullscreen() {
      this.$refs.fullscreenContainer.requestFullscreen().catch(err => {
        if (err) {
          console.log(err);
        }
      });
    },

    disableFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    },

    exitGame() {
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
  background-image: url('../assets/img/bg-1.jpg')
  background-size: cover

.game-container_blurred
  filter: blur(2px) brightness(0.5)

.score-image
  max-width: 100%
</style>
