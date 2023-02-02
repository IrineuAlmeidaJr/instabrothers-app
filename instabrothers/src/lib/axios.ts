import axios from "axios"
import { Platform } from "react-native"

export const api = axios.create({
    baseURL: "https://instabrothers-api.onrender.com/"
    // baseURL: "http://127.0.0.1:5000/"
    // baseURL: Platform.OS === 'android' ? 'http://10.0.2.2:5000' : 'http://localhost:5000'
})