<template>
<div>
<ques6 ref="message">{{message}}</ques6>
<button @click="showAlert()">Click me</button>
</div>
</template>
<script>
import ques6 from '../components/ques6'
export default {
  component:{
    ques6,
  },
      data(){
      return {
       name:"amrutha",
       message:"hloo"
     }
   },
    methods:{
    showAlert(){
     this.$refs.message.fun();
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
