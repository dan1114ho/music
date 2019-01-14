import React, { Component } from 'react';
import Registerform from './Registerform'
import Login from './Login'
import logo from '../assets/2018_Gethr_Logo_Full.png'
import {Menu, Modal, Header} from 'semantic-ui-react'
import './Nav.css'
import Dash from './Dash'

class Navbar extends Component {
    

    state = { activeItem: 'home' , showDashboard: null,}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    showDashboard = () => {
        this.setState({ showDashboard: true});
      }
    
    render(){

        const { activeItem,showDashboard } = this.state

          
		if (showDashboard === true) {
            return <Dash />
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
                                  <Menu.Item name='Influencers' active={activeItem === 'Influencers'} onClick={this.handleItemClick}/>
                                  <Menu.Item name='Label' active={activeItem === 'Label'} onClick={this.handleItemClick}/>
                                  <Menu.Item name='Contact Us' active={activeItem === 'Contact Us'} onClick={this.handleItemClick}/>
    
                                  <Menu.Menu position='right'>
                                      <Modal trigger = {<Menu.Item name='Login' active={activeItem === 'Login'} onClick={this.handleItemClick}/>}>
                                              <Login/>
                                      </Modal>
                                      <Modal trigger = {<Menu.Item name='Register' active={activeItem === 'Register'} onClick={this.handleItemClick}/>}>
                                      <Modal.Content>
                                              <Registerform onSubmit={() => this.showDashboard()}/>
                                      </Modal.Content>
                                       </Modal>
                                  </Menu.Menu>
                              </Menu>
                          </nav>
                      </div>
                </div> 
            )
            
          }
          
        


      }

  }
export default Navbar