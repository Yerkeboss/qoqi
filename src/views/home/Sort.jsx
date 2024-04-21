import Button from 'react-bootstrap/Button';
import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const Sort = ({
  toggleRect, togglePop, toggleRes, rect, pop, res
}) => (
  <Box
    sx={{
      background: 'white',
      wifth: '15rem',
      justifyContent: 'center',
      alignItems: 'center',
      height: '5rem'
    }}
    style={{
      borderRadius: '10rem',
      position: 'fixed',
      animation: 'slide-down .3s ease 1',
      top: '73rem',
      marginLeft: '2rem',
      paddingTop: '.5rem',
      zIndex: '9999'
    }}
  >
    <div style={{ borderRadius: '10rem', backgroundColor: 'white', height: '4rem' }}>
      <Button
        onClick={toggleRect}
        style={{
          backgroundColor: rect ? 'black' : 'white',
          borderRadius: '10rem',
          color: rect ? 'white' : 'black',
          border: 'none',
          height: '4rem'
        }}
      >
        Рекомендации
      </Button>
      <Button
        onClick={togglePop}
        style={{
          backgroundColor: pop ? 'black' : 'white',
          borderRadius: '10rem',
          color: pop ? 'white' : 'black',
          border: 'none',
          height: '4rem'
        }}
      >
        Популярное
      </Button>
      <Button
        onClick={toggleRes}
        style={{
          backgroundColor: res ? 'black' : 'white',
          borderRadius: '10rem',
          color: res ? 'white' : 'black',
          border: 'none',
          height: '4rem'
        }}
      >
        Недавние
      </Button>
    </div>
  </Box>
);

Sort.propTypes = {
  toggleRect: PropTypes.func.isRequired,
  togglePop: PropTypes.func.isRequired,
  toggleRes: PropTypes.func.isRequired,
  rect: PropTypes.bool.isRequired,
  pop: PropTypes.bool.isRequired,
  res: PropTypes.bool.isRequired
};

export default Sort;
