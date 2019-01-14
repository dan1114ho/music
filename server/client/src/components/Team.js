import React, { Component } from 'react';
import './team.css'
import Massey from '../assets/massey.jpeg'
import Kevin from '../assets/kevin.png'
import Owais from '../assets/owais.jpeg'
import Christina from '../assets/christina.jpeg'
import Joe from '../assets/joe.jpeg'

class Team extends Component {
    render(){
        return(
             <div className='team-container'>  
                <div>
                    <h1>Our Team:</h1>
                </div>
                <div className='team-list'>
                    <div>
                        <img className="team-member" src={Massey}></img>
                    </div>
                    <div>
                        <img className="team-member" src={Owais}></img>
                    </div>
                    <div>
                        <img className="team-member" src={Christina}></img>
                    </div>
                    <div>
                        <img className="team-member" src={Kevin}></img>
                    </div>
                    <div>
                        <img className="team-member" src={Joe}></img>
                    </div>
                    
                </div>
            </div> 
        )   
    }
}

export default Team