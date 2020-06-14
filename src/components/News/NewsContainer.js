import React from 'react'
import {connect} from 'react-redux'
import SingleNews from './SingleNews'

function NewsContainer({newsList}) {
    return (
        <div className="news-container">
            {
                newsList? 
                newsList.map((news, index) => <SingleNews news={news} key={index}/>):
                <h1>No Headlines Found</h1>    
            }
        </div>
    )
}

const mapStateToProps = store => (
    {
    newsList: store.search.newsList,
})
export default connect(mapStateToProps)(NewsContainer)