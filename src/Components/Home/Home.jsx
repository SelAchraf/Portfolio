import { Component } from 'react';
import './Home.css';

class Home extends Component{
    render(){
        return (
        <>
        <section className='Home_container'>
            <div className='Home_content'>
                <h1 className='Name'><span className='Hi'>Hi,</span><br />I'am Selougha Med Achraf</h1>
                <ul className='Speciality'>
                    <li>
                        <span>Graphic designer</span>
                    </li>
                    <li>
                        <span>Front-end web developer</span>
                    </li>
                </ul>
                <p className='presentation'>This site represents my CV as a computer scientist. From here you can view all my achievements, everything related to my academic career, the certificates I obtained, my skills, as well as the services that I can provide to you...<br />To contact me, send me an email by going to the Contact page, or through the social media pages below</p>
            </div>
            <img src="Home_img.png" alt="image" className='Home_image'/>
        </section>
        </>
        );
    }
}

export default Home;