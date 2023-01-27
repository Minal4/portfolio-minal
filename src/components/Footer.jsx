import { FaFacebook, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-social">
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/minal.munakarmi/">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/minal-munakarmi-240692a3/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/Minal4">
                  <FaGithubSquare />
                </a>
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
