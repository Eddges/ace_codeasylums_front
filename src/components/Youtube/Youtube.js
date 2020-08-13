import React from 'react'
import classes from './Youtube.module.css'

const Youtube = (props) => {
    return(
        <div className={classes.Youtube}>
            <div className={classes.video}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/NhRijUX8_QI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p className={classes.quote}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                <p className={classes.name}>-Pratyush Agrawal (Founder)</p>
            </div>
            <div className={classes.content}>
                <p className={classes.title}>Commited to excellence</p>
                <p className={classes.details}>Since 2013, we have constantly been improving our curriculum and tools to match our students’ needs, getting rid of every friction in the process of learning to code. Our in-house trained teachers adapt to every student’s pace and level, making sure that nobody’s left behind. As a result, Le Wagon has been featured as no.1 world coding bootcamp on ranking websites for several years</p>
                <p className={classes.title}>Quality curriculum</p>
                <p className={classes.details}>Since 2013, we have constantly been improving our curriculum and tools to match our students’ needs, getting rid of every friction in the process of learning to code. Our in-house trained teachers adapt to every student’s pace and level, making sure that nobody’s left behind. As a result, Le Wagon has been featured as no.1 world coding bootcamp on ranking websites for several years</p>
                <p className={classes.title}>Product-driven bootcamp</p>
                <p className={classes.details}>Since 2013, we have constantly been improving our curriculum and tools to match our students’ needs, getting rid of every friction in the process of learning to code. Our in-house trained teachers adapt to every student’s pace and level, making sure that nobody’s left behind. As a result, Le Wagon has been featured as no.1 world coding bootcamp on ranking websites for several years</p>
            </div>
        </div>
    )
}

export default Youtube