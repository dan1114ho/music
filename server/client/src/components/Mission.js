import React, { Component } from 'react';
import {Button, Modal, Header} from 'semantic-ui-react'
import './Mission.css'

class Mission extends Component {
    

    render(){
        
        
        return(
            <div className = "mission-statement">
                <div className="ui raised segment">
                <div className = 'mission-content'>
                    <p>We use influencer marketing, data analytics, and machine learning to promote artists' music in the most effective and organic way possible</p>
                    <Modal trigger={<Button>Contact Us!</Button>}>
                        <Modal.Header>Connect with us</Modal.Header>
                        <Modal.Content>  
                            <Modal.Description>
                            <form action="" className="contact-form">

                            <ul>
                            <li>
                                <input type="text" placeholder="Name" />
                            </li>
                            <li>
                                <input type="text" placeholder="Email" />
                            </li>
                            <li>
                                <input type="text" placeholder="Organization" />
                            </li>
                            <li>
                                <input type="text" placeholder="Social Links" />
                            </li>
                            <li>
                                <input type="text" placeholder="Subject" />
                            </li>
                            <li>
                                <textarea placeholder="Message" rows="2"></textarea>
                            </li>
                            <li>
                                <input type="submit" placeholder="Submit" />
                            </li>
                            </ul>
                                </form>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>
                </div>
                
                </div>
            </div>
        )
    }
}

export default Mission