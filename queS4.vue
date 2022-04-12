<template>
<div id='app'>{{info}}
<b-table striped hover :info="info" border=" "></b-table>
</div>
</template>
<script>
var axios = require("axios").default;
export default{
    name:"quesAKHUH",
    data(){
    return{
    info:'',
     }
      },
       mounted(){
       axios
      .get('https://api.publicapis.org/entries')
      .then(response => (this.info = response))
      }
}
</script>
