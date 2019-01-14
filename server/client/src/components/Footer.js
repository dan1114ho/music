import React, { Component } from 'react';
import './Nav.css'

class Footer extends Component {
    render(){
        return(
            <div className='footer'>
                <div className = 'info'>
                    <a href='#'>About Us</a>
                    <a href='#'>Blogs</a>
                    <a href='#'>Advertise</a>
                    <a href='#'>Developers</a>
                    <a href='#'>Partners</a>
                    <a href='#'>Mobile</a>
                    <a href='#'>Jobs</a>
                    <a href='#'>Help</a>
                    <a href='#'>Terms</a>
                    <a href='#'>Privacy</a>
                    <a href='#'>Policy</a>
                </div>    
                <div className = 'brand-icons'>
                    <i className="fab fa-facebook fa-2x"></i>
                    <i className='fab fa-instagram fa-2x'></i>
                    <i className="fab fa-twitter fa-2x"></i>
                    <i className="fab fa-twitch fa-2x"></i> 
                </div>
                
            </div>
        )
    }
}

export default Footer