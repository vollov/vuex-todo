import mutations from './mutations'
import actions from './actions'

const state = {
  todos: [],
  selectedTodo: '' // selected todo or a new todo
}

const getters = {
  selectedTodo: state => state.selectedTodo,
  todos: state => state.todos,
  completedTodos: state => state.todos.filter((todo) => { return todo.completed })
}

export default {
  state,
  actions,
  getters,
  mutations
}
