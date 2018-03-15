<template>
<Content :style="{padding: '16px 16px 0px 16px'}">

  <Form :model="todoForm" :rules="ruleValidate" inline>
    <FormItem>
      <Checkbox v-model="todoForm.complete"></Checkbox>
    </FormItem>
    <FormItem>
      <Input v-model="todoForm.title" placeholder="Enter todo title..." clearable></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="update()">Update</Button>
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
      },
      ruleValidate: {
        title: [
          { required: true, message: 'The title cannot be empty', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.loadTodo()
  },
  methods: {
    ...mapActions([
      'updateTodo',
      'setTodo',
      'clearTodo'
    ]),
    loadTodo() {
      // load selectedTodo from vuex
      console.log('selected todo id=%s', this.selectedTodo.id)
      this.todoForm.title = this.selectedTodo.title
      this.todoForm.complete = this.selectedTodo.complete
    },
    update() {
      // update selectedTodo
      // call action to update
      console.log('update todo called, title=%s', this.selectedTodo.title)
      console.log('update todo')
      this.selectedTodo.title = this.todoForm.title
      this.selectedTodo.complete = this.todoForm.complete
      this.updateTodo(this.selectedTodo)
      this.clearTodo()
      this.$router.push({ name: 'home' })
      // this.setTodo(this.selectedTodo)
      // if (!this.selectedTodo.id) {
      //   // this.saveTodo()
      //   console.log('create new')
      // } else {
      //   console.log('update todo')
      // }
      // this.clearTodo()
    }
  },
  computed: {
    ...mapGetters([
      'selectedTodo'
    ])
    // title: {
    //   get() { return this.selectedTodo },
    //   set(value) { this.setTodo(value) }
    // }
  }
}
</script>
