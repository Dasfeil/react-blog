import axios from 'axios'
import { AFilter, Articles } from '../interfaces/article'
import User from '../interfaces/user'

axios.defaults.baseURL = 'https://api.realworld.io/api'

export async function getArticles(filters: AFilter): Promise<Articles> {
    const response = await axios.get('articles', {params: filters})
    return response.data
}

export async function login(email: string, password: string): Promise<User> {
    const response = await axios.post('users/login', {user: {email, password}})
    return response.data
}

export async function register(username: string, email: string, password: string): Promise<User> {
    const response = await axios.post('users', {user: {username, email, password}})
    return response.data
}

export async function getUser(auth: string): Promise<User> {
    const response = await axios.get('user', {headers: {
        'Authorization': 'Bearer ' + auth
    }})
    return response.data
}