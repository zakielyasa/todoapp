<template>
  <div>
      <h1>Login</h1>
      <form action="">
         <h3> Username:<input type="text" placeholder="username" v-model="username"></h3>
         <h3> Password:<input type="text" placeholder="password" v-model="password"></h3>
      </form>
      <button type="submit" @click="Login">Submit</button>
      <p>Not a user? Register <a href="" @click="goToRegister">here</a></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    Login () {
      this.$http.post('users/login', {
        username: this.username,
        password: this.password
      }).then(response => {
        // console.log(response.data.token)
        localStorage.setItem('token', response.data.token)
        this.$router.push('/home')
      })
    },
    goToRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<style>

</style>
