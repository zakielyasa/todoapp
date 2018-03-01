<template>
  <div>
      <h1>CreateTodo</h1>
      <hr>
      <form action="">
          <h3>Name: <input type="text" v-model="name"></h3>
      </form>
      <button type="submit" @click="createTodo">Submit</button>
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
      console.log('A')
      let token = localStorage.getItem('token')
      this.$http.post('todo/create', {
        name: this.name,
        complete: this.complete
      }, {headers: {token: token}})
        .then(response => {
          console.log(response.data)
          this.$router.push('/home')
        })
    }
  }
}
</script>

<style>

</style>
