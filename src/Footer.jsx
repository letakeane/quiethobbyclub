import Nav from './Nav.jsx';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <p className="decor" aria-hidden="true">. ݁₊ ⊹ . ݁ ⟡゜・。。・゜⊹ ゜・。₊ 。・゜☆ . ⊹ ₊ ݁.</p>
      <section>
        <div>
          <p className="welcome">WELCOME TO THE CLUB!</p>
          <p>We're glad you're here,</p>
          <p>even if we're quiet about it.</p>
        </div>
        <Nav direction="column" />
      </section>
      <p className="copyright">&copy; Leta 2027</p>
    </section>
  );
}

export default Footer;