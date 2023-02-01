import React from 'react';
import './Home.css';
import Me from '../../assets/portifoliosexpress.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">SEU NOME</h1>
                <span className="home__education">SEU CARGO</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contato</a>
                
                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home