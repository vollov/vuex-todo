<template>
<div id="get-todo" class="container">
  <Form :model="todoForm" :label-width="80">
    <FormItem label="Title">
      <Input v-model="todoForm.input" @change="getTodoX" placeholder="Enter todo title..."></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="saveTodo('todoForm')">Save</Button>
    </FormItem>
  </Form>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'addTodo',
      'getTodo',
      'clearTodo'
    ]),
    getTodoX() {
      console.log('get todo x called, newTodo=%s', this.title)
      this.getTodo(this.title)
    },
    saveTodo() {
      console.log('save todo called')
      this.addTodo()
      this.clearTodo()
    }
  },
  computed: {
    ...mapGetters([
      'newTodo'
    ]),
    title: {
      get() { return this.newTodo },
      set(value) { this.getTodo(value) }
    }
  }
}
</script>
