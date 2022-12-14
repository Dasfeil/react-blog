import axios from 'axios'
import { FeedFilter, AFilter, Articles } from '../interfaces/article'
import { User } from '../interfaces/user'

axios.defaults.baseURL = 'https://api.realworld.io/api'

export async function getArticles(filters: AFilter): Promise<Articles> {
    const response = await axios.get('articles', {params: filters})
    return response.data
}

export async function getFeedArticles(arg: FeedFilter): Promise<Articles> {
    const auth: string = arg.auth
    const response = await axios.get('articles/feed', {params: {limit: arg.limit, offset: arg.offset}, 
        headers: {
            'Authorization': 'Bearer ' + auth
        }})
    return response.data
}

export async function login(email: string, password: string): Promise<User> {
    const response = await axios.post('users/login', {user: {email, password}})
    return response.data.user
}

export async function register(username: string, email: string, password: string): Promise<User> {
    const response = await axios.post('users', {user: {username, email, password}})
    return response.data.user
}

export async function getUser(auth: string): Promise<User> {
    const response = await axios.get('user', {headers: {
        'Authorization': 'Bearer ' + auth
    }})
    return response.data.user
}

export async function updateUser(auth: string, user: {email: string, bio: string, image: string}): Promise<User> {
    const response = await axios.put('user', {user}, {headers: {
        'Authorization': 'Bearer ' + auth}})
    return response.data.user
}