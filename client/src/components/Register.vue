<template>
 <div>
    <h1>Register</h1>
    <form>
    <h3>Name: <input type="text" v-model="name"></h3>
    <h3>Email: <input type="text" v-model="email"></h3>
    <h3>Username: <input type="text" v-model="username"></h3>
    <h3>Password: <input type="password" v-model="password"></h3>
    </form>
    <button type="submit" @click="register">Submit</button>
 </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      name: '',
      email: '',
      username: '',
      password: ''
    }
  },
  methods: {
    register () {
      let self = this
      console.log('B')
      this.$http.post('users/create', {
        username: this.username,
        password: this.password,
        name: this.name,
        email: this.email
      })
        .then(response => {
          console.log('response')
          localStorage.setItem('token', response.data.token)
          self.$router.push('/home')
        })
        .catch(err => {
          console.error(err)
        })
    },
    gotoHome () {
      this.$router.push('/home')
    }
  }
}
</script>

<style>

</style>
