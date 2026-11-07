import quiet from './assets/QUIET.webp';
import Nav from './Nav.jsx';
import Meeting from './Meeting.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';
import './App.css';

const meetings = [
  // TEMPLATE:
  // {
  //   date: '', // include day, ex: Sunday 8 November 2026
  //   location: '',
  //   address: '',
  //   mapLink: '', // use mapquest wherever possible
  //   time: '',
  //   description: '',
  //   parking: '',
  //   otherNotes: '', // optional
  // },
  {
    date: 'Thursday 12 November 2026',
    location: 'Confluence Coffee',
    address: '1205 Cheyenne St, Golden, CO 80401',
    mapLink: 'https://www.mapquest.com/us/colorado/confluence-coffee-835862632',
    time: '7am - 9am',
    description: 'For the early birds, join us at the outrageously cozy Confluence Coffee for breakfast and companionable focus time.',
    parking: 'Free street parking nearby',
    otherNotes: 'Confluence has a great selection of coffee and tea, as well as tasty breakfast snacks. They have a cozy garage seating area.',
  },
  {
    date: 'Sunday 15 November 2026',
    location: 'Method & Muse',
    address: '7513 Grandview Ave, Arvada, CO 80002',
    mapLink: 'https://www.mapquest.com/us/colorado/method-muse-spirits-790522095',
    time: '3pm - 5pm',
    description: 'Enjoy an afternoon of focus and quiet company in Olde Town Arvada!',
    parking: 'Limited free street parking, paid lots, or nearby free RTD parking garage',
    otherNotes: 'Method & Muse offers N/A drink options, cocktails, and snacks in a cozy atmosphere with plenty of seating.',
  },
  {
    date: 'Sunday 22 November 2026',
    location: 'Method & Muse',
    address: '7513 Grandview Ave, Arvada, CO 80002',
    mapLink: 'https://www.mapquest.com/us/colorado/method-muse-spirits-790522095',
    time: '3pm - 5pm',
    description: 'Enjoy an afternoon of focus and quiet company in Olde Town Arvada!',
    parking: 'Limited free street parking, paid lots, or nearby free RTD parking garage',
    otherNotes: 'Method & Muse offers N/A drink options, cocktails, and snacks in a cozy atmosphere with plenty of seating.',
  },
];

const App = () => {
  return (
    <>
      <img src={quiet} alt="Quiet Hobby Club logo" style={{ maxWidth: '250px' }} />
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
