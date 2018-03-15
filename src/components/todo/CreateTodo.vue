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
      <Button type="primary" @click="save()">Create</Button>
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
        title: 'Create Todo',
        complete: false
      },
      ruleValidate: {
        title: [
          { required: true, message: 'The title cannot be empty', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions([
      'saveTodo',
      'setTodo',
      'clearTodo'
    ]),
    save() {
      console.log('save todo called, title=%s', this.todoForm.title)
      const todo = {
        title: this.todoForm.title,
        complete: this.todoForm.complete
      }
      this.saveTodo(todo)
      this.todoForm = {}
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
