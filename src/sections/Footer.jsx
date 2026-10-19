import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center gap-1">
          <p>Ghaziabad, India</p>
          <a href="mailto:mkavya193@gmail.com" className="text-center md:text-start hover:text-white">
            mkavya193@gmail.com
          </a>
          <a href="tel:+917983032550" className="text-center md:text-start hover:text-white">
            +91 7983032550
          </a>
        </div>
        <div className="socials flex gap-4">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Kavya Mittal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
