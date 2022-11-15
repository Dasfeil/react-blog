import React from 'react'
import { Article as IArticle } from '../../interfaces/article'

interface props {
    article: IArticle,
}

const Article = ({article}: props): JSX.Element => {
    const favorite = (): void => {
    }
    return (
        <div>
            <div>
                <img src={article.author.image} className=''/>
                <div>
                    <p>{article.author.username}</p>
                    <p>{article.createdAt.toString()}</p>
                </div>
                <div>
                    <button onClick={favorite}>{article.favoritesCount}</button>
                </div>
            </div>
            <div>
                <div>
                    {article.title}
                </div>
                <div>
                    {article.description}
                </div>
            </div>
        </div>
    )
}

export default Article