import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTelegram, faFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { Typewriter } from 'react-simple-typewriter'
import './Home.css';

class Home extends Component{
    render(){
        return (
        <section className='Home_container'>
            <div className='Home_content'>
                <h1 className='Home_title'>Hi,<br />I'am SELOUGHA Mohamed Achraf</h1>
                <h1 className='Home_specialty'>
                    <Typewriter
                            words={['University student', 'Graphic designer', 'Front-end web developer']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={80}
                            deleteSpeed={80}
                            delaySpeed={600}
                    />
                </h1>    
                <p className='Home_description'>This website represents my CV as a computer scientist. From here you can view all my achievements, everything related to my academic career, the diplomas I obtained, my skills, as well as the services that I can provide to you...<br />To contact me, send me an email by going to the Contact page, or through the social media pages below</p>
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
                <a href="https://github.com/SelAchraf" target='_blanc'><FontAwesomeIcon icon={faGithub} className='github_icon'/></a>
                <a href="https://t.me/SelMedAchraf" target='_blanc'><FontAwesomeIcon icon={faTelegram} className='telegram_icon'/></a>
                <a href="https://www.facebook.com/achraf.selougha.1/" target='_blanc'><FontAwesomeIcon icon={faFacebook} className='facebook_icon'/></a>
                <a href="https://www.instagram.com/achraf._.sel/" target='_blanc'><FontAwesomeIcon icon={faSquareInstagram} className='instagram_icon'/></a>
            </div>
        </section>
        );
    }
}

export default Home;