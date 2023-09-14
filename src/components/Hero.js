import React from 'react'
import hero from '../assets/images/hero.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <div className='hero'>
                <div className='hero-container'>
                    <div className='hero-left'>
                        <p>Why Choose us &rarr;</p>
                         {/* <p>Elevate Your Skills, Expand Your Knowledge, and Achieve Your Goals with Our Expert-Led Courses.</p> */}
                        <h2>Unlock Your Potential Enroll Today in Our Transformational Online Courses</h2>
                        <Link to='Courses'className='enroll-btn' >Enroll Now </Link>
                    </div>
                    <div className='hero-right'>
                        <img src={hero} alt={hero} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
