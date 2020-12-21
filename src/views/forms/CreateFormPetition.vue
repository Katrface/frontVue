<template>
    <el-form ref="petitionCreate" :model="petition" :inline="true" label-position="top">
        <el-form-item label="Студент" label-width="100%">
            <el-col :span="7">
                <el-form-item label="Фио">
                    <el-input v-model="petition.student.name"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="Группа">
                    <el-input v-model="petition.student.group"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="Курс">
                    <el-input v-model="petition.student.course"></el-input>
                </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-form-item label="Тип заявления">
                <el-select v-model="petition.type">
                    <el-option
                            v-for="type in types"
                            :key="type.id"
                            :label="type.name"
                            :value="type.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Категория студента">
                <el-select v-model="petition.category">
                    <el-option
                            v-for="category in studentCategories"
                            :key="category.id"
                            :label="category.name"
                            :value="category.id">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form-item>
        <el-form-item label="Дата проверки">
            <el-date-picker v-model="petition.date"></el-date-picker>
        </el-form-item>
        <el-form-item label="Проверяющий">
            <el-input disabled v-model="petition.examiner"></el-input>
        </el-form-item>

        <el-form-item label="Ошибки" label-width="100%">

            <el-form-item style="width: 100%">
                <el-select v-model="wrongDocument">
                    <el-option
                            v-for="document in documents"
                            :key="document.id"
                            :label="document.name"
                            :value="document.id">
                    </el-option>
                </el-select>
                <el-button icon="el-icon-plus" circle @click="addDocument"></el-button>
            </el-form-item>

            <el-form-item style="width: 100%">
                <el-form-item v-for="(error, i) in petition.error_set" style="width: 100%">
                    <el-col :span="4">
                        {{ error.document_id }}:{{i}}
                    </el-col>
                    <el-col :span="8">
                        <el-input v-model="error.description"></el-input>
                    </el-col>
                    <el-col :span="1">
                        <el-button icon="el-icon-close" circle @click="removeDocument(i)"></el-button>
                    </el-col>
                </el-form-item>
            </el-form-item>

        </el-form-item>
    </el-form>
</template>

<script>
    import {ElButton, ElCol, ElForm, ElFormItem, ElInput, ElOption, ElSelect} from 'element-plus';
    import {ref, reactive} from 'vue';

    let ElDatePicker;
    export default {
        props: ['typeId'],
        setup({typeId}) {
            const petition = reactive({
                student: {
                    name: 'name',
                    group: 'group',
                    course: 'course'
                },
                type: 1,
                category: 1,
                status: 1,
                date: '',
                examiner: 1,
                error_set: [
                    {
                        document_id: 1,
                        description: 'description'
                    }
                ]
            });

            const types = ref([{id: 1, name: 'type1'}, {id: 2, name: 'type2'}]);
            const studentCategories = ref([{id: 1, name: 'category1'}, {id: 2, name: 'category2'}]);

            const documents = ref([{id: 1, name: 'document1'}, {id: 2, name: 'document2'}]);

            const wrongDocument = ref('');

            const addDocument = () => {
                console.log(petition.error_set);
                petition.error_set.push({document_id: wrongDocument.value, description: ''});
            };
            const removeDocument = async (errorIndex) => {
                await petition.error_set.splice(errorIndex, 1);
            };

            return {
                petition, types, studentCategories, documents, wrongDocument, addDocument, removeDocument
            }
        },
        components: {
            ElForm,
            ElFormItem,
            ElButton,
            ElInput,
            ElSelect,
            ElOption,
            ElDatePicker,
            ElCol
        }
    }
</script>

<style scoped>

</style>