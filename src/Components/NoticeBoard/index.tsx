import { Box, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const myCss = {
   maxWidth: '100%',
   width: '600px',
   marginTop: '100px',
   marginLeft: 'auto',
   marginRight: 'auto',
};

const NoticeBoard = () => {
   return (
      <>
         <Box sx={myCss}>
            <Grid container spacing={2} textAlign={'center'}>
               <Grid size={12}>
                  <Typography variant="h4" component={'h1'}>
                     Coming Soon, Stay Tuned...
                  </Typography>
               </Grid>
               <Grid size={12}>
                  <Typography
                     variant="body1"
                     component={'p'}
                     color="textSecondary"
                  >
                     Our design and development team is working hard. We will be
                     launching soon. For updates, please follow our{' '}
                     <Link
                        href="https://t.me/WABOBSNews"
                        target="_blank"
                        underline="none"
                     >
                        Telegram
                     </Link>{' '}
                     channel.
                  </Typography>
               </Grid>
            </Grid>
         </Box>
      </>
   );
};

export default NoticeBoard;
