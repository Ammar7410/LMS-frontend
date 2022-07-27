<template>

  <form @submit.prevent="signInButtonPressed">
    <div id="b1" class="input-group mb-3">
      <span class="input-group-text" id="book">Name</span>
      <input ref="input" v-model="name" type="text" class="form-control"  :value="name.id" aria-label="Siing example input"
        aria-describedby="inputGroup-sizing-default" placeholder="Book name" required>
    </div>
    <div id="b1" class="input-group mb-3">

      <span class="input-group-text" id="page">Pages</span>
      <input ref="inputpage" v-model="pages" type="pages" class="form-control" aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default" placeholder="Enter Page" required>
    </div>

    <div id="b1">
      <select @change="getauthor_id($event)" class="form-select" aria-label="Default select example">
        <option selected>Select Authors</option>
        <option v-for="item in listAuthor" :key="item.name" :value="item.id">{{ item.name }}</option>

      </select>
    </div>

    <div  id="b1">
      <select name="category_id" @change="getcategory_id($event)" class="form-select" aria-label="Default select example">
        <option  selected>Select Category</option>
        <option  v-for="item in listCategory" :key="item.name" :value="item.id">{{ item.name }}</option>

      </select>
    </div>

    <br>
    <button v-on:click="create()" id="btnbook" type="submit" class="btn btn-primary">Submit</button>
    <br>
  </form>

  <button v-on:click="testshow">test</button>
  <br>
  <br>
  <br>




  <table id="t1" class="table table-dark table-hover">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Book</th>
        <th scope="col">Pages</th>
        <th scope="col">Update</th>
        <th scope="col">Delete</th>
        <th scope="col">Details</th>
      </tr>
    </thead>
    <tbody v-for="item in list" :key="item">
      <tr>
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.name }}</td>
        <td>{{ item.pages }}</td>
        <td scope="col"><button type="button" class="btn btn-success">Edit</button></td>
        <td scope="col"><button type="button" class="btn btn-danger">Delete</button></td>
        <td scope="col"><button type="button" class="btn btn-info">More</button></td>

      </tr>

    </tbody>
  </table>
</template>

<script>
import { on  } from 'vue'
import axios from 'axios'
import App from '@/App.vue'

// import Author from "./Author.vue";
// import Category from "./Category.vue";
export default {
  name: "Book",
  data() {
    return {
      list: [],
      listAuthor: [],
      listCategory: [],
      name: "",
      pages: "",
      store: [],
 

    }

  },
  methods: {

getcategory_id(event) {
              console.log("Category id  : ",event.target.value);
             
              
          },
          getauthor_id(event) {
              console.log("Author id : ",event.target.value);
             
              
          },
          




    async create() {

      const bookadd = { name: this.name, pages: this.pages }
      let postdata = await axios.post("http://localhost:3000/api/v1/books", bookadd).then(response => {


        // this.list.push(this.name)
        // this.list.push(this.pages)
   this.getbook();

      })
        .catch(error => {
          console.log(error.response, "Error")
        });
      // console.log(postdata);

    },
     async getbook() {

      // Book GET
      let result = await axios.get("http://localhost:3000/api/v1/books")
      console.log("Book : ", result.data)


      this.list = result.data



      // Author GET


      //   Category GET

    },
    async getauthor() {
      let authorResult = await axios.get("http://localhost:3000/api/v1/authors")
      console.log("Author : ", authorResult.data);
      this.listAuthor = authorResult.data

    },

    async getcategory() {
      let categorieslist = await axios.get("http://localhost:3000/api/v1/categories")
      console.log("Category : ", categorieslist.data);
      this.listCategory = categorieslist.data
    },
    testshow(){
      console.log("Id : ",this.$refs['category_id'].value);
    },

  },





  async mounted() {
    this.getbook(),
      this.getauthor(),
      this.getcategory()

  }





}
</script>


<style scoped>
#b1 {
  display: flex;
  margin: 8px auto;

  width: 30%;

}

#b2 {
  display: flex;
  margin: 8px auto;
  margin-right: 250px;

  width: 30%;

}

#btnbook {
  margin-top: -10px;
  margin-left: 35%;
}

.ul li {
  display: inline-block;
  width: 200px;
  border: 2px solid red;
}

#t1 {
  margin: auto;
  width: 80%;
  border: 3px solid gray;
}
</style>




