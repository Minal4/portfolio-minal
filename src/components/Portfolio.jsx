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
              <a target="_blank" rel='noopener noreferrer' href="https://catchthemes.com/demo/abletone-dark/">
                <img src={Abletone} alt="Dark" />
                <div className="caption">Abletone</div>
              </a>
              <p></p>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://catchthemes.com/demo/simclick-pro/">
                <img src={SimClick} alt="Dark" />
                <div className="caption">Simclick</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://catchthemes.com/demo/corporate-biz-pro/">
                <img src={Biz} alt="Dark" />
                <div className="caption">Corporate Biz</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://catchthemes.com/demo/catch-sketch-blog/">
                <img src={Blog} alt="Dark" />
                <div className="caption">Catch Sketch Blog</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://catchthemes.com/demo/catch-sketch-pro/">
                <img src={Main} alt="Dark" />
                <div className="caption">Catch Sketch</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="http://fgtelecom.com.au/">
                <img src={FgTelecom} alt="Dark" />
                <div className="caption">Fg Telecom</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://civilhomes.com.np/">
                <img src={Civil} alt="Dark" />
                <div className="caption">Civil Homes</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://9ky.bcf.myftpupload.com/">
                <img src={Texas} alt="Dark" />
                <div className="caption">Texas</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://twesupply.com/">
                <img src={Twe} alt="Dark" />
                <div className="caption">TWE Supply</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://bodylogic.physio/">
                <img src={BodyLogic} alt="Dark" />
                <div className="caption">BodyLogic</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://themepalace.com/theme-demo/?demo=Mk56ZGY5TVJhVlg0enkwNWRkaW9hUT09">
                <img src={SignifyPro} alt="Dark" />
                <div className="caption">SignifyPro</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://themepalace.com/theme-demo/?demo=Mk56ZGY5TVJhVlg0enkwNWRkaW9hUT09">
                <img src={wedding} alt="Dark" />
                <div className="caption">SignifyPro Wedding</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://themepalace.com/theme-demo/?demo=Mk56ZGY5TVJhVlg0enkwNWRkaW9hUT09">
                <img src={ecommerce} alt="Dark" />
                <div className="caption">SignifyPro Ecommerce</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://fse.catchthemes.com/lyna-pro/">
                <img src={Lyna} alt="lyna" />
                <div className="caption">Lyna Pro</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://fse.catchthemes.com/artsylens-pro/">
                <img src={Artsylens} alt="artsy" />
                <div className="caption">Artsylens Pro</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://fse.catchthemes.com/rhythmic-pro/">
                <img src={Rhythmic} alt="artsy" />
                <div className="caption">Rhythmic Pro</div>
              </a>
            </li>
            <li>
              <a target="_blank" rel='noopener noreferrer' href="https://fse.catchthemes.com/visionart-pro/">
                <img src={Visionart} alt="artsy" />
                <div className="caption">Visionart Pro</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
