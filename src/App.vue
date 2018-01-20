<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Post from './components/Post'

export default {
  name: 'app',
  created: function () {
    this.$store.dispatch({ type: 'loadComments' })
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
</style>
