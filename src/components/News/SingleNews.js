import React from 'react'
import defaultImage from '../images/default.jpg'
import {connect} from 'react-redux'
import {setNews} from '../../redux/actions/search'
function SingleNews({news, setNews}){
    const getTime = date => {
        var d = new Date(date);
        return d.toLocaleDateString() 
    }
    return (
        <div className="news">
            <div className="news-details">
                <div className="title">
                    {news.title}
                </div>
                <div className="description">
                    {news.description}
                </div>
                <a href={news.url} target="blank" className="read-more">Read more <i className="fa fa-long-arrow-alt-right"></i></a>
                <div className="time-author">
                    <p>{news.source.name}</p>
                    <p className="time">{getTime(news.publishedAt)}</p>

                </div>
            </div>
            <div className="news-image">
                <img src={ news.urlToImage || defaultImage} alt="news" />
            </div>
        </div>
    )
}

// read more option
// link to the source 
export default connect(null,{setNews})(SingleNews)