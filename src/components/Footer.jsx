import { NavLink } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-social">
            <ul className="social">
              <li>
                <NavLink to={"https://www.facebook.com/minal.munakarmi/"}>
                  <FaFacebook />
                </NavLink>
              </li>
              <li>
                <NavLink to={"https://www.linkedin.com/in/minal-munakarmi-240692a3/"}>
                  <FaLinkedin />
                </NavLink>
              </li>
              <li>
                <NavLink to={"https://github.com/Minal4"}>
                  <FaGithubSquare />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-site">
            <div className="copyright-text">
              <p>{`Copyright © ${new Date().getFullYear()} Minal | All Rights Reserved`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
