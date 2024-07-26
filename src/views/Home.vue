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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 0.5rem;
  max-width: 100%;
  margin: 10px 5px 0 5px;
  paddding-top: 10px !important;
}
.airport {
  border: 3px solid;
  border-radius: .5rem;
  padding: 1rem;
  margin-bottom:5px;
  color:green;
}
.airport p:first-child {
  font-weight: bold;
  font-size: 2.5rem;
}
.airport p:last-child {
  font-style: italic;
  font-size: .8rem;
}
a:hover{
color:blue !important;
}
</style>
