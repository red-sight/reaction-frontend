<template>
  <div>
    <img :src="src" alt="" v-if="src" class="score-image" />
  </div>
</template>

<script>
import { createCanvas, loadImage } from "canvas";

export default {
  data() {
    return {
      src: null
    };
  },

  props: {
    score: {
      type: Number,
      default: 0
    },
    comment: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    scoreRendered() {
      return this.score < 10 ? `0${this.score}` : this.score;
    }
  },

  async mounted() {
    const image = await loadImage(require("assets/img/batac-score.png"));
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);

    // Очки (дисплей)
    ctx.font = "100px Segment7";
    ctx.setTransform(1, 0.11, 0, 1, 0, 0);
    ctx.shadowBlur = 20;
    ctx.fillStyle = "#200000";
    ctx.fillText("00", 375, 205);
    ctx.shadowColor = "#ff774d";
    ctx.fillStyle = "red";
    ctx.fillText(this.scoreRendered, 375, 205);

    // Ваш результат:
    ctx.font = "25px Sans";
    ctx.fillText("Ваш результат:", 320, 90);

    // Коммент
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.shadowBlur = 0;
    ctx.fillStyle = "black";
    ctx.fillRect(20, 380, 760, 100);
    ctx.font = "40px 'PT Astra Sans'";
    ctx.fillStyle = "white";
    ctx.fillText(this.comment.message, 60, 440);

    // Emoji
    ctx.font = "150px Arial";
    ctx.rotate((-20 * Math.PI) / 180);
    ctx.fillText(this.comment.emoji, 400, 680);

    // Сайт
    ctx.fillStyle = "#214894";
    ctx.resetTransform();
    ctx.fillRect(0, 540, 800, 600);
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(window.location.origin, 60, 580);
    this.src = canvas.toDataURL();
  }
};
</script>

<style lang="sass" scoped>
.score-image
  width: 100%
</style>
