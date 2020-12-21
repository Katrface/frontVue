<template>
    <el-row class="header">
        <el-select v-model="type" placeholder="Select">
            <el-option
                    v-for="type of types"
                    :key="type.id"
                    :label="type.name"
                    :value="type.id">
            </el-option>
        </el-select>

        <el-radio-group v-model="mode">
            <el-radio-button label="Заявления"></el-radio-button>
            <el-radio-button label="Ошибки"></el-radio-button>
            <el-radio-button label="Проверяющие"></el-radio-button>
        </el-radio-group>

        <el-button @click="refresh" icon="el-icon-refresh" circle></el-button>
    </el-row>
</template>

<script>
    import {ElSelect, ElOption, ElRadioGroup, ElRadioButton, ElRow, ElButton} from 'element-plus'
    import {useRouter} from 'vue-router'
    import {useStore} from 'vuex'
    import {useNavigation} from "../composition/navigate";

    export default {
        props: ['modeP', 'typeId'],

        async setup({modeP: mode, typeId}) {
            const router = useRouter();
            const store = useStore();

            await store.dispatch('baseModule/loadTypes', 0);

            return {
                ...await useNavigation({mode, typeId}, store, router)
            };
        },
        components: {
            ElSelect,
            ElOption,
            ElRadioGroup,
            ElRadioButton,
            ElRow,
            ElButton,
        }
    }
</script>

<style scoped>
    .header {
        margin-top: 20px;
        /*min-height: 100px;*/
    }

    .el-select, .el-radio-group, .el-button {
        height: 40px;
        margin-right: 20px;
    }

</style>