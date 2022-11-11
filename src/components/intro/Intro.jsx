import React from 'react';
import "./intro.css"
import Art from '../../img/art.jpg'

function Intro() {
  return (
    <div className="intro">
    <div className="intro-left">
        <div className="intro-left-wrapper">
            <h2 className="i-intro">Hello, my name is</h2>
            <h2 className="i-name">Hunter Adams</h2>
            <div className="intro-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Content Creator</div>
                    <div className="i-title-item">UI/UX Designer</div>
                </div>
            </div>
            <p className="i-description">
                    I am a junior software developer that loves to solve problems. I have a passion for learning new technologies, as well as creating anything with Javascript and React!
                </p>
        </div>
    </div>
    <div className="intro-right">
      <div className="i-bg"></div>
        
    </div>
    </div>
  )
}

export default Intro;