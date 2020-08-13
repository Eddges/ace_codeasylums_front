import React from 'react'
import classes from './Navbar.module.css'
import Logo from '../../assets/logo.png'

class Navbar extends React.Component{
    render(){
        return(
            <div className={classes.Container}>
                <div className={classes.Logo}>
                    <img src={Logo} alt="Logo" />
                </div>
                {/* <div className={classes.Explore}>
                    <span>Explore</span>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </div> */}
                <div className={classes.NavMid}>
                    <a>COURSES<ion-icon name="chevron-down-outline"></ion-icon></a>
                    <a>ABOUT</a>
                    <a>CONTACT</a>
                    <a>TEAM</a>
                </div>
                <div className={classes.NavRight}>
                    <button className={classes.Mentor}>Apply as Mentor</button>
                    <button className={classes.Callback}>Request Callback</button>
                    
                </div>
            </div>
        )
    }
}

export default Navbar