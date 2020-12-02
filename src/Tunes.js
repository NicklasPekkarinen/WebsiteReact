import React from 'react'
import './Tunes.css'
import { useEffect, useState } from 'react'
import Artist from './Artist.js'

function Tunes() {
    const [artists, setArtists] = useState([])
    const [period, setPeriod] = useState(30)
    const handleClick = () => {
        if (period === 30) {
            setPeriod(90)
        } else {
            setPeriod(30)
        }
    }

    useEffect(() => {
        if (period === 30) {
            fetch(
                "https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=tenniscoat&period=1month&limit=12&api_key=b906a1c9e5955e0c3502f72c8ae35561&format=json"
            )
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    setArtists(result.topartists.artist)
                });
        } else {
            fetch(
                "https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=tenniscoat&period=3months&limit=12&api_key=b906a1c9e5955e0c3502f72c8ae35561&format=json"
            )
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    setArtists(result.topartists.artist)
                });
        }
    }, [period])

    return (
        <div className="tunes">
            <div id="tunes-container">
                <h1>
                    These are some of the
                    <span className="emphasis"> artists</span> I've been listening to for the past
                    <span className="emphasis" onClick={handleClick}> {period}</span> days...
                </h1>
                <div id="artists-container">
                    <div className="artist-container">
                        {artists.map((artist) => (
                            <Artist artistName={artist.name} playcount={artist.playcount} key={artist.mbid}></Artist>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tunes