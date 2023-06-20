import ExampleDoc from '../assets/resume.pdf';
import Button from './Button';


export default function Hero() {

    let i = 0;
    let sliderElement = [];

    while (i < 8) {
        sliderElement.push(<span className='marque' key={i}>Portfolio</span>);
        i++;
    }

    sliderElement.keys('')


    return (
        <>
            <section className="section about-section">
                <div className="inner_wrap container">
                    <div className="about__inner ">
                        <h2 className='md:w-5/12 md:mb-0 mb-4'>{`Minal - FrontEnd Web Designer & Enthusiast`}</h2>
                        <div className="about__content md:w-7/12">
                            <p>Hello, I'm Minal. My relationship with Web Design started at a
                                young age, and has become my life-long love. On this website,
                                you'll discover some of my most challenging and intimate design
                                I've taken date.</p>
                            <div className="excerpt-btn gap-4">
                                <Button title='Contact us' />
                                <a href={ExampleDoc} download="resume" target='_blank' rel='noopener noreferrer'>
                                    <button className='btn__link'>Download CV</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-slide">
                <div className='inner-slide'>{sliderElement}</div>
            </div>
        </>
    );
}