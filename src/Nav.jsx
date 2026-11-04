import "./Nav.css";

const Nav = ({ direction }) => {
  return (
    <section className={`nav ${direction}`}>
      <a href="#meetings">Upcoming Meetups</a>
      <a href="#about">About the Club</a>
      <a
        href="https://reactform.co/f/uHKUxSzczrmvALhVKD18"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact Us
      </a>
    </section>
  );
};

export default Nav;