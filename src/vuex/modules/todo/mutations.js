// const SET_TODOS = 'SET_TODOS'
// const ADD_TODO = 'ADD_TODO'
// const EDIT_TODO = 'EDIT_TODO'
// const REMOVE_TODO = 'REMOVE_TODO'
// const COMPLETE_TODO = 'COMPLETE_TODO'
// const CLEAR_TODO = 'CLEAR_TODO'
const _ = require('underscore')

const mutations = {
  LOAD_TODOS (state, todos) {
    state.todos = todos
  },
  SET_TODO (state, todo) {
    state.selectedTodo = todo
  },
  // This is called after http POST
  // todo - object
  ADD_TODO (state, todo) {
    // state.todos.push(todo)
    console.log('push todo=%j in to todos', todo)
    state.todos.push(todo)
  },
  CLEAR_TODO (state) {
    state.selectedTodo = {}
  },
  COMPLETE_TODO (state, todo) {
    todo.completed = !todo.completed
  },
  // update todo in array todos by index
  // todo - object
  EDIT_TODO (state, todo) {
    let todos = state.todos
    let index = _.findIndex(todos, {id:todo.id});
    todos[index] = todo
    // todos.splice(index, 1)
    state.todos = todos
    // state.newTodo = todo.title
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
