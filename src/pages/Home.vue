<template>
<Content>
  <CreateTodo></CreateTodo>
  <ListTodos></ListTodos>
</Content>
</template>

<script>
import CreateTodo from '@/components/todo/CreateTodo.vue'
import ListTodos from '@/components/todo/ListTodos.vue'

export default {
  data() {
    return {
      title: 'Home',
      visible: false
    }
  },
  components: {
    CreateTodo,
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
