import style from "./Footer.module.scss"
import { FaPinterestSquare, FaInstagram, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

// Footer med socials
export const Footer = () => {

  // En liste af sociale medie links med tilhørende ikoner.
  const socialLinks = [
    { icon: FaPinterestSquare, link: 'https://www.pinterest.dk' },
    { icon: FaInstagram, link: 'https://www.instagram.com' },
    { icon: FaFacebookSquare, link: 'https://www.facebook.com' },
    { icon: FaTwitterSquare, link: 'https://twitter.com' },
  ];

    return (
      <footer className={style.footer}>
        <ul>
          <li>
            <h4>WALLYWOOD</h4>
          </li>
          <li>
            <p>Øster Uttrupvej 1</p>
          </li>
          <li>
            <p>9000 Aalborg</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>CVR: 12345678</p>
          </li>
          <li>
            <p>MAIL: <a href="mailto:info@plakatshoppen.dk">
               info@plakatshoppen.dk
            </a></p>
            
          </li>
          <li>
            <p>MOBIL: +45 9812 3456</p>
          </li>
        </ul>
        <figure className={style.iconswrapper}>
          {socialLinks.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              href={item.link}
              target="_blank"
            >
              <item.icon className={style.footericon} />
            </NavLink>
          ))}
        </figure>
      </footer>
    );

}