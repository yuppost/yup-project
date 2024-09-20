import Stack from '@mui/material/Stack';
import { Container, Link } from '@mui/material';
import { styled } from '@mui/system';

import { FaTelegramPlane } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import FooterCSS from './Icons.module.css';

const FooterStyle = styled('footer')({
   color: '#fff',
   backgroundColor: '#2F343F',
   padding: '12px 0px 0px 0px',
   marginTop: '70px',
});

const Footer = () => {
   return (
      <FooterStyle>
         <Container maxWidth="lg">
            <Stack
               direction="row"
               spacing={0.5}
               justifyContent={'center'}
               alignItems={'center'}
            >
               <Link href="https://t.me/WABOBSNews" target="_blank">
                  <FaFacebookF className={FooterCSS.styledClass} />
               </Link>
               <Link href="https://facebook.com/wabobs2" target="_blank">
                  <FaTelegramPlane className={FooterCSS.styledClass} />
               </Link>
               <Link href="https://x.com/wabobs2" target="_blank">
                  <FaTwitter className={FooterCSS.styledClass} />
               </Link>
            </Stack>
         </Container>
      </FooterStyle>
   );
};

export default Footer;
