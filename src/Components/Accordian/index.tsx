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
      title: 'What is KOFIpost?',
      content:
         'KOFIPOST is an online news media platform, created by the WABOBS team. Now we are active on our Telegram channel. Soon, we will be active on Facebook, X, and other social media platforms.',
      panel: 'panel1',
   },
   {
      id: '2',
      title: 'Why is the name so weird?',
      content:
         'lorem ipsum dolor sit amet. Lore mauris just et sapien et dolor.',
      panel: 'panel2',
   },
   {
      id: '3',
      title: 'How long will it take to launch KOFIPOST?',
      content:
         'lorem ipsum dolor sit amet. Lore mauris just et sapien et dolor.',
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
   <MuiAccordionSummary
      expandIcon={
         <ArrowForwardIosSharpIcon
            sx={{
               fontSize: '0.9rem',
               color: props.expanded ? '#fff' : '#000',
            }}
         />
      }
      {...props}
   />
))(({ theme }) => ({
   backgroundColor: 'rgba(0, 87, 163, 0.034)',
   flexDirection: 'row',
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
      <Box sx={{ marginTop: 8 }}>
         {AccordianObject.map((item) => (
            <Accordion
               expanded={expanded === item.panel}
               onChange={handleChange(item.panel)}
               key={item.id}
            >
               <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                  expandIcon={
                     <ArrowForwardIosSharpIcon
                        sx={{
                           fontSize: '0.9rem',
                           color: expanded === item.panel ? '#fff' : '#000', // Arrow color change
                        }}
                     />
                  }
                  sx={{
                     background:
                        expanded === item.panel
                           ? '#0057a3'
                           : 'rgba(0, 87, 163, 0.034)', // Background color change
                     color: expanded === item.panel ? '#fff' : '#000', // Text color change
                  }}
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
