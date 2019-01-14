import React, { Component } from 'react';
import './Partner.css'
import Artist from '../assets/artist-agency.jpg'
import Peacetones from '../assets/peacetones.jpg'
import Edm from '../assets/edm.png'
import Twitch from '../assets/twitch.jpg'


class Partner extends Component {
    render(){
        return(
            <div className = 'partners'>
                <div className="partner-title">
                    <h1>Proud Partners of</h1>
                    </div>
                    <div className="partner-img-wrapper">
                    <a href="https://portal.artistintelligence.agency/" target="_blank"><img className="partner-img" src={Artist} alt="artist itelligence agency"></img></a>
                    <a href="https://peacetones.org/" target="_blank"><img className="partner-img" src={Peacetones} alt="peacetones"></img></a>
                    <a href="https://edm.com/" target="_blank"><img className="partner-img" src={Edm} alt="edm.com"></img></a>
                    <a href="https://www.twitch.tv/" target="_blank"><img className="partner-img" src={Twitch} alt="twitch"></img></a>
                   </div>
                
            </div>
        )   
    }
}

export default Partner