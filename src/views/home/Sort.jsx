import Button from 'react-bootstrap/Button';
import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const Sort = ({
  toggleRect, togglePop, toggleRes, rect, pop, res
}) => (
  <Box
    style={{
      animation: 'slide-down .3s ease 1'
    }}
    className="sort-container"
  >
    <div className="sort-body">
      <Button
        onClick={toggleRect}
        className={rect ? 'sort-button-active' : 'sort-button'}
      >
        <p style={{ color: rect ? 'white' : 'black' }}>Рекомендации</p>
      </Button>
      <Button
        onClick={togglePop}
        className={pop ? 'sort-button-active' : 'sort-button'}
      >
        <p style={{ color: pop ? 'white' : 'black' }}>Популярное</p>
      </Button>
      <Button
        onClick={toggleRes}
        className={res ? 'sort-button-active' : 'sort-button'}
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
