<template>
  <!--<header>-->
    <!-- <img alt="Vue logo" src="../assets/logo.png" height="50">
    <p>E-Commerce Application</p> -->
   <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li><router-link class="active" to="/">Home</router-link></li>
        <li><router-link to="/">Customer</router-link></li>
        <li><router-link to="/">Product</router-link></li>
        <li><router-link to="/">Orders</router-link></li>
         <!-- Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                Category
              </a>
              <div class="dropdown-menu">              
                <router-link class="dropdown-item" to="/category">Category List</router-link>
                <router-link class="dropdown-item" to="/category/add">Add Category</router-link>
                <!--<a class="dropdown-item" href="#">Add Category1</a>
                <a class="dropdown-item" href="#">Add Category2</a>-->
              </div>
            </li>
            
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  <!--</header>-->
</template>

<style lang="scss">
a:hover{
color:white !important;
}
header {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: .5rem 1rem;

    p {
      margin-left: 1rem;
    }
  }

  
  ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}
/* Add a gray right border to all list items, except the last item (last-child) */
li {
  border-right: 1px solid #bbb;
}

li:last-child {
  border-right: none;
}
.active {
  background-color: #04AA6D;
}
.navbar {
    --bs-navbar-padding-y: 0 !important;
}
.dropdown-menu {
     left: 333px !important
     }
.dropdown{
      position: inherit !important;;
     }
.dropdown-item:hover {   
    background-color: #e9ecef !important;
}
#navbardrop
{
  color:white;
  padding-top:13px;
  margin-left: 5px;
    margin-right: 5px;
}
</style>