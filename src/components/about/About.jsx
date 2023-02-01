import React from 'react';
import './About.css';
import Image from '../../assets/portifoliosexpress.png';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">Sobre mim </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Um resumo sobre você!  Um resumo sobre você!  Um resumo sobre você!  Um resumo sobre você!  
                            Um resumo sobre você!  Um resumo sobre você!  Um resumo sobre você!  Um resumo sobre você!  Um resumo sobre você! 
                            Um resumo sobre você!  Um resumo sobre você!  Um resumo sobre você!  Um resumo sobre você! 
                        </p>
                        <ul className="about__list">
                            <li>Suas Habilidades</li>
                            <li>Suas Habilidades</li>
                            <li>Suas Habilidades</li>
                            <li>Suas Habilidades</li>
                            <li>Suas Habilidades</li>
                            <li>Suas Habilidades</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload currículo</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About