<template>
    <el-container class="container">
        <el-header>
            <Loader name="Head"></Loader>
        </el-header>
        <el-main>
            <Loader name="Main"></Loader>
        </el-main>
    </el-container>
</template>

<script>
    import {ElContainer, ElHeader, ElMain} from 'element-plus';
    import Loader from "../components/Loader";

    export default {
        components: {
            Loader,
            ElContainer,
            ElHeader,
            ElMain
        }
    }
</script>

<style scoped>
    .container {
        margin: 0 auto;
        max-width: 1170px;
    }
</style>