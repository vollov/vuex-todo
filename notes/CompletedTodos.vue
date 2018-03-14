<template>
    <div id="completed-todos">
        <h3 v-if="completed.length > 0">Completed({{completed.length}})</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="todo in completed">
                {{todo.title}}
                <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
                <span class="glyphicon glyphicon-remove-circle"></span> Remove
                </button>
            </li>
        </ul>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default{
  methods: {
    ...mapActions([
      'removeTodo'
    ]),
    remove (todo) {
      console.log('remove called ' + todo.id)
      this.removeTodo(todo)
    }
  },
  computed: {
    ...mapGetters({
      completed: 'completedTodos'
    })
  }
}
</script>
