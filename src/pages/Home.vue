<template>
<Content>
  <EditTodo></EditTodo>
  <ListTodos></ListTodos>
</Content>
</template>

<script>
import EditTodo from '@/components/todo/EditTodo.vue'
import ListTodos from '@/components/todo/ListTodos.vue'

export default {
  data() {
    return {
      title: 'Home',
      visible: false
    }
  },
  components: {
    EditTodo,
    ListTodos
  },
  methods: {
    show: function () {
      this.visible = true;
    }
  }
}
</script>
<style lang="scss">

</style>
