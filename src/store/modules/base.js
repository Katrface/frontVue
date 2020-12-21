import api from "../api/api";

export default {
    namespaced: true,
    state: {
        typesOfPetitions: []
    },
    getters: {
        getTypes: state =>  state.typesOfPetitions,
    },
    mutations: {
        'SET_TYPES'(state, types) {
            state.typesOfPetitions = types;
        }
    },
    actions: {
        async loadTypes(context) {
            try {
                // await new Promise(resolve => setTimeout(resolve, 5000));
                const response = await api.typeOfPetitions.getAll();
                context.commit('SET_TYPES', response.data);
            } catch (error) {
                throw new Error("error in loadType");
            }
        }
    }
}