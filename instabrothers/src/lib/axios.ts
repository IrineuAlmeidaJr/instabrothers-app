import axios from "axios"

const api = axios.create({
    baseURL: "https://instabrothers-bbb-api.onrender.com"
    // baseURL: "http://127.0.0.1:5000/"
})

export const apiGetAllBrothers = api.get("brothers");

export const apiGetCompareFollowers = api.get("brother/compare-followers");

export const apiGetDetailsBrother = (name: string) => api.get(`brother/${name}`)

export const apiGetRanking = api.get("ranking");

export const apiGetNews = api.get("news");
