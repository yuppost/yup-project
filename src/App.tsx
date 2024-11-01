import { Container } from '@mui/material';
import Navbar from './Components/Navbar';
import NoticeBoard from './Components/NoticeBoard';
import AccordianComponent from './Components/Accordian';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

const TrackingId = 'G-VLJ78XP35R';

function App() {
   useEffect(() => {
      ReactGA.initialize(TrackingId);
      ReactGA.send({
         hitType: 'pageview',
         page: '/homepage',
         title: 'homepage',
      });
   }, []);
   return (
      <>
         <Navbar />
         <Container maxWidth="lg">
            <NoticeBoard />
            <AccordianComponent />
         </Container>
      </>
   );
}

export default App;
