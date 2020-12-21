import {createRouter, createWebHistory} from 'vue-router'
import TablePetitions from "../views/tables/TablePetitions";
import TableErrors from "../views/tables/TableErrors";
import Header from "../views/Header";
import CreateFormPetition from "../views/forms/CreateFormPetition";
import UpdateFormPetition from "../views/forms/UpdateFormPetition";
import TableExaminer from "../views/tables/TableExaminer";
import DetailExaminer from "../views/forms/DetailExaminer";
import CreateExaminer from "../views/forms/CreateExaminer";

const routes = [
    {
        path: '/:typeId(\\d+)?',
        name: 'petitions',
        components: {
            Head: Header,
            Main: TablePetitions
        },
        props: {
            Head: (route) => ({
                modeP: 'Заявления',
                typeId: route.params.typeId
            })
        },
    },
    {
        path: '/errors/:typeId(\\d+)?',
        name: 'errors',
        components: {
            Head: Header,
            Main: TableErrors
        },
        props: {
            Head: (route) => ({
                modeP: 'Ошибки',
                typeId: route.params.typeId
            })
        }
    },
    {
        path: '/petition/create',
        name: 'petitionCreate',
        components: {
            Main: CreateFormPetition
        },
        props: true,
    },
    {
        path: '/petition/:id(\\d+)',
        name: 'petitionDetail',
        components: {
            Main: UpdateFormPetition
        },
        props: true,
    },
    {
        path: '/examiner',
        name: 'TableExaminer',
        components: {
            Head: Header,
            Main: TableExaminer
        },
        props: {
            Head: {
                modeP: 'Проверяющие'
            }
        }
    },
    {
        path: '/examiner/:id(\\d+)',
        name: 'ExaminerDetail',
        components: {
            Main: DetailExaminer
        },
        props: true,
    },
    {
        path: '/examiner/create',
        name: 'ExaminerCreate',
        components: {
            Main: CreateExaminer
        },
    },
    // {
    //     path: '*',
    //     name: 'main'
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router
