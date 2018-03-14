// const SET_TODOS = 'SET_TODOS'
// const ADD_TODO = 'ADD_TODO'
// const EDIT_TODO = 'EDIT_TODO'
// const REMOVE_TODO = 'REMOVE_TODO'
// const COMPLETE_TODO = 'COMPLETE_TODO'
// const CLEAR_TODO = 'CLEAR_TODO'
const _ = require('underscore')

const mutations = {
  SET_TODOS (state, todos) {
    state.todos = todos
  },
  GET_TODO (state, todo) {
    state.newTodo = todo
  },
  ADD_TODO (state, todo) {
    // state.todos.push(todo)
    console.log('push todo=%j in to todos', todo)
    state.todos.push(todo)
    // state.todos.push({
    //   title: state.newTodo,
    //   completed: false
    // })
  },
  CLEAR_TODO (state) {
    state.newTodo = ''
  },
  COMPLETE_TODO (state, todo) {
    todo.completed = !todo.completed
  },
  EDIT_TODO (state, todo) {
    let todos = state.todos
    todos.splice(todos.indexOf(todo), 1)
    state.todos = todos
    state.newTodo = todo.title
  },
  REMOVE_TODO (state, todo) {
    let todos = state.todos
    // remove object whose id == todo.id
    console.log('REMOVE_TODO todos=%j', todos)
    let index = _.findIndex(todos, {id:todo.id});
    console.log('remove idx=%s, obj=%j', index, todo)
    todos.splice(index, 1)
  }
}

export default mutations
