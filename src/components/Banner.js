import React from 'react';
import bannerImage from '../images/banner_img.jpg';

const Banner = () => {

    return (
        <div className="banner-container">
            <img src={bannerImage} alt="Banner" className="banner-image" />
            <div className='overlay'></div>
            <div className="banner-content">
                <h1 className="banner-text">Your Recipe <span className="home-text">Journey </span><br/>Starts <span className="home-text">Here!</span></h1>
            </div>
        </div>
    );
}

export default Banner;