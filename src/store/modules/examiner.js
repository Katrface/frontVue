import api from "../api/api";

export default {
    namespaced: true,
    state: {
        examiners: []
    },
    getters: {
        getExaminers: state => state.examiners
    },
    mutations: {
        'SET_EXAMINERS'(state, examiners) {
            state.examiners = examiners;
        },
        'ADD_EXAMINER'(state, examiner) {
            state.examiners.push(examiner);
        },
        'EDIT_EXAMINER'(state, examiner) {
            const item = state.examiners.find(item => item.id === examiner.id);
            Object.assign(item, examiner);
        },
        'REMOVE_EXAMINER'(state, examiner) {
            const index = state.examiners.findIndex(item => item.id === examiner.id);
            state.examiners.splice(index, 1);
        }
    },
    actions: {
        async loadExaminers(context) {
            const response = await api.examiner.getAll();
            context.commit('SET_EXAMINERS', response.data);
        },
        async loadById(context, id) {
            const response = await api.examiner.getOne(id);
            return response.data;
        },
        async add(context, item) {
            try {
                const response = await api.examiner.add(item);
                context.commit('ADD_EXAMINER', response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async edit(context, item) {
            try {
                const response = await api.examiner.edit(item.id, item);
                context.commit('EDIT_EXAMINER', response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async remove(context, id) {
            try {
                const response = await api.examiner.deleteById(id);
                context.commit('REMOVE_EXAMINER', response.data);
            } catch (error) {
                console.log(error);
            }
        }
    }
}