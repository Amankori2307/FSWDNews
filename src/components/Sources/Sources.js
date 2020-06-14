import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY } from '../../conf'

function Sources() {
    const [sources, setSources] = useState([])
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`)
        .then(res => {
            setSources(res.data.sources)
        })
    },[])
    return (
        <div className ="sources">
            {sources?sources.map(source => <div key={source.id} className="source">
                <p className="title">{source.name} </p>
                <p className="description">{source.description} </p>
                <a href={source.url} className="url">Go to </a>
                <div className="details">
                    <p className=""><span className="dark">Country - </span>{source.country}</p>
                    <p className=""><span className="dark">Category - </span>{source.category}</p>
                    <p className=""><span className="dark">Language - </span>{source.language}</p>
                </div>
            </div>):
            "Nothing found"}
        </div>
    )
}
export default Sources