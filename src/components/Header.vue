<template lang="pug">
header
  h1 {{ title }}
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style lang="sass" scoped>
header
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 20px
</style>