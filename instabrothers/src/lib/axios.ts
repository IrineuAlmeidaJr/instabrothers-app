import axios from "axios"

export const api = axios.create({
    baseURL: "https://instabrothers-api.onrender.com/"
})