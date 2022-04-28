import React, { Component } from 'react'
import biologo from './public/image/biopicimg.jpg'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>This is Me!</h1> 

                    <img src={biologo} width="180" height="180" alt="abtimg"/>
                    <p>I am a development enthusiast who believes that in this given dawn of an era, 
                        technology is the key to progress.
                        </p>
                    <p>    
                        I wish to dedicate myself as a front runner to making this world a better place.
                    </p>
                
            </section>
        )
    }
}

export default About
