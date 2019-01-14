import React, { Component } from 'react';
import './Registerform.css'
import logo from '../assets/2018_Gethr_Logo_Full.png'
import TOS from './TOS'

class RegistrationForm extends Component {

    render(){
        return(
          <div className='form-area'>
      <div className="form_wrapper">
        <div className="form_container">
        <div className='form-logo'>
          <img src={logo} alt='Gethr Logo'></img>
        </div>
          <div className="title_container">
            <h2>Almost to Gethr</h2>
          </div>
          <div className="row clearfix">
            <div className>
            <div className="input_field checkbox_option">
              <input type="radio" name="radiogroup1" id="rd1" />
              <label htmlFor="rd1">Label</label>
              <input type="radio" name="radiogroup1" id="rd2" />
              <label htmlFor="rd2">Influencer</label>
            </div>
              <form onSubmit={this.props.onSubmit}>
                <div className="input_field"><span></span>
                  <input type="email" name="email" placeholder="Email"  />
                </div>
                <div className="input_field"> <span></span>
                  <input type="password" name="password" placeholder="Password" />
                </div>
                <div className="input_field"> <span></span>
                  <input type="password" name="password" placeholder="Re-type Password" />
                </div>
                <div>
                <div className="input_field"> <span></span>
                  <input type="url" name="social-links" placeholder="Social Links"  />
                </div>
                </div>
                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field"> <span></span>
                      <input type="text" name="name" placeholder="First Name"  />
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="input_field"> <span></span>
                      <input type="text" name="name" placeholder="Last Name"  />
                    </div>
                  </div>
                </div>
               
                <input className="button" type="submit" defaultValue="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
        )
    }
}

export default RegistrationForm