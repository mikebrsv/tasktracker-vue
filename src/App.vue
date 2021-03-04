<template lang="pug">
.container
  Header(title="Task Tracker")
  router-view
  Footer
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap")
*
  box-sizing: border-box
  margin: 0
  padding: 0

body
  font-family: "Poppins", sans-serif

.container
  max-width: 500px
  margin: 30px auto
  overflow: auto
  min-height: 300px
  border: 1px solid steelblue
  padding: 30px
  border-radius: 5px

.btn
  display: inline-block
  background: #000
  color: #fff
  border: none
  padding: 10px 20px
  border-radius: 5px
  cursor: pointer
  text-decoration: none
  font-size: 15px
  font-family: inherit

  &:focus
    outline: none

  &:active
    transform: scale(0.98)

  &-block
    display: block
    width: 100%
</style>
