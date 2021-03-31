import React from 'react';
import './Footer.sass';

import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-text">
                <Row>
                    <a href="https://github.com/benjaminho1998" target="_blank" rel="noopener noreferrer">
                        <SiGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/benjamin-ho-2703a6133/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </Row>
                <Row>
                    Benjamin Ho
                </Row>
            </div>
        </div>
    );
}

export default Footer;