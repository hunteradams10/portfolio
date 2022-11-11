import React from 'react'
import './about.css'
import Me from '../../img/me_edited.jpg'

function About() {
  return (
    <div className="about">
        <div className="about-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img className='a-img' src={Me} alt="" />
            </div>
        </div>
        <div className="about-right">
            <div className="about-title">
                <h1>About Me...</h1>
                <p className="about-text">
                    I am a web development student that is always looking out for new challenges. My other addictions include anything to do with music, Brazilian Jiu Jitsu, video games and writing.
                </p>

            </div>
        </div>
    </div>
  )
}

export default About