<template>
    <el-button icon="el-icon-back" @click="goBack" circle></el-button>

    <el-form label-position="top" :model="examiner" ref="examinerForm">
        <el-form-item label="Name" prop="name">
            <el-input v-model="examiner.name"></el-input>
        </el-form-item>
        <el-form-item label="Gmail" prop="gmail">
            <el-input v-model="examiner.gmail"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm">Create</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import {ElButton, ElForm, ElFormItem, ElInput} from "element-plus";
    import { reactive } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    export default {
        setup() {
            const store = useStore();
            const router = useRouter();

            const examiner = reactive({
                name: '',
                gmail: ''
            });

            const goBack = () => {
                router.push({ name: 'TableExaminer'})
            };
            const addExaminer = (examiner) => {
                store.dispatch('examiner/add', examiner);
            };
            const submitForm = () => {
                addExaminer(examiner);
                goBack();
            };

            return {
                examiner, goBack, submitForm
            }
        },
        components: {
            ElForm,
            ElFormItem,
            ElInput,
            ElButton
        }
    }
</script>

<style scoped>

</style>