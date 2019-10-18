<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div :key="index"
        v-for="(todo, index) in getTodos" 
        class="todo">
        {{ todo.title }}
        <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Todos',
  computed: mapGetters(['getTodos']),
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo']),
  },
  created() {
    this.fetchTodos()
  }
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem; 
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.delete {
  position: absolute;
  bottom: 1px;
  right: 5px;
  cursor: pointer;
}
</style>