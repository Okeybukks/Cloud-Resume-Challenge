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
                                                    <h2 >Projects</h2>
                                                    <div>
                                                        <h6><b>Cloud Resume Challenge</b></h6>
                                                        <p>
                                                        Successfully completed the Cloud Resume Challenge, demonstrating proficiency in cloud technologies and DevOps practices. The template of this website was designed by <b><a style={{ color: 'red' }} href='https://github.com/mittalsam98'>Sachin Mittal</a></b>.
                                                        I reengineered it and deployed it using AWS s3 and cloudfront services which where created using Terraform. The deployment of this website  was done with Jenkins CI/CD pipelines. 
                                                        Additionally, I implemented a visitor count feature employing AWS DynamoDB and Lambda functions. The comprehensive project's codebase can be found within this <a style={{ color: 'red' }} target="_blank" href='https://github.com/Okeybukks/Cloud-Resume-Challenge'><b>repository</b></a>,
                                                         underlining my practical prowess in cloud computing and web development.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <h6><b>Creation of the CI/CD pipeline for AltSchool Capestone Project</b></h6>
                                                        <p>
                                                            As a team member working on implementing DevOps principles and deploying a Django application for our <a style={{ color: 'red' }} href='https://www.altschoolafrica.com/'><b>Altschool Africa</b></a> Capestone project, I took charge of creating the Jenkins CI/CD pipeline.

                                                            The pipeline included several key steps:
                                                            <ul>
                                                                <li>Building the application's Docker image.</li>
                                                                <li>Deploying the required AWS infrastructure using Terraform.</li>
                                                                <li>Deploying the application to AWS EKS.</li>
                                                                <li>Monitoring infrastructure costs using Infracost.</li>
                                                            </ul> You can find the project files in this <a target="_blank" style={{ color: 'red' }} href='https://github.com/Okeybukks/devops-automation/tree/main'><b>Repository</b></a>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p>Other projects can be found in this <a style={{ color: 'red' }} href='https://github.com/Okeybukks?tab=repositories'><b>Repository</b></a></p>
                                                    </div>

                                                    
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
                                                    <h2 >Internship <span>2023 - present</span></h2>
                                                    <p>I am currently a DevOps Intern at <a href='https://aibanc.co/'><b>AiBanc</b></a></p>
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
                                                    <p>I completed my undergraduation in Mechanical Engineering from <a  target="_blank" href='https://unn.edu.ng/'><b>University of Nigeria, Nsukka</b></a> with Second Class Upper.</p>
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
