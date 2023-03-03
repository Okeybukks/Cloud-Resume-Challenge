import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        
                        <p>I'm a Software Engineer, and Cloud Engineering student at <b>Altschool</b>. I currently work as a System Administrator at Nautilus, xFusionCorp, a remote working platform by <a target='_blank' href='https://www.kodekloud-engineer.com/#!/tasks'><b>KodeKloud</b></a>. 
                        I have a good knowledge of Linux operating system in managing of users/group, installation and configuration of packages and firewalls,managing of filesystems etc. Some of my writeups on cloud can be found <a href='https://okeybukks.hashnode.dev'><b>Here</b></a>. 
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;