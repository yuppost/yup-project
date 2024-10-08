import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
   AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const AccordianObject = [
   {
      id: '1',
      title: 'What is KOFIPOST?',
      content:
         'KOFIPOST is an online news media platform, created by the WABOBS team. Now we are active on our Telegram channel. Soon, we will be active on Facebook, X, and other social media platforms.',
      panel: 'panel1',
   },
   {
      id: '2',
      title: 'Why is the name so weird?',
      content:
         'It is! We have a big roadmap. KOFIPOST name is perfect for fulfilling our roadmap. It is going to be a big journey. We welcome you to our journey with your support.',
      panel: 'panel2',
   },
   {
      id: '3',
      title: 'How long will it take to launch KOFIPOST?',
      content:
         'We are unsure. We lack the necessary resources and funds. However, our development and design team is working very hard. We hope to launch the website within a year.',
      panel: 'panel3',
   },
];

const Accordion = styled((props: AccordionProps) => (
   <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
   border: `1px solid ${theme.palette.divider}`,
   '&:not(:last-child)': {
      borderBottom: 0,
   },
   '&::before': {
      display: 'none',
   },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
   <MuiAccordionSummary {...props} />
))(({ theme }) => ({
   backgroundColor: 'rgba(0, 87, 163, 0.034)',
   flexDirection: 'row',
   '& .MuiAccordionSummary-expandIconWrapper': {
      transform: 'rotate(0deg)',
      transition: 'transform 0.3s ease',
   },
   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
   },
   '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
   },
   ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(255, 255, 255, .05)',
   }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
   padding: theme.spacing(2),
   borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const AccordianComponent = () => {
   const [expanded, setExpanded] = useState<string | false>('panel1');

   const handleChange =
      (panel: string) =>
      (event: React.SyntheticEvent, newExpanded: boolean) => {
         setExpanded(newExpanded ? panel : false);
         event.preventDefault();
      };

   return (
      <Box sx={{ marginTop: 8, marginBottom: 20 }}>
         {AccordianObject.map((item) => (
            <Accordion
               expanded={expanded === item.panel}
               onChange={handleChange(item.panel)}
               key={item.id}
            >
               <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                  sx={{
                     background:
                        expanded === item.panel
                           ? '#0057a3'
                           : 'rgba(0, 87, 163, 0.034)',
                     color: expanded === item.panel ? '#fff' : '#000',
                  }}
                  expandIcon={
                     <ArrowForwardIosSharpIcon
                        sx={{
                           fontSize: '0.9rem',
                           color: expanded === item.panel ? '#fff' : '#000',
                        }}
                     />
                  }
               >
                  <Typography>{item.title}</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography>{item.content}</Typography>
               </AccordionDetails>
            </Accordion>
         ))}
      </Box>
   );
};

export default AccordianComponent;
