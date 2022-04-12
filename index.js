import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
//import ques10 from '../components/ques10'
//import queS9 from '../components/queS9'
//import queS8 from '../components/queS8'
//import ques6 from '../components/ques6'
//import queS9 from '../components/queS9'
//import queS4 from '../components/queS4'
import qS4 from '../components/qS4'

 Vue.use(Router)
const routes = [
    {
        path:'/',
        name:'Home',
        component:HelloWorld
    },
    //{
    //    path:'/ques10',
    //    name:'Homel',
    //    component:ques10  
    //}
    // {
         //path:'/queS9',
         //name:'Homels',
        //component:queS9
   //},
    //{
      // path:'/queS8',
       // name:'Homelsd',
       // component:queS8
   // },
    //{
     //  path:'/ques6',
     //  name:'Homelsi',
     //  component:ques6
  // },
   //{
   // path:'/queS4',
    //name:'Homelsii',
    //component:queS4
 //},
   {
    path:'/qS4',
    name:'Hom',
    component:qS4
   },

]
let router = new Router({routes})
export default router