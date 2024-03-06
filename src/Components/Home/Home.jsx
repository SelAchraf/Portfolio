import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './Home.css';

class Home extends Component{
    render(){
        return (
        <section className='Home_container'>
            <div className='Home_content'>
                <h1 className='Home_title'>Hi,<br />I'am SELOUGHA Mohamed Achraf</h1>
                <ul className='Specialty'>
                    <li>
                        <span>University student</span>
                    </li>
                    <li>
                        <span>Graphic designer</span>
                    </li>
                    <li>
                        <span>Front-end web developer</span>
                    </li>
                </ul>
                <p className='Home_description'>This site represents my CV as a computer scientist. From here you can view all my achievements, everything related to my academic career, the certificates I obtained, my skills, as well as the services that I can provide to you...<br />To contact me, send me an email by going to the Contact page, or through the social media pages</p>
            </div>
            <div className='Home_image'>
                <div className='image'>
                    <div className='top-left'></div>
                    <div className='top-right'></div>
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                </div>
            </div>
            <div className="Home_icons">
                <FontAwesomeIcon icon={faGithub} className='github_icon' />
                <FontAwesomeIcon icon={faTelegram} className='telegram_icon'/>
                <FontAwesomeIcon icon={faFacebook} className='facebook_icon'/>
            </div>
        </section>
        );
    }
}

export default Home;