const axios = require('axios')
const _ = require('underscore')

const actions = {
  // set selectedTodo
  setTodo ({commit}, todo) {
    console.log('SET_TODO action called')
    commit('SET_TODO', todo)
  },
  loadTodos ({commit}) {
    axios.get('/api/todo/')
    .then(res => {
      // console.log(res.data[0].title)
      commit('LOAD_TODOS', res.data)
    })
    .catch(err => {
      console.log('SET_TODOS err=%s', err)
    })
  },
  // create a new todo
  saveTodo ({commit}, todo) {
    // todo object is not empty
    if(! _.isEmpty(todo)){
      axios.post('/api/todo/', todo)
      .then(res => {
        console.log('ADD_TODO res=%j, todo=%j', res.data, todo)
        commit('ADD_TODO', res.data)
      })
      .catch(err => {
        console.log('ADD_TODO err=%s', err)
      })
    }
  },
  completeTodo ({commit}, todo) {
    commit('COMPLETE_TODO', todo)
    axios.put('/api/todo/' + todo.id + '/', todo)
    .then(res => {
      console.log('COMPLETE_TODO updated')
    })
    .catch(err => {
      console.log('COMPLETE_TODO err=%s', err)
    })
  },
  clearTodo ({commit}) {
    commit('CLEAR_TODO')
  },
  removeTodo ({commit}, todo) {

    axios.delete('/api/todo/' + todo.id + '/')
    .then(res => {
      console.log('REMOVE_TODO api call return')
      commit('REMOVE_TODO', todo)
    })
    .catch(err => {
      console.log('REMOVE_TODO err=%s', err)
    })
  },
  updateTodo ({commit}, todo) {
    axios.put('/api/todo/' + todo.id  + '/', todo)
    .then(res => {
      console.log('EDIT_TODO updated todo=%j', res.data)
      commit('EDIT_TODO', todo)
    })
    .catch(err => {
      console.log('EDIT_TODO err=%s', err)
    })
  }
}

export default actions
//
// getTodo({commit}, todo){
//     commit('GET_TODO', todo)
// },
// addTodo({commit}){
//     commit('ADD_TODO')
// },
