<template>
  <q-dialog v-model="showModel" :persistent="true"
    ><q-card>
      <q-card-section class="text-h6 bg-primary text-white text-uppercase">
        Ваш результат
      </q-card-section>

      <q-card-section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
        perferendis totam, ea at omnis vel numquam exercitationem aut, natus
        minima, porro labore.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions> </q-card
  ></q-dialog>
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

  computed: {
    showModel: {
      get() {
        return this.show;
      },
      set(val) {
        this.$emit("update:show", false);
      }
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
