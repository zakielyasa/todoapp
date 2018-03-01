<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
          <h1>Todo List</h1>
          <hr>
      <div class="col-md-6" v-for="todo in arrFalse" :key="todo">
        <div class="card border-dark mb-3" style="max-width: 20rem;">
          <div class="card-header">{{todo.name}}</div>
            <div class="card-body">
            <p class="card-text">Status: {{todo.complete}}</p>
            </div>
            <button type="button" class="btn btn-success" data-toggle="modal" :data-target="'#'+todo._id">Edit</button>
            <button type="button" class="btn btn-danger" @click="deleteTodoFalse(todo._id)">Delete</button>
        </div>
<div class="modal" :id="todo._id">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{todo.name}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" placeholder="Todo Name" v-model="name">
        <select name="" id="" v-model="complete">
          <option value="Done">Done</option>
          <option value="False">On Progres</option>
        </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click="editTodo(todo._id)">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </div>
      </div>
      <div class="col-md-6">
          <h1>Done</h1>
          <hr>
          <div class="col-md-6" v-for="todo in arrTrue" :key="todo">
        <div class="card border-dark mb-3" style="max-width: 20rem;">
          <div class="card-header">{{todo.name}}</div>
            <div class="card-body">
            <p class="card-text">Status:{{todo.complete}}</p>
            </div>
            <button type="button" class="btn btn-danger" @click="deleteTodoTrue(todo._id)">Delete</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import EditTodo from '@/components/EditTodo'

export default {
  data () {
    return {
      todos:{},
      arrTrue: [],
      arrFalse: [],
      name: '',
      complete: ''
    }
  },
  children: [{
    path: '/edit/:id',
    name: 'edit',
    component: EditTodo
  }],
  methods: {
    deleteTodoTrue (id) {
      // console.log(id)
      console.log(this.todos)
      let token = localStorage.getItem('token')
      this.$http.delete(`todo/delete/${id}`, {headers: {token: token}})
      .then(response => {
          this.arrTrue.forEach((element, index) => {
              if (this.arrTrue.id === id) {
                  this.arrTrue.splice(index, 1)
              }
          })
          let token = localStorage.getItem('token')
    console.log(token)
    this.$http.get('todo/', {headers: {token: token}})
      .then(response => {
         console.log(response.data.data)
        response.data.data.forEach((element, index) => {
          if (response.data.data[index].complete === true) {
            element.complete = 'Done'
              this.arrTrue.push({
                _id: element._id,
                name: element.name,
                complete: element.complete
              })
          } else if (response.data.data[index].complete === false) {
            element.complete = 'On Progres'
            this.arrFalse.push({
                _id: element._id,
                name: element.name,
                complete: element.complete
              })
          }
           console.log(response.data.data[index].complete)
        })
        // console.log(this.arrFalse)
      })
      .catch(err => {
        console.error('KOK ERRROR SIHHH', err)
      })
      })
      .catch(err => {
          console.error(err)
      })
    },
    deleteTodoFalse (id) {
      // console.log(id)
      console.log(this.todos)
      let token = localStorage.getItem('token')
      this.$http.delete(`todo/delete/${id}`, {headers: {token: token}})
      .then(response => {
          this.arrFalse.forEach((element, index) => {
              if (this.arrFalse.id === id) {
                  this.arrFalse.splice(index, 1)
              }
          })
          let token = localStorage.getItem('token')
    console.log(token)
    this.$http.get('todo/', {headers: {token: token}})
      .then(response => {
         console.log(response.data.data)
        response.data.data.forEach((element, index) => {
          if (response.data.data[index].complete === true) {
            element.complete = 'Done'
              this.arrTrue.push({
                _id: element._id,
                name: element.name,
                complete: element.complete
              })
          } else if (response.data.data[index].complete === false) {
            element.complete = 'On Progres'
            this.arrFalse.push({
                _id: element._id,
                name: element.name,
                complete: element.complete
              })
          }
           console.log(response.data.data[index].complete)
        })
        // console.log(this.arrFalse)
      })
      .catch(err => {
        console.error('KOK ERRROR SIHHH', err)
      })
      })
      .catch(err => {
          console.error(err)
      })
    },
    editTodo (id) {
      let token = localStorage.getItem('token')
      console.log(id)
      this.$http.put(`todo/update/${id}`, {
          name: this.name,
          complete: this.complete
      }, {headers: {token: token}})
      .then(response => {
        console.log(response.data)
        this.$router.push('/home')
        
      })
    }
  },
  created () {
    let token = localStorage.getItem('token')
    console.log(token)
    this.$http.get('todo/', {headers: {token: token}})
      .then(response => {
         console.log(response.data.data)
        response.data.data.forEach((element, index) => {
          if (response.data.data[index].complete === true) {
            element.complete = 'Done'
              this.arrTrue.push({
                _id: element._id,
                name: element.name,
                complete: element.complete
              })
          } else if (response.data.data[index].complete === false) {
            element.complete = 'On Progres'
            this.arrFalse.push({
                _id: element._id,
                name: element.name,
                complete: element.complete
              })
          }
           console.log(response.data.data[index].complete)
        })
        // console.log(this.arrFalse)
      })
      .catch(err => {
        console.error('KOK ERRROR SIHHH', err)
      })
  }
}
</script>

<style>

</style>
