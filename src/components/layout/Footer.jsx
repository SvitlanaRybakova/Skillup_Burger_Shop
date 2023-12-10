import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from 'react-icons/ai';
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Shop</h2>
        <p>We are trying to give you the best taste possible</p>
        <br />
        <em>We give attention to genuine feedback</em>
        <strong>All right received @burgershop</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <Link to={'https://youtube.com'}>
          <AiFillYoutube />
        </Link>
        <Link to={'https://instagram.com'}>
          <AiFillInstagram />
        </Link>
        <Link to={'https://github.com'}>
          <AiFillGithub />
        </Link>
      </aside>
    </footer>
  );
};
export default Footer;
