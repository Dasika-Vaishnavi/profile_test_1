import React, { Component } from 'react'
import contact from '../Components/public/image/contactlogo.png';
import mailme from '../Components/public/image/mailmeimg.png';


class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
                <h2> <strong>Vaishnavi Dasika</strong></h2>
                <h3>Looking forward to hearing from you!</h3>
                <h4>Email Id: dasikavaishnavi@gmail.com</h4>
                <a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=dasikavaishnavi@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>
                <h4>Contant Info: +91 8898895566</h4>
                <h4>website: https://dasikavaishnavi.wixsite.com/profile/</h4>

                
                


                        <a href="https://github.com/Dasika-Vaishnavi/">
                                <span className="icon fa fa-github" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://www.linkedin.com/in/vaishnavi-dasika/">
                                <span className="icon fa fa-linkedin-square"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="https://twitter.com/VaishnaviDasik1" >
                                <span className="icon fa fa-twitter"  style={{color:'antiquewhite'}}></span>
                        </a>

                
            </section>
        )
    }
}

export default Contact
