import {computed, ref, watch} from "vue";
import {changeMod} from "../router/components/rout";

export async function useNavigation(props, store, router) {
    const types = computed(() => store.getters['baseModule/getTypes']);
    const type = ref((types.value.find(t => t.id === +props.typeId)) ? +props.typeId : '');
    const mode = ref(props.mode);

    const load = () => {
        store.dispatch('petitionsModule/loadPetitionsByType', type.value);
        console.log('refresh')
    };
    await load();

    watch(mode, (newMode) => {
        changeMod(router, type.value, newMode);
    });

    watch(type, (newType) => {
        changeMod(router, newType, mode.value);
        load();
    });

    return {
        types, type, mode, refresh: load
    }
}