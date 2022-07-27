<template>

<div id="b1" class="input-group mb-3">
 
 <span class="input-group-text" id="book">Name</span>
  <input v-model="name"  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Author name">
<button v-on:click="created" id="btnbook" type="button" class="btn btn-primary">Submit</button>
</div>
<br><br><br>
<ul  class="ul" v-for="item in list" :key="item">
    <li>{{item.id}}</li>
    <li>{{item.name}}</li>

</ul>

</template>

<script>
import axios from "axios";
export default {
    name:"Author",
    data(){
        return{
        list:[],
        name:""
    }
    },
methods:{
        async created(){
            const authoradd={name:this.name}
            let postdata=await axios.post("http://localhost:3000/api/v1/authors",authoradd)
            .then(response =>{
            console.log("response : ",response)
            }) 
            .catch(error =>{
                console.log("error : ",error.response)
                })
            console.log(postdata);
            
        }
},
        
    

    async mounted(){
        let result = await axios.get("http://localhost:3000/api/v1/authors")
        console.log(result.data)   
        this.list=result.data 
    }    
}
</script>

<style scoped>
#b1 {
         display: flex;
        margin:8px auto;

        width: 30%;

}
/* #btnbook{
    margin-top: -10px;
    margin-left: 35%;
} */
.ul li{
    display: inline-block;
    width: 200px;
    border: 2px solid red;
}
</style>




