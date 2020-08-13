import React from 'react'
import classes from './Goals.module.css'
import student from '../../assets/student.jpg'
import bg from '../../assets/bg.jpg'
import support from '../../assets/support.jpg'


const Goals = (props) => {
    return(
        <div className={`${classes.Container} `}>
            <span className={classes.Reach}>Reach your <span className={classes.Highlite}>goals.</span></span>
            <span className={classes.GoalsDescription}>Whether you want to communicate better with developers, drastically change your career path or complete your education, a coding bootcamp is probably the right choice.</span>
            <div className={classes.CardsContainer}>

                <div className={classes.Card}>
                    {/* <div className={classes.CardHoverLine}></div> */}
                    <div className={classes.CardImage}>
                        <img src={student} alt="StudentImage" />
                    </div>
                    <span className={classes.CardTitle}>Quality</span>
                    <span className={classes.CardDescription}>Consistent quality throughout the courses in order to prepare the professionals for the current industry standards in technology and practices</span>
                    <div className={classes.CardLine}></div>
                </div>

                <div className={classes.Card}>
                    <div className={classes.CardImage}>
                        <img src={bg} alt="StudentImage" />
                    </div>
                    <span className={classes.CardTitle}>Up to date</span>
                    <span className={classes.CardDescription}>We only mentor technologies that are in-demand and used by the industries and not obsolete ones, helping you make the most out of your time</span>
                    <div className={classes.CardLine}></div>
                </div>

                <div className={classes.Card}>
                    <div className={classes.CardImage}>
                        <img src={support} alt="StudentImage" />
                    </div>
                    <span className={classes.CardTitle}>Structure</span>
                    <span className={classes.CardDescription}>The courses are very structurally conducted in order to avoid confusion and to maintain proper flow of things lorem ipsum lorem ipsum</span>
                    <div className={classes.CardLine}></div>
                </div>

            </div>
            {/* <div className="pattern-diagonal-lines-sm gray-lighter">
                <img style={{transform:"translate(30px, 30px)"}} src={student}/>
            </div> */}
        </div>
    )
}

export default Goals