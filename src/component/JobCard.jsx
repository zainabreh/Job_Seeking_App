import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createSvgIcon } from '@mui/material/utils';
import { Link } from 'react-router-dom';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>,
  'Plus',
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      <i class="fa-solid fa-location-dot"></i>  Islamabad
      </Typography>
      <Typography variant="h5" component="div">
        {/* be{bull}nev{bull}o{bull}lent */}
        Backend developer
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Part-Time
      </Typography>
      <Typography variant="body2" sx={{
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2, /* show only 2 lines */
    WebkitBoxOrient: 'vertical'
  }}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit excepturi consectetur eligendi! Voluptas, harum.
      </Typography>
    </CardContent>
    <CardActions>
    <Link to={"/jobdetail"}><Button startIcon={<PlusIcon />} sx={{marginBlock:"5px"}}>
  Details
</Button>
</Link>
    </CardActions>
  </React.Fragment>
);

export default function JobCard() {
  return (
    <>
    <Box sx={{ maxWidth: 280 }}>
      <Card variant="elevation">{card}</Card>
    </Box>
    <Box sx={{ maxWidth: 280 }}>
      <Card variant="elevation">{card}</Card>
    </Box>
    <Box sx={{ maxWidth: 280 }}>
      <Card variant="elevation">{card}</Card>
    </Box>
    <Box sx={{ maxWidth: 280 }}>
      <Card variant="elevation">{card}</Card>
    </Box>
    <Box sx={{ maxWidth: 280 }}>
      <Card variant="elevation">{card}</Card>
    </Box>

  
    </>
  );
}

