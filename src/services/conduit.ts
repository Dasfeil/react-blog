import axios from 'axios'
import { AFilter, Articles } from '../interfaces/article'
import User from '../interfaces/user'

axios.defaults.baseURL = 'https://api.realworld.io/api'

export async function getArticles(filters: AFilter): Promise<Articles> {
    const response = await axios.get('articles', {params: filters})
    return response.data
}

export async function login(email: string, password: string): Promise<User> {
    try {
        const response = await axios.post('users/login', {email, password})
        return response.data
    } catch (error: any) {
        console.log(error)
        return error.response
    }
}

export async function register(username: string, email: string, password: string): Promise<User> {
    try {
        const response = await axios.post('users/login', {username, email, password})
        return response.data
    } catch (error: any) {
        console.log(error)
        return error.response
    }
}