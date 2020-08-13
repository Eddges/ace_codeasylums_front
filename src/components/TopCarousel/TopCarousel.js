import React from 'react'
import classes from './TopCarousel.module.css'
// import Carousel from 'react-bootstrap/Carousel'
import { Carousel } from 'antd';
import studentPhoto from '../../assets/student.jpg'
import deskPhoto from '../../assets/student3.jpg'


class ControlledCarousel extends React.Component{
    render(){

        function onChange(a, b, c) {
            console.log(a, b, c);
          }

        const contentStyle = {
            height: '100%',
            color: '#000',
            // lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
          };

        return(
            <div className={classes.Container}>
                <div className={classes.EmptyDiv}></div>
                <div className={classes.Carousel}>
                <Carousel autoplay afterChange={onChange}>

                    <div className={classes.CarouselContent}>
                        <div className={classes.CarouselGradient}></div>
                        <img src={studentPhoto} alt="Student Image" />
                        <div className={classes.ContentDiv}>
                            <div className={classes.Left}>
                                <span className={classes.Top}>Live Mentoring <span className={classes.Highlite}>| Career Focused</span></span>
                                <span className={classes.Courses}>Data Structures | Algorithms | System Design | Competitive Programming</span>
                                <span className={classes.Courses}>Full Stack Web Development | Data Science</span>
                                <span className={classes.Schedule1}>Batches starting from</span>
                                <span className={classes.Schedule2}><span className={classes.Highlite}>15th August, 2020</span></span>
                            </div>
                            <div className={classes.Right}>
                                
                            </div>
                        </div>
                        <h3 style={contentStyle}></h3>
                    </div>


                    <div className={classes.CarouselContent}>
                        <div className={classes.CarouselGradient}></div>
                        <img src={deskPhoto} alt="Desk Image" />
                        <div className={classes.ContentDiv}>
                            <div className={classes.Left}>
                                <span className={classes.Top}>Live Mentoring <span className={classes.Highlite}>| Career Focused</span></span>
                                <span className={classes.Courses}>Data Structures | Algorithms | System Design | Competitive Programming</span>
                                <span className={classes.Courses}>Full Stack Web Development | Data Science</span>
                                <span className={classes.Schedule1}>Batches starting from</span>
                                <span className={classes.Schedule2}><span className={classes.Highlite}>15th August, 2020</span></span>
                            </div>
                            <div className={classes.Right}>
                                
                            </div>
                        </div>
                        <h3 style={contentStyle}></h3>
                    </div>
                </Carousel>


                </div>
            </div>
        )
    }
}
  
export default ControlledCarousel

//   render(<ControlledCarousel />);