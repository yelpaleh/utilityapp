<template>
  <footer>
    <p>E-Commerce Application | Copyright &copy; {{ year }} </p>
  </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  setup () {
    const year = computed(() => new Date().getFullYear())
    return { year }
  }
}
</script>

<style lang="scss">

/* Style the footer */
footer {
  background-color: #777;
  padding: 7px;
  text-align: center;
  color: white;
}
</style>