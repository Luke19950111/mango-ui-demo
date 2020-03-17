<template>
    <div class="page">
        <h2>Home Page</h2>
        <el-button type="primary" @click="testAxios()">测试axios</el-button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Home',
    methods: {
        testAxios(){
            axios.get('http://localhost:8080').then(res=>{
                alert(res.data)
            })
        }
    }
}
</script>