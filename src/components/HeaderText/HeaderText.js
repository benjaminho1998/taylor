import React from 'react';
import './HeaderText.sass';
import Row from 'react-bootstrap/Row';

const HeaderText = (props) => {

    return (
        <div>
            <Row>
                <h1 className="header">{props.title}</h1>
            </Row>
            <Row>
                <h6 className="home-sub-header">{props.subtitle}</h6>
            </Row>
        </div>
    );
}

export default HeaderText;