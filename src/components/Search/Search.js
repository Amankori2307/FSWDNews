import React, {useState} from 'react'
import {connect} from 'react-redux'
import {search} from '../../redux/actions/search'
function Search({search}) {
    const [query, setQuery] = useState("")
    const onSubmit = (e) => {
        e.preventDefault();
        search(query);
        setQuery("");

    }
    const onChange =e => {
        setQuery(e.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="search" placeholder="Search..." value={query} onChange={onChange}/>
            <button type="submit">Search</button>
        </form>
    )
}
export default connect(null,{search})(Search) 