import axios from "axios";
import {API_URL_V1} from "./config";

export function getAll(resourceUrl) {
    return axios({
        url: `${API_URL_V1}/${resourceUrl}`,
        method: "GET"
    });
}

export function getOne(resourceUrl, id) {
    return axios({
        url: `${API_URL_V1}/${resourceUrl}/${id}/`,
        method: "GET"
    });
}

export function add(resourceUrl, item) {
    return axios({
        url: `${API_URL_V1}/${resourceUrl}/`,
        method: "POST",
        data: item
    });
}

export function edit(resourceUrl, id, item) {
    return axios({
        url: `${API_URL_V1}/${resourceUrl}/${id}/`,
        method: "PUT",
        data: item
    });
}

export function deleteById(resourceUrl, id) {
    return axios({
        url: `${API_URL_V1}/${resourceUrl}/${id}/`,
        method: "DELETE"
    });
}

export default {
    getAll, getOne, add, edit, deleteById
}