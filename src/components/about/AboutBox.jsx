import React from 'react'
import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <RiFireLine className='about__icon' />

                <div>
                    <h3 className="about__title">0</h3>
                    <span className="about__subtitle">Anos de Expreriências</span>
                </div>
            </div>


            <div className="about__box">
                <RiGroupLine className='about__icon' />

                <div>
                    <h3 className="about__title">0</h3>
                    <span className="about__subtitle">Projetos realizados</span>
                </div>
            </div>

           
        </div>
    )
}

export default AboutBox