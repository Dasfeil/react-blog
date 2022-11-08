import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { articleSlice } from '../../redux/articles/slice'

const Home = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const articles = useAppSelector(state => state.articles)
    React.useEffect(() => {
        dispatch(articleSlice.actions.getArticle({}))
    }, [])
    return (
        <div className='m-auto w-[70%] bg-[#e6e6e6] columns-2 gap-1'>
            <div className='w-[70%]'>
                {articles.articles.length !== 0 && articles.articles.map((a) => (<div key={a.title}>{a.title}</div>))}
            </div>
            <div className='w-[20%]'>
            </div>
        </div>
    )
}

export default Home