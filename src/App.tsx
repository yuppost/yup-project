import { Container } from '@mui/material';
import Navbar from './Components/Navbar';
import NoticeBoard from './Components/NoticeBoard';
import AccordianComponent from './Components/Accordian';

function App() {
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
