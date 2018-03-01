<template>
  <div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="createTodo">Add Todo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="logout">Logout</a>
      </li>
    </ul>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      complete: false
    }
  },
  methods: {
    createTodo () {
      this.$router.push('/createtodo')
    },
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
