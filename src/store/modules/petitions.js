import api from "../api/api";

export default {
    namespaced: true,
    state: {
        petitions: []
    },
    getters: {
        getPetitions: state =>  state.petitions,
    },
    mutations: {
        'SET_PETITIONS'(state, petitions) {
            state.petitions = petitions;
        }
    },
    actions: {
        async loadPetitionsByType(context, typeId) {
            try {
                let data = [];
                if (typeId){
                    const response = await api.petitions.getAllByType(typeId);
                    data = response.data
                }
                context.commit('SET_PETITIONS', data);
            } catch (error) {
                // console.log(error)
            }
        }
    }
}