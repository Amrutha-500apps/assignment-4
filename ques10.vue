<template>
    <div>
        <p>{{name}}</p>
        <button @click="functionhandle()">clickme</button>
    </div>    
</template>
<script>
export default {
    name:"HII",
    props:{
        name:String,
    },
    methods:{
        functionhandle(){
            try{
                this.count = this.count*5;
                console.log("count",this.count);
            }
            catch{
                console.log("error handled");
            }
        }
    }
}
</script>
