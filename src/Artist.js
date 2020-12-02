import React from 'react'
import './Artist.css'

function Artist(props) {

    const imageURL =
        "https://tse2.mm.bing.net/th?q=%27" +
        props.artistName +
        "%27%20artist+spotify.com&w=300&h=300&c=7&rs=1&..."

    return (
        <div className="artist-info">
            <div className="gradientOverlay">
                <img src={imageURL} alt={props.artistName} />
            </div>
            <span>{props.artistName}</span>
            <p>{props.playcount} plays</p>
        </div>
    )
}

export default Artist