import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <ul className="social">
              <li>
                <Link to={"https://www.facebook.com/minal.munakarmi/"}>
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to={"https://www.linkedin.com/in/minal-munakarmi-240692a3/"}>
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link to={"https://github.com/Minal4"}>
                  <FaGithubSquare />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <div className="copyright-text">
              <p>{`Copyright © ${new Date().getFullYear()} Minal | All Rights Reserved`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
