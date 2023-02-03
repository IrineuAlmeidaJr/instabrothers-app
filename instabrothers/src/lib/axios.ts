import axios from "axios"

const api = axios.create({
    // baseURL: "https://instabrothers-api.onrender.com/"
    baseURL: "http://127.0.0.1:5000/"
})

export const apiGetAllBrothers = api.get("brothers");

export const apiGetDetailsBrother = (name: string) => api.get(`brother/${name}`)

export const apiGetRanking = api.get("ranking");
