import React from 'react'
import classes from './Footer.module.css'
import Contact from '../Contact/Contact'

const Footer = (props) => {
    return(
        <div className={classes.Container}>
            <Contact />
            <div className={classes.Footer}>

                <div className={classes.Column}>
                    <span className={classes.Title}>COURSES</span>
                    <a className={classes.Item}>Full Stack Development</a>
                    <a className={classes.Item}>Adv. Full Stack Development</a>
                    <a className={classes.Item}>Data Structures and Algorithms</a>
                    <a className={classes.Item}>Competitive Programming & Advanced DSA</a>
                    <a className={classes.Item}>Data Science and Engineering</a>
                </div>
                <div className={classes.Column}>
                    <span className={classes.Title}>ABOUT US</span>
                    <a className={classes.Item}>About CodeAsylums</a>
                    <a className={classes.Item}>Meet the Team</a>
                    <a className={classes.Item}>Jobs</a>
                    <a className={classes.Item}>Become a mentor</a>
                </div>
                <div className={classes.Column}>
                    <span className={classes.Title}>CONTACT</span>
                    <span className={classes.Item}>Mail us :</span>
                    <a className={classes.Item}>info@codeasylums.com</a>
                    <span className={classes.Item}>Call Us :</span>
                    <a className={classes.Item}>+918884404844</a>
                </div>
                <div className={classes.Column}>
                    <span className={classes.Title}>FOLLOW US</span>
                    <a className={classes.Item}>Like us on Facebook</a>
                    <a className={classes.Item}>Follow us on Twitter</a>
                    <a className={classes.Item}>Follow us on Instagram</a>
                    <a className={classes.Item}>Read our stories on Medium</a>
                </div>

            </div>
            <div className={classes.Bottom}>
                <span>©CodeAsylums 2020</span>
            </div>
        </div>
    )
}

export default Footer