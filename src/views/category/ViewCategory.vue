
<template>
  <div>
    <h1>Category List</h1>
    
        <div id="addLink" class="btn btn-light" ><router-link  to="/category/add">Add Category</router-link></div>
    <div class="tableData">
    <table border="1" class="table">
      <thead class="thead-light">
        <tr>
          <th>Id</th>
          <th>Category Name</th>
          <th>Description</th>
          <th>ImageUrl</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td width="5%">{{ item.id }}</td>          
          <td width="15%">
            <input v-if="editId === item.id" v-model="editName" />
            <span v-else>{{ item.categoryName }}</span>
          </td>
          <td width="20%">
          <input v-if="editId === item.id" v-model="editDescription" />
            <span v-else>{{ item.description }}</span>
          </td>
          <td width="30%">{{item.imageUrl}} </td>
          <td width="30%">
            <button class="btn btn-danger" style="margin:5px;" @click="deleteItem(item.id)">Delete</button>
            <button class="btn btn-primary" style="margin:5px;" v-if="editId !== item.id" @click="startEdit(item)">Edit</button>
            <button class="btn btn-success"style="margin:5px;" v-if="editId === item.id" @click="saveEdit(item.id)">Save</button>
            <button class="btn btn-warning" style="margin:5px;" v-if="editId === item.id" @click="cancelEdit">Cancel</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!--<input v-model="newItem" @keyup.enter="addItem">
    <button @click="addItem">Add</button>-->
  </div>
  </div>
</template>
//'https://localhost:7268/api/'
<script>
import axios from 'axios';
import swal from 'sweetalert';

let baseUrl = 'https://localhost:7268/api/';
export default {
  data() {
    return {
      items: [],
      newItem: '',
      editId: null,
      editName: '',
      editDescription:''
    };
  },
  methods: {
    fetchItems() {
      axios.get(baseUrl + 'category')
        .then(response => {
          this.items = response.data;
          console.log(JSON.stringify(response.data));
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
        });
    },
    addItem() {
      axios.post('http://localhost:5000/api/todo', {
        name: this.newItem,
        isComplete: false
      })
      .then(response => {
        this.items.push(response.data);
        this.newItem = '';
      });
    },
    deleteItem(id) {
        //alert('API: ' + baseUrl + `Category/${id}`);
      axios.delete(baseUrl + `Category/${id}`)
        .then(() => {
          this.items = this.items.filter(item => item.id !== id);
          swal({
          text: "Category Deleted Successfully!",
          icon: "success",
          closeOnClickOutside: false,
        });
        });
    },
    startEdit(item) {
      this.editId = item.id;
      this.editName = item.categoryName;
      this.editDescription = item.description;
    },
    saveEdit(id) {
      axios.put( baseUrl + `Category/${id}`, {
        id: id,
        categoryName: this.editName,
        description: this.editDescription, //this.items.find(item => item.id === id).description,
        imageUrl:this.items.find(item => item.id === id).imageUrl
      })
      .then(() => {
        const item = this.items.find(item => item.id === id);
        if (item) {
          item.name = this.editName;
          item.description = this.editDescription;
        }
        this.cancelEdit();
      });
    },
    cancelEdit() {
      this.editId = null;
      this.editName = '';
      this.editDescription = '';
    }
  },
  created() {
    this.fetchItems();
  }
};
</script>

<style>
  table {
    width: 95% !important;
    border-collapse: collapse;
  }

  th, td {
    padding: 8px;
    //text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
  .tableData{
    padding:0px 20px 0px 75px;
  }
  #addLink{
    float: right !important;
    margin-right: 78px;
    margin-bottom: 5px !important;
    font-color:black;
  }
</style>