<template>
<div>
  <v-app id="app">
     <h1 style="text-align:center">Todo App</h1>
    <v-container class="todo-container gray Lighten-3">
      <Input @myEvent="addTodo"></Input>
     <v-list class="todo_list">
       <Todo v-for="(todo, index) in list" 
       @Event= "deleteTodo"
       :title="todo.message" 
       :id="todo.id" 
       :done="todo.done" 
       :key="index"></Todo>

      </v-list> 
    </v-container>
  </v-app>
  </div>
</template>

<script>
import Input from '@/components/Input'
import Todo from '@/components/Todo'
export default {
  name: 'App',
  components: {
    Todo,
    Input
  },
  data: () => ({
    list: []
  }),
  methods: {
    addTodo (message) {
        const todoObj = {
        id: Math.random(),
        message,
        done: false
      }
      this.list.push(todoObj)
    },
    deleteTodo (id) {
      const todoIndex = this.list.findIndex(todo => todo.id == id) 
      this.list.splice(todoIndex, 1)
      
    }
  }
}
</script>

<style lang="scss">
.todo-container {
  max-width: 750px;
  margin-top: 50px;
  font-family: Arial, sans-serif;
}
.todo_list {
  padding: 0;
}
</style>
