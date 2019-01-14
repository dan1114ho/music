import React, { Component } from 'react';
import {Button, Modal} from 'semantic-ui-react'
import './Dash.css'
import TOS from './TOS'
import LogOut from './LogOut'


class Dash extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (<div>
        <LogOut/>
        <div>
        <h1>Welcome</h1>
        <Modal trigger={<Button>Add Artist</Button>}>
                        <Modal.Header>Add Group/Artist</Modal.Header>
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
      </div>
    );
  }
}





export default Dash