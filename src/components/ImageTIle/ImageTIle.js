import React from 'react';
import './ImageTile.sass';

import tay2 from '../../images/homeImg/tay2.jpg';
import tay3 from '../../images/homeImg/tay3.jpg';
import tay4 from '../../images/homeImg/tay4.jpg';
import tay5 from '../../images/homeImg/tay5.jpg';
import tay6 from '../../images/homeImg/tay6.jpg';
import tay7 from '../../images/homeImg/tay7.jpg';
import tay8 from '../../images/homeImg/tay8.jpg';
import tay9 from '../../images/homeImg/tay9.jpg';

const ImageTile = (props) => {

    const link = props.link;
    const num = props.num;
    const name = props.name;
    const alt = "Link to " + props.name;

    return (
        <div className="image-parent">
            <a href={link}>
                {num === "2" &&
                    <img src={tay2} alt={alt} />
                }
                {num === "3" &&
                    <img src={tay3} alt={alt} />
                }
                {num === "4" &&
                    <img src={tay4} alt={alt} />
                }
                {num === "5" &&
                    <img src={tay5} alt={alt} />
                }
                {num === "6" &&
                    <img src={tay6} alt={alt} />
                }
                {num === "7" &&
                    <img src={tay7} alt={alt} />
                }
                {num === "8" &&
                    <img src={tay8} alt={alt} />
                }
                {num === "9" &&
                    <img src={tay9} alt={alt} />
                }
            </a>
            <div className="image-text">{name}</div>
        </div>
    );
}

export default ImageTile;