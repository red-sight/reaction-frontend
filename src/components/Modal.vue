<template>
  <div v-show="show" class="modal-backdrop">
    <div class="modal">
      <div class="modal__title">
        <slot name="title">Информация</slot>
        <div class="modal__close-icon" @click="close"></div>
      </div>
      <div class="modal__content">
        <slot name="content"></slot>
      </div>
      <div class="modal__actions">
        <slot name="actions">ok</slot>
      </div>
    </div>
  </div>
</template>

<script>
// import CloseIcon from 'icons/Close.vue'

export default {
  components: {
    // CloseIcon
  },

  props: {
    show: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    close() {
      this.$emit("update:show", false);
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
  &:hover
    background-color: $darker


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
