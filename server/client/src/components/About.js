import React, { Component } from 'react';
import {Button, Modal, Header} from 'semantic-ui-react'
import './About.css'
import Register from './Registerform'


class About extends Component {
    render(){
        return(
            <div>
                <h1>If you're an...</h1>
                <div className="about-wrapper">
                <div className = "mission-statement">
                 <div className="ui raised segment" id='mission-statement-box'>
                    <h1>Influncer</h1>
                    <h2>I want songs for my video content</h2>
                    <p>You are an influencer with tens of thousands of followers but want to improve your production 
                    quality as well as further monetize your audience. We curate music that you and your fans like and 
                    pay you support those artists!</p>  
                    
                    <div className='join-us-button'>
                        <Modal trigger={<Button>Join us now!</Button>}>
                            <Modal.Content>  
                            <Register/>
                            </Modal.Content>
                        </Modal>
                    </div>

                </div>
                </div>
                    
                    <div className = "mission-statement">
                    <div className="ui raised segment" id='mission-statement-box'>
                    <h1>Label</h1>
                    <h2>I want to promote my music</h2>
                    <p>As artists ourselves, we understand the struggle of figuring out how to show your music to the world.
                    So we built a platform to music to show your music to people it will mean the world to. We find what potential
                    fans like to watch and put your music in those videos. Your exposure is all based on what you can afford
                    we got you covered from 1000 impressions to 1M+.</p>  
                   
                    <div className='join-us-button'>
                        <Modal trigger={<Button>Join us now!</Button>}>
                            <Modal.Content>  
                            <Register/>
                            </Modal.Content>
                        </Modal>
                    </div>

                </div>
                     </div>
                </div>
            </div>
        )   
    }
}

export default About