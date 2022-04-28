import React, { Component } from 'react'
import pybot from '../Components/public/image/pybot.png';
import Opencv from '../Components/public/image/Snapshot.png';
import NightMares from '../Components/public/image/menu3.png';
import RecorderMaintainer from '../Components/public/image/de.png';
import WordPress from '../Components/public/image/blog.png';
import Password from '../Components/public/image/bute.png';




class Portfolio extends Component {
    render() {
        return (
            
            <section className="projects">
                  <h1 id='Portfolio'>Portfolio</h1>
                  <p>I strongly belive that incorporating multi-disciplinary elements of life in cumulation with technology is the key to progress. Thus, most of my projects focus on fulfilling my vision in arenas of user-centric design, social development, artistic and cultural upliftment.</p>

                    <div className="container">
                        <a href="https://github.com/Dasika-Vaishnavi/Bhoomi"><img src={pybot} width="200" height="200" alt="Pybot"/><p>Project Bhoomi</p></a>
                        <a href="https://github.com/Dasika-Vaishnavi/Google_Developer_Groups_Lethoso"><img src={Opencv} width="200" height="200" alt="Pybot"/><p>Project Pheha</p></a>
                        <a href="https://www.canva.com/design/DAEqEys7SBI/VdvZT8vdMSAF856p6tNI1w/view?utm_content=DAEqEys7SBI&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"><img src={NightMares} width="200" height="200" alt="Pybot"/><p>Project Silpi</p></a>
                    </div>

                    <div className="container">
                        <a href="https://github.com/Dasika-Vaishnavi/Wave2Web_forecast"><img src={RecorderMaintainer} width="200" height="200" alt="Pybot"/><p>Wave2Web Forecast </p></a>
                        <a href="https://www.canva.com/design/DAE73AUyZ3E/1KNlxIPqRslg6IXwp4o8JA/view?utm_content=DAE73AUyZ3E&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"><img src={WordPress} width="200" height="200" alt="Pybot"/><p>Project Dharma</p></a>
                        <a href="https://r2s.exchange/2021/reports/03/"><img src={Password} width="200" height="200" alt="Pybot"/><p>Project Sujala</p></a>
                    </div>

                       
            </section>
        )
    }
}

export default Portfolio


