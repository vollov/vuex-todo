<template>
<div>
  <Table stripe ref="selection" :columns="columns1" :data="todos" @on-select="handleSelect"></Table>
</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      columns1: [{
          type: 'selection',
          width: 60,
          align: 'center'
        },

        {
          title: 'Title',
          key: 'title'
        },
        {
          title: 'Created',
          key: 'created'
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    //
                    console.log('call remove id=%s, title=%s', params.row.id, params.row.title)
                    this.remove(params.row)
                  }
                }
              }, 'Delete')
            ]);
          }
        }
      ]
    }
  },
  methods: {
    ...mapActions([
      'loadTodos',
      'editTodo',
      'completeTodo',
      'removeTodo'
    ]),
    complete(todo) {
      console.log('complete called ' + todo.id)
      this.completeTodo(todo)
    },
    remove(todo) {
      console.log('remove action called id=' + todo.id)
      this.removeTodo(todo)
    },
    edit(todo) {
      console.log('edit called ' + todo.id)
      this.editTodo(todo)
    },
    handleSelect(selection, row) {
      // console.log('all selected selection=>%j', selection)
      console.log('item selected row.id=>%s', row.id)
      console.log('complete called ' + row.id)
      this.completeTodo(row)
    }
  },
  created() {
    this.loadTodos()
  },
  computed: {
    // ...mapState([
    //   'todos'
    // ]),
    ...mapGetters([
      'todos'
    ])
    // todos: {
    //   get() {
    //     console.log('get=>' + this.todos)
    //     return this.todos
    //   },
    //   set(name) {
    //     this.setTodos(todos)
    //   }
    // }
  }
}
</script>
