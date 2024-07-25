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
footer {
       margin-top:200px !important;
  }

</style>