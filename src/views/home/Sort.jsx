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
      width: 'fit-content',
      height: '5rem',
      padding: '0.5vw'
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
    <div style={{
      borderRadius: '10rem',
      backgroundColor: 'white',
      height: '4rem',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row'
    }}
    >
      <Button
        onClick={toggleRect}
        style={{
          backgroundColor: rect ? 'black' : 'white',
          borderRadius: '10rem',
          border: 'none',
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5vw'
        }}
      >
        <p style={{ color: rect ? 'white' : 'black' }}>Рекомендации</p>
      </Button>
      <Button
        onClick={togglePop}
        style={{
          backgroundColor: pop ? 'black' : 'white',
          borderRadius: '10rem',
          border: 'none',
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5vw'
        }}
      >
        <p style={{ color: pop ? 'white' : 'black' }}>Популярное</p>
      </Button>
      <Button
        onClick={toggleRes}
        style={{
          backgroundColor: res ? 'black' : 'white',
          borderRadius: '10rem',
          border: 'none',
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5vw'
        }}
      >
        <p style={{ color: res ? 'white' : 'black' }}>Недавние</p>
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
