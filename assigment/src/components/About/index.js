import React from 'react'

const About = () => {
    return (
        <div>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-12">
                        <div className="hero-cap text-center">
                        <h2>About Us</h2>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Hero Area End*/}
            {/* About Details Start */}
            <div className="about-details section-padding30">
                <div className="container">
                <div className="row">
                    <div className="offset-xl-1 col-lg-8">
                    <div className="about-details-cap mb-50">
                        <h4>Our Mission</h4>
                        <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                        </p>
                        <p> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                    </div>
                    <div className="about-details-cap mb-50">
                        <h4>Our Vision</h4>
                        <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                        </p>
                        <p> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* About Details End */}
            {/*? Video Area Start */}
            <div className="video-area mb-100">
                <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                    <div className="video-wrap">
                        <div className="play-btn "><a className="popup-video" href="https://www.youtube.com/watch?v=KMc6DyEJp04"><i className="fas fa-play" /></a></div>
                    </div>
                    </div>
                </div>
                {/* Arrow */}
                <div className="thumb-content-box">
                    <div className="thumb-content">
                    <h3>Next Video</h3>
                    <a href="#"> <i className="flaticon-arrow" /></a>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default About
