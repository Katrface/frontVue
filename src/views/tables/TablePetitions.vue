<template>
    <el-input
            v-model="search"
            placeholder="ФИО студента"/>
    <el-table
            row-key="id"
            ref="filterTable"
            :data="petitions.filter(data => !search || data.student.name.toLowerCase().includes(search.toLowerCase()))"
            highlight-current-row
            :row-class-name='getCssClass'
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
                prop="status"
                label="Статус заявления"
                :filters="filterStatusParam"
                :filter-method="filterStatus">
            <template #default="scope">
                {{getName(scope.row.status)}}
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
    import { useStore } from 'vuex';
    import { ref, computed } from 'vue';
    import { getName, getCssClass, formatDate, formatDateRow, filterStatusParam } from "../../utils/status";

    export default {
        async setup() {
            const store = useStore();
            const petitions = computed(() => store.getters['petitionsModule/getPetitions']);


            function selectPetition() {

            }

            const search = ref('');
            return {
                petitions, selectPetition,
                getName, getCssClass, formatDate, formatDateRow, filterStatusParam,
                search
            }
        },
        methods: {
            filterStatus(value, row) {
                return row.status === value;
            },
        },
        components: {
            ElTable,
            ElTableColumn,
            ElInput,
        }
    }
</script>

<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
    .el-table .danger-row {
        background: #fde2e2;
    }
    .el-table .info-row {
        background: #e9e9eb;
    }
</style>