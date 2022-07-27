import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import Book from './components/Book.vue'
import Author from './components/Author.vue'
import Category from './components/Category.vue'




const routes=[

    {
        name:"Home",
        path:"/",
        component:Home
    },
    {
        name:"Book",
        path:"/book",
        component:Book
    },
    {
        name:"Author",
        path:"/author",
        component:Author
    },
    {
        name:"Category",
        path:"/category",
        component:Category
    },



];


const router=createRouter({
    history: createWebHistory(),
    routes
});


export default router

