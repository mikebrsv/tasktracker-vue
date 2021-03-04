<template lang="pug">
div(
  @dblclick="onToggle(task.id)",
  :class="[task.reminder ? 'reminder' : '', 'task']"
)
  h3 {{ task.text }}
    i.fas.fa-times(@click="onDelete(task.id)")
  p {{ task.day }}
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    onDelete(id) {
      this.$emit("delete-task", id);
    },
    onToggle(id) {
      this.$emit("toggle-reminder", id);
    },
  },
};
</script>

<style lang="sass" scoped>
.task
  background: #f4f4f4
  margin: 5px 0
  padding: 10px 20px
  cursor: pointer
  border-left: 5px solid #f4f4f4

  &.reminder
    border-color: green

  & h3
    display: flex
    align-items: center
    justify-content: space-between

.fas
  color: red
</style>