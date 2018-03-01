<template>
  <div>
      <Navbar/>
      <hr>
      <Todo/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Todo from '@/components/Todo'

export default {
  components: {
    Navbar,
    Todo
  }
}
</script>

<style>

</style>
