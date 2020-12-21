import axios from "axios";
import {API_URL_V1} from "./config";
import defApi, {add, deleteById, edit, getAll, getOne} from './defaultApiMethods'

const TYPE_OF_PETITION = "types";
const PETITION_URL = "petitions";
const EXAMINER_URL = "examiner";

export default {
    typeOfPetitions: {
        getAll() {
            return defApi.getAll(TYPE_OF_PETITION);
        }
    },
    examiner: {
        getAll() {
            return defApi.getAll(EXAMINER_URL);
        },
        getOne(id) {
            return defApi.getOne(EXAMINER_URL, id);
        },
        add(item) {
            return defApi.add(EXAMINER_URL, item);
        },
        edit(id, item) {
            return defApi.edit(EXAMINER_URL, id, item);
        },
        deleteById(id) {
            return defApi.deleteById(EXAMINER_URL, id);
        }
    },
    petitions: {
        getAllByType(typeId) {
            return axios({
                url: `${API_URL_V1}/${PETITION_URL}/${typeId}`,
                method: "GET"
            });
        }
    }
};