import React from 'react';
import Abletone from '../assets/images/abletone-dark.jpg';
import SimClick from '../assets/images/simClick.jpg';
import Biz from '../assets/images/biz.jpg';
import Blog from '../assets/images/blog.jpg';
import Main from '../assets/images/main.jpg';
import SignifyPro from '../assets/images/signifyPro.jpg';
import FgTelecom from '../assets/images/fgtelcom.jpg';
import Civil from '../assets/images/civil.jpg';
import Texas from '../assets/images/texas.jpg';
import Twe from '../assets/images/twe.jpg';
import wedding from '../assets/images/wedding.jpg';
import ecommerce from '../assets/images/ecommerce.jpg';
import BodyLogic from '../assets/images/bodylogic.jpg';
import Lyna from '../assets/images/lyna-pro.jpg';
import Rhythmic from '../assets/images/rhythmic-pro.jpg';
import Visionart from '../assets/images/visionart-pro.jpg';
import Artsylens from '../assets/images/artsylens-pro.jpg';
import Drinkify from '../assets/images/drinkify.png';
import Outwit from '../assets/images/outwit.png';

export default function Portfolio() {
  return (
    <section className="section portfolio">
      <div className="container">
        <div className="section__heading">
          <h2 data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800">Portfolio</h2>
        </div>
        <div className="portfolio__content" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000">
          <ul>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://fse.catchthemes.com/drinkify/">
                <img src={Drinkify} alt="Dark" />
                <div className="caption">Drinkify</div>
              </a>
              <p></p>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://catchthemes.com/demo/abletone-dark/">
                <img src={Abletone} alt="Dark" />
                <div className="caption">Abletone</div>
              </a>
              <p></p>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://catchthemes.com/demo/simclick-pro/">
                <img src={SimClick} alt="SimClick" />
                <div className="caption">Simclick</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://catchthemes.com/demo/corporate-biz-pro/">
                <img src={Biz} alt="Biz" />
                <div className="caption">Corporate Biz</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://catchthemes.com/demo/catch-sketch-blog/">
                <img src={Blog} alt="Blog" />
                <div className="caption">Catch Sketch Blog</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://catchthemes.com/demo/catch-sketch-pro/">
                <img src={Main} alt="Main" />
                <div className="caption">Catch Sketch</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="http://fgtelecom.com.au/">
                <img src={FgTelecom} alt="FgTelecom" />
                <div className="caption">Fg Telecom</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://civilhomes.com.np/">
                <img src={Civil} alt="Civil" />
                <div className="caption">Civil Homes</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://9ky.bcf.myftpupload.com/">
                <img src={Texas} alt="Texas" />
                <div className="caption">Texas</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://twesupply.com/">
                <img src={Twe} alt="Twe" />
                <div className="caption">TWE Supply</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://bodylogic.physio/">
                <img src={BodyLogic} alt="BodyLogic" />
                <div className="caption">BodyLogic</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://demo.wenthemes.com/signify-pro/">
                <img src={SignifyPro} alt="SignifyPro" />
                <div className="caption">SignifyPro</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://demo.wenthemes.com/signify-pro-wedding/">
                <img src={wedding} alt="wedding" />
                <div className="caption">SignifyPro Wedding</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://demo.wenthemes.com/signify-pro-ecommerce/">
                <img src={ecommerce} alt="ecommerce" />
                <div className="caption">SignifyPro Ecommerce</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://fse.catchthemes.com/lyna-pro/">
                <img src={Lyna} alt="Lyna" />
                <div className="caption">Lyna Pro</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://fse.catchthemes.com/artsylens-pro/">
                <img src={Artsylens} alt="Artsylens" />
                <div className="caption">Artsylens Pro</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://fse.catchthemes.com/rhythmic-pro/">
                <img src={Rhythmic} alt="Rhythmic" />
                <div className="caption">Rhythmic Pro</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://fse.catchthemes.com/visionart-pro/">
                <img src={Visionart} alt="Visionart" />
                <div className="caption">Visionart Pro</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://fse.catchthemes.com/outwit/">
                <img src={Outwit} alt="Dark" />
                <div className="caption">Outwtt</div>
              </a>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
