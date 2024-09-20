import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Container } from '@mui/material';
import Logo from '../../../public/logo.svg';

const Navbar = () => {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar
            position="static"
            elevation={0}
            sx={{ backgroundColor: 'white' }}
         >
            <Container maxWidth="lg">
               <Toolbar>
                  <img src={Logo} alt="KOFIPOST" width={'150px'} />
               </Toolbar>
            </Container>
         </AppBar>
      </Box>
   );
};

export default Navbar;
