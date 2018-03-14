import mutations from './mutations'
import actions from './actions'

const state = {
  todos: [],
  newTodo: ''
}

const getters = {
  newTodo: state => state.newTodo,
  todos: state => state.todos,
  completedTodos: state => state.todos.filter((todo) => { return todo.completed })
}

export default {
  state,
  actions,
  getters,
  mutations
}
