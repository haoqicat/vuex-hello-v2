<template>
  <div class="home">
    <Post />
  </div>
</template>

<script>
import Post from './components/Post'

export default {
  name: 'app',
  components: {
    Post
  }
}
</script>

<style>
  body {
    margin: 0;
  }
</style>
