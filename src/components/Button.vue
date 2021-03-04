<template lang="pug">
button.btn.btn-block(@click="onClick()", :style="{ background: color }") {{ text }}
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit("button-click");
    },
  },
};
</script>

<style lang="sass" scoped>
.btn
  margin-bottom: 20px
</style>