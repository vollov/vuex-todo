<template>
<Content :style="{padding: '16px 16px 0px 16px'}">

  <Form :model="todoForm" inline>
    <FormItem>
      <Checkbox v-model="todoForm.complete"></Checkbox>
    </FormItem>
    <FormItem>
      <Input v-model="todoForm.title" @on-change="getTodoX" placeholder="Enter todo title..." clearable></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="saveTodo()">Save</Button>
    </FormItem>
  </Form>
</Content>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      todoForm: {
        title: '',
        complete: false
      }
    }
  },
  methods: {
    ...mapActions([
      'addTodo',
      'getTodo',
      'clearTodo'
    ]),
    getTodoX() {
      console.log('get todo x called, newTodo=%s', this.todoForm.title)
      this.getTodo(this.todoForm.title)
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
