import React from 'react'
import './Home.css'
import Hero from './Assets/hero.jpg'
import { Parallax } from 'react-parallax'

function Home() {

    const age = 31

    return (
        <div className="home">
            <Parallax blur={2} bgImage={Hero} bgImageAlt="Hero" strength={200}>
                <div id="header">
                    <div>
                        <div id="title">NICKLAS PEKKARINEN</div>
                    </div>
                </div>
            </Parallax>

            <div id="about">
                <h6>–– About me</h6>
                <p>
                    I'm a
    <span className="emphasis"> {age > 30 ? "finely aged" : "30 year old"}</span> programmer based in Gothenburg, Sweden. I'm currently studying app development at IT-Högskolan where I'm learning languages such as
                    <span className="emphasis"> Java</span>,
                    <span className="emphasis"> Swift</span>,
                    <span className="emphasis"> Objective C</span>,
                    <span className="emphasis"> Javascript</span>, C# as well as frameworks such as
                    <span className="emphasis"> Vue.js</span>,
                    <span className="emphasis"> Xamarin</span> and
                    <span className="emphasis"> React Native</span>.
                </p>
            </div>
            <div id="interests">
                <h6>–– My interests</h6>
                <h1>
                    <span className="emphasis">Music</span> is my passion.
                </h1>
                <p>
                    <br />
                    <br />I've been making music for more than half my life so it is without a doubt my number one interest. I'm also really into movies, books and the arts in general, as well as some gaming when time permits.
                    <br />
                    <br />I'm really keen on combining my interest in music with programming and as someone who has been using music production software for a really long time and really enjoys experimenting with it it's a field I can't wait to get into.
                </p>
            </div>
            <div id="portfolio">
                <h6>–– Portfolio</h6>
                <a href="https://www.github.com/nicklaspekkarinen">GitHub</a>
                <p>My portfolio mostly consists of school assignments right now but I will be working on my own projects slowly but surely so watch this space.</p>
            </div>
        </div>
    )
}

export default Home