import React, {useEffect} from 'react'
import axios from 'axios'
import {API_KEY} from '../../conf'
import {connect} from 'react-redux'
import {setNewsList} from '../../redux/actions/search'
import NewsContainer from '../News/NewsContainer'


function TopHeadlines({query, country, setNewsList}) {
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?pageSIze=10&q=${query}&country=${country}&apiKey=${API_KEY}`)
        .then(res => {
            setNewsList(res.data.articles || [])
        })
        return () => {
           
        }
    }, [query, setNewsList, country])
    return (
        <div className="headlines">
            <h2>Headlines</h2>
            <NewsContainer />
        </div>
    )
}
const mapStateToProps = store => ({query : store.search.query,country : store.search.country})
export default connect(mapStateToProps,{setNewsList})(TopHeadlines)
