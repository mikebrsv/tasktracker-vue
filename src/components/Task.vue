<template>
  <div @dblclick="onToggle(task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>
      {{ task.text }}
      <i @click="onDelete(task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    onDelete(id) {
      this.$emit('delete-task', id)
    },
    onToggle(id) {
      this.$emit('toggle-reminder', id)
    }
  }
};
</script>

<style scoped>
.task {
  background: #f4f4f4;
  margin: 5px 0;
  padding: 10px 20px;
  cursor: pointer;
  border-left: 5px solid #f4f4f4;
}

.task.reminder {
  border-color: green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.fas {
  color: red;
}
</style>