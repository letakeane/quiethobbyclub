import './Banner.css';

const Banner = ({ message }) => {
  return (
    <section className="banner">
      <div className="scrolling-text">
        <span>{message}</span>
      </div>
    </section>
  )
}

export default Banner;