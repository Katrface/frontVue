<template>
    <el-button icon="el-icon-back" @click="goBack" circle></el-button>
    <el-button type="danger" @click="remove">Delete</el-button>

    <el-form label-position="top" :model="examiner" ref="examinerForm">
        <el-form-item label="ID" prop="id">
            <el-input v-model.number="examiner.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="Name" prop="name">
            <el-input v-model="examiner.name"></el-input>
        </el-form-item>
        <el-form-item label="Gmail" prop="gmail">
            <el-input v-model="examiner.gmail"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm">Update</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import {ElButton, ElForm, ElFormItem, ElInput} from "element-plus";
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    import { reactive } from 'vue';

    export default {
        props: ['id'],
        async setup({id}) {
            const store = useStore();
            const router = useRouter();

            const remove = () => {
                store.dispatch('examiner/remove', id);
                goBack();
            };
            const loadById = (id) => store.dispatch('examiner/loadById', id);

            const examiner = reactive(await loadById(id));

            const goBack = () => {
                router.push({name: 'TableExaminer'})
            };
            const editExaminer = (examiner) => {
                store.dispatch('examiner/edit', examiner);
            };
            const submitForm = () => {
                editExaminer(examiner);
                goBack();
            };

            return {
                examiner, goBack, submitForm, remove
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