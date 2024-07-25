<template>
  <div>
    <table>
    <thead>
      <tr>
        <th v-for="key in columns">
          {{key | capitalize}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in data">
        <td v-for="key in columns">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
    name : "CategoryBox",
    props : ["category"],
    methods : {
        
    }
}
</script> 

<style scoped>
.card{
  width : 20rem;
  height : 24rem;
}
.embed-responsive .card-img-top {
  object-fit: cover;
}
a {
  text-decoration: none;
}
.card-title {
  color: #484848;
  font-size: 1.1rem;
  font-weight: 400;
}
.card-title:hover {
  font-weight: bold;
}
.card-text {
  font-size: 0.9rem;
}
#edit-category {
  float: right;
}
</style>