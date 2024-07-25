
<template>
  <div>
    <h1>Category List</h1>
    <router-link id="add-category" :to="{name : 'AddCategory'}" v-show="$route.name=='AdminCategory'">
          <button class="btn">Add a new Category</button>
        </router-link>
    <div class="tableData">
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Category Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>          
          <td>
            <input v-if="editId === item.id" v-model="editName" />
            <span v-else>{{ item.categoryName }}</span>
          </td>
          <td>{{ item.description }}</td>
          <td>
            <button style="margin:5px;" @click="deleteItem(item.id)">Delete</button>
            <button style="margin:5px;" v-if="editId !== item.id" @click="startEdit(item)">Edit</button>
            <button style="margin:5px;" v-if="editId === item.id" @click="saveEdit(item.id)">Save</button>
            <button style="margin:5px;" v-if="editId === item.id" @click="cancelEdit">Cancel</button>
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
      editName: ''
    };
  },
  methods: {
    fetchItems() {
      axios.get(baseUrl + 'category')
        .then(response => {
          this.items = response.data;
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
      this.editName = item.name;
    },
    saveEdit(id) {
      axios.put(`http://localhost:5000/api/todo/${id}`, {
        id: id,
        name: this.editName,
        isComplete: this.items.find(item => item.id === id).isComplete
      })
      .then(() => {
        const item = this.items.find(item => item.id === id);
        if (item) {
          item.name = this.editName;
        }
        this.cancelEdit();
      });
    },
    cancelEdit() {
      this.editId = null;
      this.editName = '';
    }
  },
  created() {
    this.fetchItems();
  }
};
</script>

<style>
  table {
    width: 90%;
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
    padding:0px 20px 0px 120px;
  }
</style>