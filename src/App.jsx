import { useState } from 'react';
import Banner from './Banner.jsx';
import quiet from './assets/QUIET.webp';
import Nav from './Nav.jsx';
import Meeting from './Meeting.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';
import meetings from './meetings.js';
import './App.css';

const App = () => {
  const banner = false;
  const message = "Looking for some peace and quiet?"

  return (
    <>
      {banner && <Banner message={message} />}
      <img className={banner ? 'bump' : ''} src={quiet} alt="Quiet Hobby Club logo" style={{ maxWidth: '250px' }} />
      <h1 hidden>Quiet Hobby Club</h1>
      <Nav direction="row" />
      <div style={{ marginTop: '10px', maxWidth: '80%' }}>
        <h2 id="meetings">
          <span aria-hidden="true">&#10022;</span>{' '}
          UPCOMING MEETINGS{' '}
          <span aria-hidden="true">&#10022;</span>
        </h2>
        <div className="meetings">
          {meetings.map((meeting, index) => {
            return (
              <Meeting key={index} {...meeting} />
            )
          })}
        </div>
        <h2 id="about">
          <span aria-hidden="true">&#10022;</span>{' '}
          ABOUT THE CLUB{' '}
          <span aria-hidden="true">&#10022;</span>
        </h2>
        <About />
        <Footer />
      </div>
    </>
  )
}

export default App;
