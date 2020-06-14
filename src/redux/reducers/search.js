import {SEARCH, SET_NEWS_LIST, SET_COUNTRY, SET_NEWS} from '../actions/action.types'

const initialState = {
    country:'in',
    query:"",
    newsList:[],
    selectedNews:null
}
export default function (state = initialState, action){
    switch(action.type){
       case SEARCH:
           return {
               ...state,
               query : action.payload
           }
        case SET_NEWS_LIST:
            return {
                ...state,
                newsList:action.payload
            }
        case SET_COUNTRY:
            return {
                ...state,
                country:action.payload
            }
        case SET_NEWS:
            console.log(action)
            return {
                ...state,
                selectedNews:action.payload
            }
        default:
            return state 
    }
}