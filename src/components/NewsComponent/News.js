import React, {useEffect} from 'react'
import axios from 'axios'
import {API_KEY} from '../../conf'
import {connect} from 'react-redux'
import {setNewsList} from '../../redux/actions/search'
import NewsContainer from '../News/NewsContainer'


function News({query, country, setNewsList}) {
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=${query || "MERN"}&apiKey=${API_KEY}`)
        .then(res => {
            setNewsList(res.data.articles || [])
        })
        return () => {
           
        }
    }, [query, setNewsList, country])
    return (
        <div className="headlines">
            <p className="description">searches realted to {query}</p>
            <NewsContainer />
        </div>
    )
}
const mapStateToProps = store => ({query : store.search.query,country : store.search.country})
export default connect(mapStateToProps,{setNewsList})(News)
