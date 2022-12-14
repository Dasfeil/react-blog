import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { articleSlice } from '../../redux/articles/slice'
import Article from '../../components/Article'
import ArticleForm from '../../components/ArticleForm'

const Home = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const articles = useAppSelector(state => state.articles)
    const token = useAppSelector(state => state.user.token)
    const [active, setActive] = useState(token !== null?'local':'global')
    const [form, setForm] = useState(false)
    React.useEffect(() => {
        if (token !== null)
            dispatch(articleSlice.actions.getFeedArticle({auth: token}))
        else
            dispatch(articleSlice.actions.getArticle({})) 
    }, [])

    const getLocalFeed = (): void => {
        setActive('local')
        dispatch(articleSlice.actions.getFeedArticle({auth: token}))
    } 

    const getGlobalFeed = (): void => {
        setActive('global')
        dispatch(articleSlice.actions.getArticle({}))

    }

    const logged = token !== null

    return (
        <>
            <div>
                {logged && <button className={active==='local'? 'bg-blue-500': 'bg-white'}
                    onClick={getLocalFeed}>
                        Your Feed
                </button>}
                <button className={active==='global'? 'bg-blue-500': 'bg-white'}
                onClick={getGlobalFeed  }>
                    Global Feed
                </button>
                {logged && <button type='button' onClick={() => setForm(true)}>Create article</button>}
            </div>
            {!form? !articles.loading &&
            <div className='m-auto w-[70%] bg-[#e6e6e6]'> 
                <div>
                    {articles.articles.map((a)=> (
                        <Article key={a.title + a.author.username} article={a}/>
                    ))}
                </div>
            </div> : 
            <div>
                <ArticleForm/>
                <button type='button' onClick={() => setForm(false)}>Cancel</button>
            </div>}
        </>
    )
}

export default Home