import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import TopHeadlines from './components/TopHeadlines/TopHeadlines'
import './style.css'
import Search from './components/Search/Search'
import CountrySelect from './components/CoutrySelect/CountrySelect'
import News from './components/NewsComponent/News'
import Sources from './components/Sources/Sources'
function NewsApp() {
    return (
        <Router>
            <div className="container">
                <h1>FSWD News</h1>
                <Navbar />
                <Search />
                <CountrySelect />
                <Switch >
                    <Route path="/top-headlines" component={TopHeadlines}/>
                    <Route path="/news" component={News}/>
                    <Route path="/sources" component={Sources}/>
                </Switch>
            </div>
        </Router>
    )
}
export default NewsApp