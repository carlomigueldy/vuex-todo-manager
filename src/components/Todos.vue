<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>

    <div class="todos">
      <div 
        @dblclick="onDblClick(todo)"
        :key="index"
        v-for="(todo, index) in getTodos" 
        class="todo"
        :class="{ 'is-complete': todo.completed }">
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
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      }

      this.updateTodo(updTodo)
    },
    
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
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

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background-color: #35495e;
  color: #fff;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>