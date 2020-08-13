import React from 'react'
import classes from './BenefitsBanner.module.css'
import google from '../../assets/companies/google.png'
import microsoft from '../../assets/companies/microsoft.png'
import amazon from '../../assets/companies/amazon.png'
import flipkart from '../../assets/companies/flipkart.png'
import walmart from '../../assets/companies/walmart.png'


const BenefitsBanner = (props) => {
    return(
        <div className={classes.Container}>
            <div className={classes.Item}>
                <span>Mentors from</span>
            </div>
            <div className={classes.Item}>
                <img src={google} />
            </div>
            <div className={classes.Item}>
            <img src={microsoft} />
            </div>
            <div className={classes.Item}>
            <img src={amazon} />
            </div>
            <div className={classes.Item}>
            <img src={flipkart} />
            </div>
            <div className={classes.Item}>
            <img src={walmart} />
            </div>
        </div>
    )
}

export default BenefitsBanner