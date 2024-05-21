import Button from 'react-bootstrap/Button';
import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { withStyles } from '@mui/styles';


const CustomOutlinedInput = withStyles({
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none'
    }
  }
})(OutlinedInput);

const Categories = ({
  activeButton, handleBrandSelect, selectedBrand, MenuProps
}) => (
  <div
    className="categories-container"
  >
    <Button
      className={
      activeButton === '' ? 'filter-buttons-active' : 'filter-buttons'
    }
      onClick={() => handleBrandSelect('')}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p
        className={
          activeButton === '' ? 'filter-buttons-text-active' : 'filter-buttons-text'
        }
      >
        Все категории
      </p>
    </Button>

    <Button
      className={
      activeButton === 'фотографии'
        ? 'filter-buttons-active'
        : 'filter-buttons'
    }
      onClick={() => handleBrandSelect('фотографии')}
      style={{
        marginLeft: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p
        className={
          activeButton === 'фотографии' ? 'filter-buttons-text-active' : 'filter-buttons-text'
        }
      >
        Фотографии
      </p>
    </Button>
    <Button
      className={
      activeButton === 'иллюстрации'
        ? 'filter-buttons-active'
        : 'filter-buttons'
    }
      onClick={() => handleBrandSelect('иллюстрации')}
      style={{
        marginLeft: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p
        className={
          activeButton === 'иллюстрации' ? 'filter-buttons-text-active' : 'filter-buttons-text'
        }
      >
        Иллюстрации
      </p>
    </Button>
    <Button
      className={
      activeButton === '3d'
        ? 'filter-buttons-active'
        : 'filter-buttons'
    }
      onClick={() => handleBrandSelect('3d')}
      style={{
        marginLeft: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p
        className={
          activeButton === '3d' ? 'filter-buttons-text-active' : 'filter-buttons-text'
        }
      >
        3D
      </p>
    </Button>
    <Button
      className={
      activeButton === 'аудио'
        ? 'filter-buttons-active'
        : 'filter-buttons'
    }
      onClick={() => handleBrandSelect('аудио')}
      style={{
        marginLeft: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p
        className={
          activeButton === 'аудио' ? 'filter-buttons-text-active' : 'filter-buttons-text'
        }
      >
        Аудио
      </p>
    </Button>
    <Button
      className={
      activeButton === 'анимации'
        ? 'filter-buttons-active'
        : 'filter-buttons'
    }
      onClick={() => handleBrandSelect('анимации')}
      style={{
        marginLeft: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p
        className={
          activeButton === 'анимации' ? 'filter-buttons-text-active' : 'filter-buttons-text'
        }
      >
        Анимации
      </p>
    </Button>
    <Button
      className={
      activeButton === 'инсталяции'
        ? 'filter-buttons-active'
        : 'filter-buttons'
    }
      onClick={() => handleBrandSelect('инсталяции')}
      style={{
        marginLeft: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p
        className={
          activeButton === 'инсталяции' ? 'filter-buttons-text-active' : 'filter-buttons-text'
        }
      >
        Инсталяции
        {' '}
      </p>
    </Button>
    <Button
      className={
      activeButton === 'дизайн одежды'
        ? 'filter-buttons-active'
        : 'filter-buttons'
    }
      onClick={() => handleBrandSelect('дизайн одежды')}
      style={{
        marginLeft: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p
        className={
          activeButton === 'дизайн одежды' ? 'filter-buttons-text-active' : 'filter-buttons-text'
        }
      >
        Дизайн одежды
      </p>
    </Button>
    <Button
      className={
      activeButton === 'дизайн интерьера'
        ? 'filter-buttons-active'
        : 'filter-buttons'
    }
      onClick={() => handleBrandSelect('дизайн интерьера')}
      style={{
        marginLeft: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p
        className={
          activeButton === 'дизайн интерьера' ? 'filter-buttons-text-active' : 'filter-buttons-text'
        }
      >
        Дизайн интерьера
      </p>
    </Button>
    <Button
      className={
      activeButton === 'граффитти'
        ? 'filter-buttons-active'
        : 'filter-buttons'
    }
      onClick={() => handleBrandSelect('граффитти')}
      style={{
        marginLeft: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p
        className={
          activeButton === 'граффитти' ? 'filter-buttons-text-active' : 'filter-buttons-text'
        }
      >
        Граффитти
      </p>
    </Button>
    <Button
      className={
      activeButton === 'арт'
        ? 'filter-buttons-active'
        : 'filter-buttons'
    }
      onClick={() => handleBrandSelect('арт')}
      style={{
        marginLeft: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p
        className={
          activeButton === 'арт' ? 'filter-buttons-text-active' : 'filter-buttons-text'
        }
      >
        Арт
      </p>
    </Button>
    <Button
      className={
      activeButton === 'реконструкция обьектов'
        ? 'filter-buttons-active'
        : 'filter-buttons'
    }
      onClick={() => handleBrandSelect('реконструкция обьектов')}
      style={{
        marginLeft: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p
        className={
          activeButton === 'реконструкция обьектов' ? 'filter-buttons-text-active' : 'filter-buttons-text'
        }
      >
        Реконструкция обьектов
      </p>
    </Button>
    {selectedBrand !== 'стримы' && selectedBrand !== 'полезные лайфхаки в игре' && selectedBrand !== 'новости из игр' && selectedBrand !== 'блоги'
      ? (
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
      )
      : (
        <>
          <Box
            className="filter-buttons-active"
            style={{
              marginLeft: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'
            }}
          >
            <FormControl fullWidth sx={{ borderRadius: '10px !important' }}>
              <Select
                displayEmpty
                value={selectedBrand}
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
        </>
      )}

    {selectedBrand !== 'исследования' && selectedBrand !== 'обзоры'
      ? (
        <Box
          className="filter-buttons"
          style={{
            marginLeft: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'
          }}
        >
          <FormControl fullWidth>
            <Select
              displayEmpty
              value=""
              input={<CustomOutlinedInput />}
              onChange={(event) => handleBrandSelect(event.target.value)}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
              style={{ border: 'none' }}
            >
              <MenuItem
                value=""
                className="select-text"
                sx={{
                  '&:hover': { backgroundColor: 'transparent' }, // Override hover style
                  '&.Mui-selected': { backgroundColor: '#f28290' } // Background color for selected item
                }}
              >
                <p className="select-text">Блоги/статьи</p>
              </MenuItem>
              <MenuItem
                value="исследования"
                sx={{
                  '&:hover': { backgroundColor: 'transparent' }, // Override hover style
                  '&.Mui-selected': { backgroundColor: '#f28290' } // Background color for selected item
                }}
              >
                <p
                  className={
          activeButton === 'исследования' ? 'select-text-active' : 'select-text'
        }
                >
                  Исследования
                </p>
              </MenuItem>
              <MenuItem
                value="обзоры"
                sx={{
                  '&:hover': { backgroundColor: 'transparent' }, // Override hover style
                  '&.Mui-selected': { backgroundColor: '#f28290' } // Background color for selected item
                }}
              >
                {' '}
                <p
                  className={
          activeButton === 'обзоры' ? 'select-text-active' : 'select-text'
        }
                >
                  Полезные лайфхаки в игре
                </p>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      )
      : (
        <>
          <Box
            className="filter-buttons-active"
            style={{
              marginLeft: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'
            }}
          >
            <FormControl fullWidth>
              <Select
                displayEmpty
                value={selectedBrand}
                input={<CustomOutlinedInput />}
                onChange={(event) => handleBrandSelect(event.target.value)}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
                style={{ border: 'none' }}
              >
                <MenuItem
                  value=""
                  className="select-text"
                  sx={{
                    '&:hover': { backgroundColor: 'transparent' }, // Override hover style
                    '&.Mui-selected': { backgroundColor: '#f28290' } // Background color for selected item
                  }}
                >
                  <p className="select-text">Блоги/статьи</p>
                </MenuItem>
                <MenuItem
                  value="исследования"
                  sx={{
                    '&:hover': { backgroundColor: 'transparent' }, // Override hover style
                    '&.Mui-selected': { backgroundColor: '#f28290' } // Background color for selected item
                  }}
                >
                  <p
                    className={
          activeButton === 'исследования' ? 'select-text-active' : 'select-text'
        }
                  >
                    Исследования
                  </p>
                </MenuItem>
                <MenuItem
                  value="обзоры"
                  sx={{
                    '&:hover': { backgroundColor: 'transparent' }, // Override hover style
                    '&.Mui-selected': { backgroundColor: '#f28290' } // Background color for selected item
                  }}
                >
                  {' '}
                  <p
                    className={
          activeButton === 'обзоры' ? 'select-text-active' : 'select-text'
        }
                  >
                    Полезные лайфхаки в игре
                  </p>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </>
      )}
    <Button
      className={
      activeButton === 'графичесĸий дизайн'
        ? 'filter-buttons-active'
        : 'filter-buttons'
    }
      onClick={() => handleBrandSelect('графичесĸий дизайн')}
      style={{
        marginLeft: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p
        className={
          activeButton === 'графичесĸий дизайн' ? 'filter-buttons-text-active' : 'filter-buttons-text'
        }
      >
        Графичесĸий дизайн
      </p>
    </Button>
  </div>
);

Categories.propTypes = {
  activeButton: PropTypes.string.isRequired,
  handleBrandSelect: PropTypes.func.isRequired,
  selectedBrand: PropTypes.string.isRequired,
  MenuProps: PropTypes.shape({
    PaperProps: PropTypes.shape({
      style: PropTypes.shape({
        maxHeight: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default Categories;
