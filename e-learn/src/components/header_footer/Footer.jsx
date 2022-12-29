import React from 'react';
import Fade from 'react-reveal/Fade';

//this is the footer part 
const Footer = () => {
    return (
        <footer className="bck_black" style={{ marginTop:'100px' }}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue"></div>
                <div className="footer_copyright">
                    Made with  
                <span style={{color : 'crimson'}}>♥</span> By 
                <a href="https://github.com/phaltankarvrushali/eLearning_Application_ReactJS.git" target="_blank" rel="noopener noreferrer"> EdEasy 
                </a>
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;