<template>
    <div id="current-todos" class="container">
        <h3 v-if="todos.length > 0">Current({{todos.length}})</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="todo in todos">
                {{todo.title}}
            <div class="btn-group">
                <button type="button" @click="edit(todo)" class="btn btn-default btn-sm">
                <span class="glyphicon glyphicon-edit"></span> Edit
                </button>
                <button type="button" @click="complete(todo)" class="btn btn-default btn-sm">
                <span class="glyphicon glyphicon-ok-circle"></span> Complete
                </button>
                <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
                <span class="glyphicon glyphicon-remove-circle"></span> Remove
                </button>
            </div>
            </li>
        </ul>
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

export default{
  methods: {
    ...mapActions([
      'loadTodos',
      'editTodo',
      'completeTodo',
      'removeTodo'
    ]),
    complete (todo) {
      console.log('complete called ' + todo.id)
      this.completeTodo(todo)
    },
    remove (todo) {
      console.log('remove called ' + todo.id)
      this.removeTodo(todo)
    },
    edit (todo) {
      console.log('edit called ' + todo.id)
      this.editTodo(todo)
    }
  },
  created () {
    this.loadTodos()
  },
  computed: {
    ...mapGetters([
      'todos'
    ])
  }
}
</script>
<style>
    .btn-group{
        float: right;
    }
</style>
