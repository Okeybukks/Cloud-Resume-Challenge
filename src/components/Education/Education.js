import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
    render() {
        return (
            <div className={classes.box} id="education">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>MY JOURNEY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Experience  <span>April(2022)-Present</span></h2>
                                                    <p>I am currently working as <b>Analyst, Network Surveillance</b> at <a target="_blank" href="https://www.ihstowers.com/"><b>IHS Holding Ltd</b></a> <i>(an independent owner, operator, and developer of shared telecommunications infrastructure. 
                                                        The company provides telecommunications infrastructure to its customers, most of who are MNOs, who in turn provide wireless voice and data services to their end-users. 
                                                        Its geographical segments are Nigeria, Sub-Saharan Africa, MENA, and Latam)</i></p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                        {/* <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article >
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Internship</h2>
                                                    <p>I am currently undergoing a one year diploma cloud engineering program in <a href='https://www.altschoolafrica.com/'><b>Altschool Africa</b></a></p>
                                                </div>
                                                <div className={classes.timeline_entry_inner}><div className={classes.timeline_icon_3 || classes.color_none}></div></div>
                                            </article>
                                        </ScrollAnimation> */}
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}  >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Internship <span>2022 - present</span></h2>
                                                    <p>I am currently undergoing a one year diploma cloud engineering program in <a href='https://www.altschoolafrica.com/'><b>Altschool Africa</b></a></p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Undergraduation at University of Nigeria, Nsukka <span>2012-2017</span></h2>
                                                    <p>I completed my undergraduation in Mechanical Engineering from <a  target="_blank" href='https://unn.edu.ng/'><b>University of Nigeria, Nsukka</b></a> with overall 82.2%.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </div>

        )
    }
}

export default Education;
