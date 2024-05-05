import React, { useEffect, useRef } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import { withStyles } from '@mui/styles';

const BigMenu = () => {
  const CustomOutlinedInput = withStyles({
    root: {
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
      }
    }
  })(OutlinedInput);
  return (
    <Box
      className="filter-buttons"
      style={{
        marginLeft: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'
      }}
    >
      <FormControl fullWidth sx={{ borderRadius: '10px !important' }}>
        <Select
          displayEmpty
          value=""
          input={<CustomOutlinedInput />}
          onChange={(event) => handleBrandSelect(event.target.value)}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
          style={{ border: 'none', borderRadius: '2vw' }}
        >
          <MenuItem
            value=""
            className="select-text"
            sx={{
              '&:hover': { backgroundColor: 'transparent' }, // Override hover style
              '&.Mui-selected': { backgroundColor: '#f28290' } // Background color for selected item
            }}
          >
            <p className="select-text">Киберспорт</p>
          </MenuItem>
          <MenuItem
            value="стримы"
            sx={{
              '&:hover': { backgroundColor: 'transparent' }, // Override hover style
              '&.Mui-selected': { backgroundColor: '#f28290' } // Background color for selected item
            }}
          >
            <p
              className={
activeButton === 'стримы' ? 'select-text-active' : 'select-text'
}
            >
              Стримы
            </p>
          </MenuItem>
          <MenuItem
            value="полезные лайфхаки в игре"
            sx={{
              '&:hover': { backgroundColor: 'transparent' }, // Override hover style
              '&.Mui-selected': { backgroundColor: '#f28290' } // Background color for selected item
            }}
          >
            {' '}
            <p
              className={
activeButton === 'полезные лайфхаки в игре' ? 'select-text-active' : 'select-text'
}
            >
              Полезные лайфхаки в игре
            </p>
          </MenuItem>
          <MenuItem
            value="новости из игр"
            sx={{
              '&:hover': { backgroundColor: 'transparent' }, // Override hover style
              '&.Mui-selected': { backgroundColor: '#f28290' } // Background color for selected item
            }}
          >
            {' '}
            <p
              className={
activeButton === 'новости из игр' ? 'select-text-active' : 'select-text'
}
            >
              Новости из игр
            </p>
          </MenuItem>
          <MenuItem
            value="блоги"
            sx={{
              '&:hover': { backgroundColor: 'transparent' }, // Override hover style
              '&.Mui-selected': { backgroundColor: '#f28290' } // Background color for selected item
            }}
          >
            <p
              className={
activeButton === 'блоги' ? 'select-text-active' : 'select-text'
}
            >
              Блоги
            </p>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BigMenu;
