import React from 'react'
import classes from './Contact.module.css'

const Contact = (props) => {
    return(
        <div className={`${classes.Container} `}>
            <span className={classes.Query}>Have a query?</span>
            <span className={classes.Feedback}>“The environment provided by Codeasylums is excellent. The mentors provide 24*7 guidance. Hackathons are a fun way of implementing.”</span>
            <span className={classes.Author}>Mohak Jain (<span className={classes.Credibility}>SDE, Salesforce</span>)</span>
            <div className={classes.Form}>
                <input className={classes.Name} placeholder="Name" />
                <input className={classes.Email} placeholder="e-Mail" />
                <input className={classes.Phone} placeholder="Phone" />
                <button className={classes.ScheduleButton}>Schedule a call</button>
            </div>
            <div className={classes.DivLineHorizontal}></div>
        </div>
    )
}

export default Contact
