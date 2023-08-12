import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { FiExternalLink } from 'react-icons/fi';
import logo from '../images/peter.jpg'


async function counterFunction(url){
    const response = await fetch(url);
    const views = await response.json();
    return views
}

let url = "https://yl7hit6v7ib3uqvotxacayrqhm0omtyt.lambda-url.us-east-1.on.aws/";

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewsCount: props.initialValue,
          };
      }
      
      componentDidMount() {

        let count = Promise.resolve(counterFunction(url));
        count.then(value => {
            this.setState({ viewsCount: value });
        })
      }
      
    render() {

        return (
            <div className="sidebar">
                <div style={{ color: 'black', fontWeight: 'bold' }} className="tagtop"> # programmer_life </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # hello_world </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # cloud </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # coding </div>
                <h1><Link smooth to="/#start" className="h1_links">Achebe Okechukwu</Link></h1>

                <img src={logo} />
                <p style={{ color: 'black', fontWeight: 'bold' }} className="gmail"><a href="mailto:oachebe2022@gmail.com" rel="opener noreferrer" target="_blank" className="fa fa-envelope"></a> oachebe2022@gmail.com </p>

                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interest</Link></li>
                    <li className="sidebar-nav-items"><a href="https://okeybukks.hashnode.dev/" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li>
                </ul>

                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"> <a href="https://github.com/Okeybukks" rel="opener noreferrer" target="_blank" className="fa fas fa-github fa-lg"></a></li>
                        <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/achebe-okechukwu-82a9479a/" rel="opener noreferrer" target="_blank" className="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://twitter.com/peter_achebe" rel="opener noreferrer" target="_blank" className="fa fas fa-twitter fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.instagram.com/achebeh_peter/" rel="opener noreferrer" target="_blank" className="fa fas fa-instagram fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:oachebe2022@gmail.com" rel="opener noreferrer" target="_blank" className="fa fas fa-envelope fa-lg"></a></li>
                    </ul>
                </div>

                <div>
                    <p style={{ color: 'black', fontWeight: 'bold', fontSize: '12px', marginTop: "20%"}}>Template designed by <b><a style={{ color: 'red' }} href='https://github.com/mittalsam98'>Sachin Mittal</a></b></p>
                    <p style={{ color: 'black', fontWeight: 'bold', fontSize: '12px',}} ref={this.paragraphRef}>Visitor's Count {this.state.viewsCount}<b></b></p>
                </div>
            </div>
        )
    }
}

export default Sidebar

