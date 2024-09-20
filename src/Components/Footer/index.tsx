import Stack from '@mui/material/Stack';
import { Box, Container, Link } from '@mui/material';
import { styled } from '@mui/system';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';

import Logo from '/logo-footer.svg';

const FooterStyle = styled('footer')({
   color: '#fff',
   backgroundColor: '#2F343F',
   padding: '13px 0px 5px 0px',
   position: 'absolute',
   bottom: '0px',
   left: '0px',
   width: '100% !important',
   marginTop: '20px',
});

const Footer = () => {
   return (
      <FooterStyle>
         <Container maxWidth="lg">
            <Stack direction="row" spacing={2} justifyContent={'space-between'}>
               <Box>
                  <img src={Logo} alt="KOFIPOST" width={'120px'} />
               </Box>

               <Stack
                  direction="row"
                  spacing={1}
                  justifyContent={'center'}
                  alignItems={'center'}
               >
                  <Link href="https://t.me/WABOBSNews" target="_blank">
                     <FacebookOutlinedIcon
                        sx={{ color: '#FFF', widows: '20px' }}
                     />
                  </Link>
                  <Link href="https://facebook.com/wabobs2" target="_blank">
                     <TelegramIcon sx={{ color: '#FFF', widows: '20px' }} />
                  </Link>
                  <Link href="https://x.com/wabobs2" target="_blank">
                     <XIcon sx={{ color: '#FFF', widows: '20px' }} />
                  </Link>
               </Stack>
            </Stack>
         </Container>
      </FooterStyle>
   );
};

export default Footer;
