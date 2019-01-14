import React, { Component } from 'react';
import Registerform from './Registerform'
import Login from './Login'
import logo from '../assets/2018_Gethr_Logo_Full.png'
import {Menu, Modal, Header} from 'semantic-ui-react'
import './Nav.css'
import Dash from './Dash'
import Nav from './Nav'

class LogOut extends Component {
    

    state = { activeItem: 'home' , LogOut: null,}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    LogOut = () => {
        this.setState({ LogOut: true});
      }

      
    
    render(){

        const { activeItem,LogOut } = this.state

          
		if (LogOut === true) {
            return <Nav />
          } else {
            return (
              <div className = 'header'> 
                      <div className='logo'>
                          <img src={logo} alt='Gethr Logo'></img>
                      </div>
    
                      <div className='nav'>
                          <nav>
                              <Menu pointing secondary>
                                  <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                                  <Menu.Item name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick}/>
                                  <Menu.Item name='Contact Us' active={activeItem === 'Contact Us'} onClick={this.handleItemClick}/>
    
                                  <Menu.Menu position='right'>
                                  <Menu.Item name='Log Out' active={activeItem === 'Log Out'} onClick={() => this.LogOut()}/>
                                      
                                             
                            
                                  </Menu.Menu>
                              </Menu>
                          </nav>
                      </div>
                </div> 
            )
            
          }
          
        


      }

  }
export default LogOut