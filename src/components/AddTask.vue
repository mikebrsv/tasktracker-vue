<template lang="pug">
form.add-form(@submit="onSubmit")
  .form-control
    label Task
    input(v-model="text", type="text", name="text", placeholder="Add Task")
  .form-control
    label Day & Time
    input(v-model="day", type="text", name="day", placeholder="Add Day & Time")
  .form-control.form-control-check
    label Set Reminder
    input(v-model="reminder", type="checkbox", name="reminder")
  input.btn.btn-block.btn.btn-block(type="submit", value="Save Task")
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.text) {
        alert("Please add a task");
        return;
      }

      const newTask = {
        // id: Math.floor(Math.random() * 100000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      this.$emit("add-task", newTask);

      (this.text = ""), (this.day = ""), (this.reminder = false);
    },
  },
};
</script>

<style lang="sass" scoped>
.add-form
  margin-bottom: 40px

.form-control
  margin: 20px 0

  & label
    display: block

  & input
    width: 100%
    height: 40px
    padding: 3px 7px
    font-size: 17px

  &-check
    display: flex
    align-items: center
    justify-content: space-between

  &-check label
    flex: 1

  &-check input
    flex: 2
    height: 20px
</style>