<template>
  <div class="wrapper">
    <router-link :to="{ name: 'AirportDetail', params: { code: airport.abbreviation } }" v-for="airport in airports" :key="airport.abbreviation" class="airport">
			<p>{{ airport.abbreviation }}</p>
			<p>{{ airport.name }}</p>
			<p>{{ airport.city }}, {{ airport.state }}</p>
		</router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import allAirports from '@/data/airports.js'

export default {
  setup() {
    const airports = ref(allAirports)
		return { airports }
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
  paddding-top: 10px !important;
}
.airport {
  border: 3px solid;
  border-radius: .5rem;
  padding: 1rem;
}
.airport p:first-child {
  font-weight: bold;
  font-size: 2.5rem;
  margin: 1rem 0;
}
.airport p:last-child {
  font-style: italic;
  font-size: .8rem;
}
</style>

<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
-->