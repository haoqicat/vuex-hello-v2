<template>
  <div class="home">
    {{ posts }}
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    posts () {
      return this.$store.state.post.all
    }
  }
}
</script>
