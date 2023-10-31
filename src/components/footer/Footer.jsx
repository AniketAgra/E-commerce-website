import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import "./footer.css";

export function Footer() {
  const { pathname } = useLocation();

  return (
    <div
      className={`bg-black txt-white txt-center footer-wrapper ${
        pathname == "/products" && "margin-bottom"
      }`}
    >
      <footer className="py-1">
        <p>Made with ❤️ by Aniket Agrawal</p>
        <div className="social-links">
          <a href="#" className="mr-sm">
            <FaTwitterSquare fontSize="1.5rem" />
            <span className="visually-hidden">Twitter</span>
          </a>
          <a href="#" className="mr-sm">
            <FaGithubSquare fontSize="1.5rem" />
            <span className="visually-hidden">Github</span>
          </a>
          <a href="#">
            <FaLinkedin fontSize="1.5rem" />
            <span className="visually-hidden">LinkedIn</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
