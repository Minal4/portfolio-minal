import React from 'react';
import ExampleDoc from '../assets/resume.pdf';
import Button from './Button';
import HeroImage from '../assets/images/hero.jpg';



export default function Hero() {


    const handleOnSwitch = () => {
        window.location.replace('/#contact')
    }

    return (
        <>
            <section className="section about-section relative md:h-screen">
                <div className="about-wrapper flex justify-center items-center flex-col md:h-full md:py-0 py-28">
                    <div className="hero-image absolute h-full w-full left-0 top-0">
                        <img src={HeroImage} alt="Hero" className='object-cover h-full w-full' />
                    </div>
                    <div className="inner_wrap container text-center">
                        <div className="about__inner lg:w-6/12 8/12 mx-auto flex flex-col justify-center items-center">
                            <h2 className='md:mb-0 mb-4 lg:text-7xl sm:text-5xl text-3xl'>Web Designer & Enthusiast </h2>
                            <div className="about__content">
                                <p className=''>Hello, I'm Minal. My relationship with Web Design started at a
                                    young age, and has become my life-long love. On this website,
                                    you'll discover some of my most challenging and intimate design
                                    I've taken date.</p>
                                <div className="excerpt-btn gap-4 text-center flex justify-center sm:flex-row flex-col btn-wrap">
                                    <Button title='Contact us' click={handleOnSwitch} />
                                    <a href={ExampleDoc} download="resume" target='_blank' rel='noopener noreferrer'>
                                        <button className='btn__link w-full'>Download CV</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}