import React, { Component } from 'react';
import './Registerform.css'
import logo from '../assets/2018_Gethr_Logo_Full.png'




class Login extends Component {
    render(){
        return(
          <div>
      <div className="form_wrapper">
        <div className="form_container">
        <div className='form-logo'>
          <img src={logo} alt='Gethr Logo'></img>
        </div>
          <div className="title_container">
            <h2>Login</h2>
          </div>
          <div className="row clearfix">
            <div className>
              <form>
                <div className="input_field"> <span></span>
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="input_field"> <span></span>
                  <input type="password" name="password" placeholder="Password" required />
                </div>
                <input className="button" type="submit" defaultValue="Login" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
        )
    }
}

export default Login