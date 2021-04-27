<template>
  <div>
    <div class="text-body1 q-py-sm">
      Авторизируйтесь любым из указанных способов, чтобы сохранить свои
      результаты:
    </div>
    <q-btn
      label="Facebook"
      flat
      style="bg-primary text-white"
      type="a"
      :href="link"
    />
  </div>
</template>

<script>
export default {
  computed: {
    link() {
      return `${process.env.API_URL}/connect/facebook`;
    }
  }
};
</script>
