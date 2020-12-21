<template>
    <el-button @click="createExaminer">Create</el-button>
    <el-table
            row-key="id"
            ref="filterTable"
            :data="examiners"
            highlight-current-row
            @current-change="selectExaminer"
            min-height="100">
        <el-table-column
                prop="id"
                label="ID">
        </el-table-column>
        <el-table-column
                prop="name"
                label="Имя">
        </el-table-column>
        <el-table-column
                prop="gmail"
                label="Gmail">
        </el-table-column>
    </el-table>
</template>

<script>
    import {ElButton, ElInput, ElTable, ElTableColumn} from "element-plus";
    import {computed, ref} from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from "vue-router";

    export default {
        async setup() {
            const store = useStore();
            const router = useRouter();
            const load = () => store.dispatch('examiner/loadExaminers');
            await load();
            const examiners = computed(() => store.getters['examiner/getExaminers']);

            const selectExaminer = (val) => {
                router.push({ name: 'ExaminerDetail', params: { id: val.id } })
            };

            const createExaminer = () => {
                console.log(1);
                router.push({ name: 'ExaminerCreate'})
            }

            return {
                examiners, selectExaminer, createExaminer
            }
        },
        components: {
            ElTable,
            ElTableColumn,
            ElInput,
            ElButton
        }
    }
</script>

<style scoped>

</style>