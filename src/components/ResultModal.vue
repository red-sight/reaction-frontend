<template>
  <q-dialog v-model="showModel" :persistent="true"
    ><q-card>
      <!-- <q-card-section class="text-h6 bg-primary text-white text-uppercase">
        Ваш результат
      </q-card-section>
 -->
      <q-card-section class="q-pa-none">
        <score-image :score="score" :comment="comment" v-if="showModel" />
      </q-card-section>

      <q-card-section
        class="q-pt-xs text-italic text-primary"
        style="font-size: 21px"
      >
        {{ comment.desc }}
      </q-card-section>

      <q-card-section>
        Сохраните и поделитесь этой картинкой со своими друзьями в соц.сетях или
        переписке! Бросьте им вызов)
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions> </q-card
  ></q-dialog>
</template>

<script>
import comment from "assets/js/scoreComments";
// import CloseIcon from 'icons/Close.vue'

export default {
  components: {
    // CloseIcon
    ScoreImage: () => import("components/ScoreImageComponent.vue")
  },

  props: {
    show: {
      type: Boolean,
      default: false
    },

    score: {
      type: Number,
      default: 0
    }
  },

  computed: {
    showModel: {
      get() {
        return this.show;
      },
      set(val) {
        this.$emit("update:show", false);
      }
    },
    comment() {
      return comment(this.score);
    },
    user() {
      return this.$store.state.user.profile;
    }
  },

  methods: {
    close() {
      this.showModel = false;
    }
  }
};
</script>

<style lang="sass" scoped>
.modal-backdrop
  position: absolute
  width: 100vw
  height: 100vh
  display: flex
  align-items: center
  justify-content: center

.modal
  width: 300px

.modal__title
  font-weight: bold
  text-transform: uppercase
  text-align: left
  background-color: $primary
  color: white
  padding: 15px
  border-top-left-radius: 5px
  border-top-right-radius: 5px

.modal__close-icon
  float: right
  cursor: pointer
  padding: 0px 2px
  border-radius: 100%
  *
    color: white
  // &:hover
    // background-color: $darker


.modal__content
  padding: 10px
  background-color: white
  div
    text-align: left

.modal__actions
  min-height: 40px
  background-color: white
  padding: 7px 10px
  border-bottom-left-radius: 5px
  border-bottom-right-radius: 5px
  text-align: right
</style>
