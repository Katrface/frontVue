<template>
    <el-input
            v-model="search"
            placeholder="ФИО студента"/>
    <el-table
            row-key="id"
            ref="filterTable"
            :data="petitions.filter(data => !search || data.student.name.toLowerCase().includes(search.toLowerCase()))"
            highlight-current-row
            @current-change="selectPetition"
            min-height="100">
        <el-table-column
                prop="student.name"
                label="ФИО">
        </el-table-column>
        <el-table-column
                prop="student.group"
                label="Группа">
        </el-table-column>
        <el-table-column
                prop="student.course"
                label="Курс"
                width="180">
        </el-table-column>
        <el-table-column
                prop="error_set"
                label="Ошибки">
            <template #default="scope">
                <span v-for="error in scope.row.error_set">
                    {{error.document.name}}: {{error.description}}
                </span>
            </template>
        </el-table-column>
        <el-table-column
                sortable
                prop="date"
                label="Дата проверки"
                :formatter="formatDateRow">
        </el-table-column>
    </el-table>
</template>

<script>
    import { ElTable, ElTableColumn, ElInput} from 'element-plus';
    import { useStore } from "vuex";
    import { computed, ref } from "vue";
    import { formatDateRow } from "../../utils/status";

    export default {
        setup() {
            const store = useStore();
            const petitions = computed(() => store.getters['petitionsModule/getPetitions']);

            const selectPetition = () => {};

            const search = ref('');
            return {
                petitions, search, selectPetition, formatDateRow
            };
        },
        components: {
            ElTable,
            ElTableColumn,
            ElInput,
        }
    }
</script>

<style scoped>

</style>