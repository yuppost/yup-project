import { Container } from '@mui/material';
import Navbar from './Components/Navbar';
import NoticeBoard from './Components/NoticeBoard';
import AccordianComponent from './Components/Accordian';
import Footer from './Components/Footer';

function App() {
   return (
      <>
         <Navbar />
         <Container maxWidth="lg">
            <NoticeBoard />
            <AccordianComponent />
         </Container>
         <Footer />
      </>
   );
}

export default App;
