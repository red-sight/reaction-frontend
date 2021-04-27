<template>
  <div>
    <img :src="src" alt="" v-if="src" />
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

  async mounted() {
    const image = await loadImage(require("assets/img/batac-score.png"));
    const canvas = createCanvas(800, 540);
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
    ctx.fillText("25", 375, 205);

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
    ctx.fillText("Могло быть и хуже", 60, 440);

    // Emoji
    ctx.font = "150px Arial";
    ctx.rotate((-20 * Math.PI) / 180);
    ctx.fillText("😜", 400, 680);

    this.src = canvas.toDataURL();
  }
};
</script>
