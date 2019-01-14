import React, { Component } from 'react';
import logo from '../assets/2018_Gethr_Logo_Full.png'
import {Menu, Modal, Button} from 'semantic-ui-react'
import LogOut from './LogOut'
import Dash from './Dash'
import './Mission.css'
import TOS from './TOS'


class AddArtist extends Component {
    

    state = { activeItem: 'Dash' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    AddArtist = () => {
        this.setState({ AddArtist: true});
      }
    
    render(){

        const { activeItem,LogOut } = this.state

          
		if (AddArtist === true) {
            return <Dash />
          } else {
            return (
             
         <div>
        <LogOut/>
        
        <Modal trigger={<Button>Add Artist</Button>}>
                        <Modal.Header>Info</Modal.Header>
                        <Modal.Content>  
                            <Modal.Description>
                            <form action="" className="contact-form">

                            <ul>
                            <li className="profile-pic-bckgrnd">
                            <input type="file" onChange={this.handleChange}/>
                             <img className="profile-pic" src={this.state.file}/>
                            <div className="pic-text">Profile picture </div>    
                            </li>
                            <li>
                                <input type="text" placeholder="Name" />
                            </li>
                           
                            <li>
                                <input type="text" placeholder="Social Links" />
                            </li>
                           
                            <li>
                                <textarea placeholder="Description" rows="2"></textarea>
                            </li>
                            <li><TOS/></li>
                            <li>
                                <input type="submit" placeholder="Submit" />
                            </li>
                            </ul>
                                </form>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>
        
      </div>
      
            )
            
          }
          
        


      }

  }
export default AddArtist