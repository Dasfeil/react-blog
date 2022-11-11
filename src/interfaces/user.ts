export interface User {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
}

export interface RUser {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
    loading: boolean;
}