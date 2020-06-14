import {SEARCH, SET_NEWS_LIST, SET_COUNTRY, SET_NEWS} from './action.types'

export function search(query){
    return {
        type : SEARCH,
        payload : query
    }
}

export function setNewsList(newsList){
    return {
        type : SET_NEWS_LIST,
        payload : newsList
    }
}

export function setCountry(country){
    return {
        type : SET_COUNTRY,
        payload : country
    }
}
export function setNews(news){
    console.log(news)
    return {
        type : SET_NEWS,
        payload : news
    }
}