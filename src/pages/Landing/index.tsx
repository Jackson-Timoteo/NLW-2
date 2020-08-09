import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImgm from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import '../Landing/style.css';


function Landing(){
    return  (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="logo-proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={landingImgm} alt="estudo" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="estudar"/>
                        Estudar:
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar aulas:
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 200 coxeões jpa realizadas <img src={purpleHeartIcon} alt="roxo"/>
                </span>
            </div>
        </div>

    )
}

export default Landing;