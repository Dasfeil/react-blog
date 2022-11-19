export interface Article {
    slug: string,
    title: string,
    description: string,
    body: string,
    tagList: string[],
    createdAt: Date,
    updatedAt: Date,
    favorited: boolean,
    favoritesCount: number,
    author: {
        username: string,
        bio: string,
        image: string,
        following: boolean
    }
}

export interface CArticle {
    title: string,
    description: string,
    body: string,
    tagList?: string[]
}

export interface Articles {
    articles: Article[],
    articlesCount: number
}

export interface AFilter {
    tag?: string,
    author?: string,
    favorited?: string,
    limit?: number,
    offset?: number
}

export interface FeedFilter {
    auth: string,
    limit?: number,
    offset?: number
}