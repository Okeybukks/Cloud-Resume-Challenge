import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.web}>
                <h3>System Administrator</h3>
                <p>I have a good knowledge of Linux operating system in managing of users/group, installation and configuration of packages and firewalls,managing of filesystems etc</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.app}>
                <h3>Cloud Deployment</h3>
                <p>I have experience working with the AWS cloud platform which includes deployment of applications, creation of storages
                   and also architecting cloud infrastructure following the well architected guidelines.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.other}>
                <h3>Other's Interest</h3>
                <p>I enjoy writing technical writeups on topics such as app deployment in the cloud, administrative tasks on Linux. I also playing video games
                  and hanging out with friends.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;