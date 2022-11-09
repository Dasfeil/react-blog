import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { articleSlice } from '../../redux/articles/slice'

const Home = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const articles = useAppSelector(state => state.articles)
    const [active, setActive] = useState('global')
    const token = false
    React.useEffect(() => {
        dispatch(articleSlice.actions.getArticle({}))
    }, [])
    return (
        <>
            <div>
                {token && <button className={active==='local'? 'bg-blue-500': 'bg-white'}
                    onClick={() => setActive('local')}>
                        Your Feed
                </button>}
                <button className={active==='global'? 'bg-blue-500': 'bg-white'}
                onClick={() => setActive('global')}>
                    Global Feed
                </button>
            </div>
            <div className='m-auto w-[70%] bg-[#e6e6e6] columns-2 gap-1'>
                {active === 'global' && 
                <div>
                    {articles.articles.map((m)=> (
                        <div key={m.slug}>
                            {m.title}
                        </div>
                    ))}
                </div>}
            </div>
        </>
    )
}

export default Home