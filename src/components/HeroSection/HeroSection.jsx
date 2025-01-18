import React from 'react';
import Joker from "../../assets/joker.png"

const HeroSection = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${Joker})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "760px",
                    maxWidth: "1300px",
                    margin: "auto",
                }}
            >
                <div></div>
            </div>
        </div>
    )
}

export default HeroSection;