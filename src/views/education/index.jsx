import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDocumentTitle, useScrollTop } from '@/hooks';

const Education = () => {
  useDocumentTitle('Education | Qoqiqaz');
  useScrollTop();

  const [showInfo, setShowInfo] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  const toggleInfo = () => {
    setShowInfo(true);
    setShowContacts(false);
  };

  useEffect(() => {
    // Ensure that the first button is clicked when the page is just opened
    toggleInfo();
  }, []);

  const toggleContacts = () => {
    setShowInfo(false);
    setShowContacts(true);
  };

  return (
    <main
      className="content"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div>
        <div>
          <h2 style={{ marginTop: '5rem', marginLeft: '2rem' }}>Обучение</h2>
          <Button
            onClick={toggleInfo}
            style={{
              // marginTop: "2rem",
              marginLeft: '2rem',
              backgroundColor: showInfo ? '#F28290' : 'white',
              color: showInfo ? 'white' : 'black',
              border: showInfo ? 'none' : '1px solid black',
              borderRadius: '12px',
              width: '12rem',
              height: '5rem'
            }}
          >
            Обучиться
          </Button>
          <Button
            onClick={toggleContacts}
            style={{
              // marginTop: "2rem",
              marginLeft: '2rem',
              backgroundColor: showContacts ? '#F28290' : 'white',
              color: showContacts ? 'white' : 'black',
              border: showContacts ? 'none' : ' 1px solid black',
              borderRadius: '12px',
              width: '12rem',
              height: '5rem'
            }}
          >
            Обучать
          </Button>
          <br />
          <br />
        </div>
        {showInfo && (
          <div style={{ overflow: 'scroll' }}>
            <Card
              style={{
                border: '1px solid black',
                backgroundColor: 'white',
                height: '100%',
                borderRadius: '20px',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginTop: '1rem',
                marginLeft: '2rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p
                  style={{
                    color: 'black',
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    marginLeft: '4rem'
                  }}
                >
                  Название
                </p>
                <p
                  style={{
                    color: 'black',
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    marginRight: '2rem'
                  }}
                >
                  Длительность
                </p>
                <p
                  style={{
                    color: 'black',
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    marginRight: '20rem'
                  }}
                >
                  Описание
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column'
                }}
              >
                <Card
                  style={{
                    flex: 1,
                    marginRight: '1rem',
                    border: '1px solid black',
                    borderRadius: '20px',
                    height: '100%'
                  }}
                >
                  {' '}
                  {/* First card */}
                  <Card.Body>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '3rem'
                      }}
                    >
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginLeft: '4rem',
                          width: '15rem'
                        }}
                      >
                        Креативный подход в менеджменте
                      </Card.Title>
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '10rem'
                        }}
                      >
                        2 недели
                      </Card.Title>
                      <Card.Title
                        style={{
                          width: '20rem',
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '7rem'
                        }}
                      >
                        Основные предметы бизнес-программ и курсы по развитию навыков креативного мышления.
                      </Card.Title>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '4rem' }}>
                      <Button
                        style={{
                          backgroundColor: '#F28290',
                          color: 'white',
                          border: 'none',
                          borderRadius: '12px',
                          marginLeft: '4rem',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Записаться
                      </Button>
                      <Button
                        style={{
                          marginLeft: '2rem',
                          backgroundColor: 'white',
                          color: '#F28290',
                          border: '1px solid #F28290',
                          borderRadius: '12px',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Подробнее
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    flex: 1,
                    marginRight: '1rem',
                    border: '1px solid black',
                    borderRadius: '20px',
                    height: '100%',
                    marginTop: '2rem'
                  }}
                >
                  {' '}
                  {/* First card */}
                  <Card.Body>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '3rem'
                      }}
                    >
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginLeft: '4rem',
                          width: '15rem'
                        }}
                      >
                        Развитие soft-skills у менеджеров
                      </Card.Title>
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '10rem'
                        }}
                      >
                        2 недели
                      </Card.Title>
                      <Card.Title
                        style={{
                          width: '20rem',
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '7rem'
                        }}
                      >
                        Вы получите и усилите мягкие навыки, необходимые современным менеджерам.
                      </Card.Title>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '4rem' }}>
                      <Button
                        style={{
                          backgroundColor: '#F28290',
                          color: 'white',
                          border: 'none',
                          borderRadius: '12px',
                          marginLeft: '4rem',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Записаться
                      </Button>
                      <Button
                        style={{
                          marginLeft: '2rem',
                          backgroundColor: 'white',
                          color: '#F28290',
                          border: '1px solid #F28290',
                          borderRadius: '12px',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Подробнее
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    flex: 1,
                    marginRight: '1rem',
                    border: '1px solid black',
                    borderRadius: '20px',
                    height: '100%',
                    marginTop: '2rem'
                  }}
                >
                  {' '}
                  {/* First card */}
                  <Card.Body>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '3rem'
                      }}
                    >
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginLeft: '4rem',
                          width: '15rem'
                        }}
                      >
                        Студия анимации
                      </Card.Title>
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '10rem'
                        }}
                      >
                        2 недели
                      </Card.Title>
                      <Card.Title
                        style={{
                          width: '20rem',
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '7rem'
                        }}
                      >
                        Изучение современных компьютерных технологий для получения навыков создания анимации на основе ее классической школы.
                      </Card.Title>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '4rem' }}>
                      <Button
                        style={{
                          backgroundColor: '#F28290',
                          color: 'white',
                          border: 'none',
                          borderRadius: '12px',
                          marginLeft: '4rem',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Записаться
                      </Button>
                      <Button
                        style={{
                          marginLeft: '2rem',
                          backgroundColor: 'white',
                          color: '#F28290',
                          border: '1px solid #F28290',
                          borderRadius: '12px',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Подробнее
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    flex: 1,
                    marginRight: '1rem',
                    border: '1px solid black',
                    borderRadius: '20px',
                    height: '100%',
                    marginTop: '2rem'
                  }}
                >
                  {' '}
                  {/* First card */}
                  <Card.Body>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '3rem'
                      }}
                    >
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginLeft: '4rem',
                          width: '15rem'
                        }}
                      >
                        Студия фото и видеопроизводства
                      </Card.Title>
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '10rem'
                        }}
                      >
                        2 недели
                      </Card.Title>
                      <Card.Title
                        style={{
                          width: '20rem',
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '7rem'
                        }}
                      >
                        Освоение и развитие базовых навыков в сфере фото и видеопроизводства.
                      </Card.Title>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '4rem' }}>
                      <Button
                        style={{
                          backgroundColor: '#F28290',
                          color: 'white',
                          border: 'none',
                          borderRadius: '12px',
                          marginLeft: '4rem',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Записаться
                      </Button>
                      <Button
                        style={{
                          marginLeft: '2rem',
                          backgroundColor: 'white',
                          color: '#F28290',
                          border: '1px solid #F28290',
                          borderRadius: '12px',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Подробнее
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    flex: 1,
                    marginRight: '1rem',
                    border: '1px solid black',
                    borderRadius: '20px',
                    height: '100%',
                    marginTop: '2rem'
                  }}
                >
                  {' '}
                  {/* First card */}
                  <Card.Body>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '3rem'
                      }}
                    >
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginLeft: '4rem',
                          width: '15rem'
                        }}
                      >
                        Студия звукорежиссуры и современной электронной музыки
                      </Card.Title>
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '10rem'
                        }}
                      >
                        2 недели
                      </Card.Title>
                      <Card.Title
                        style={{
                          width: '20rem',
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '7rem'
                        }}
                      >
                        Освоение навыков записи, сведения и мастеринга звука; освоение навыков написания электронной музыки; освоение навыков создания звука к видеоряду.
                      </Card.Title>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '4rem' }}>
                      <Button
                        style={{
                          backgroundColor: '#F28290',
                          color: 'white',
                          border: 'none',
                          borderRadius: '12px',
                          marginLeft: '4rem',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Записаться
                      </Button>
                      <Button
                        style={{
                          marginLeft: '2rem',
                          backgroundColor: 'white',
                          color: '#F28290',
                          border: '1px solid #F28290',
                          borderRadius: '12px',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Подробнее
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    flex: 1,
                    marginRight: '1rem',
                    border: '1px solid black',
                    borderRadius: '20px',
                    height: '100%',
                    marginTop: '2rem'
                  }}
                >
                  {' '}
                  {/* First card */}
                  <Card.Body>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '3rem'
                      }}
                    >
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginLeft: '4rem',
                          width: '15rem'
                        }}
                      >
                        Студия интерактивных цифровых технологий
                      </Card.Title>
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '10rem'
                        }}
                      >
                        2 недели
                      </Card.Title>
                      <Card.Title
                        style={{
                          width: '20rem',
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '7rem'
                        }}
                      >
                        Обучение использованию интерактивных цифровых, в том числе VR/AR - технологий в качестве художественной выразительности при создании творческих проектов различных направлений.
                      </Card.Title>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '4rem' }}>
                      <Button
                        style={{
                          backgroundColor: '#F28290',
                          color: 'white',
                          border: 'none',
                          borderRadius: '12px',
                          marginLeft: '4rem',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Записаться
                      </Button>
                      <Button
                        style={{
                          marginLeft: '2rem',
                          backgroundColor: 'white',
                          color: '#F28290',
                          border: '1px solid #F28290',
                          borderRadius: '12px',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Подробнее
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    flex: 1,
                    marginRight: '1rem',
                    border: '1px solid black',
                    borderRadius: '20px',
                    height: '100%',
                    marginTop: '2rem'
                  }}
                >
                  {' '}
                  {/* First card */}
                  <Card.Body>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '3rem'
                      }}
                    >
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginLeft: '4rem',
                          width: '15rem'
                        }}
                      >
                        Театральная студия
                      </Card.Title>
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '10rem'
                        }}
                      >
                        2 недели
                      </Card.Title>
                      <Card.Title
                        style={{
                          width: '20rem',
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '7rem'
                        }}
                      >
                        Посредством актерского мастерства развитие творческой фантазии, коммуникативных навыков, воображения, внимания и памяти.
                      </Card.Title>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '4rem' }}>
                      <Button
                        style={{
                          backgroundColor: '#F28290',
                          color: 'white',
                          border: 'none',
                          borderRadius: '12px',
                          marginLeft: '4rem',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Записаться
                      </Button>
                      <Button
                        style={{
                          marginLeft: '2rem',
                          backgroundColor: 'white',
                          color: '#F28290',
                          border: '1px solid #F28290',
                          borderRadius: '12px',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Подробнее
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    flex: 1,
                    marginRight: '1rem',
                    border: '1px solid black',
                    borderRadius: '20px',
                    height: '100%',
                    marginTop: '2rem'
                  }}
                >
                  {' '}
                  {/* First card */}
                  <Card.Body>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '3rem'
                      }}
                    >
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginLeft: '4rem',
                          width: '15rem'
                        }}
                      >
                        Студия танца
                      </Card.Title>
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '10rem'
                        }}
                      >
                        2 недели
                      </Card.Title>
                      <Card.Title
                        style={{
                          width: '20rem',
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '7rem'
                        }}
                      >
                        Развитие пластической свободы и выразительности. Знакомство с современным пластическим театром.
                      </Card.Title>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '4rem' }}>
                      <Button
                        style={{
                          backgroundColor: '#F28290',
                          color: 'white',
                          border: 'none',
                          borderRadius: '12px',
                          marginLeft: '4rem',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Записаться
                      </Button>
                      <Button
                        style={{
                          marginLeft: '2rem',
                          backgroundColor: 'white',
                          color: '#F28290',
                          border: '1px solid #F28290',
                          borderRadius: '12px',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Подробнее
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    flex: 1,
                    marginRight: '1rem',
                    border: '1px solid black',
                    borderRadius: '20px',
                    height: '100%',
                    marginTop: '2rem'
                  }}
                >
                  {' '}
                  {/* First card */}
                  <Card.Body>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '3rem'
                      }}
                    >
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginLeft: '4rem',
                          width: '15rem'
                        }}
                      >
                        Fashion Студия
                      </Card.Title>
                      <Card.Title
                        style={{
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '10rem'
                        }}
                      >
                        2 недели
                      </Card.Title>
                      <Card.Title
                        style={{
                          width: '20rem',
                          color: 'black',
                          fontFamily: 'Inter',
                          fontWeight: '500',
                          marginRight: '7rem'
                        }}
                      >
                        История моды. Освоение навыков дизайна и создания одежды.
                      </Card.Title>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '4rem' }}>
                      <Button
                        style={{
                          backgroundColor: '#F28290',
                          color: 'white',
                          border: 'none',
                          borderRadius: '12px',
                          marginLeft: '4rem',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Записаться
                      </Button>
                      <Button
                        style={{
                          marginLeft: '2rem',
                          backgroundColor: 'white',
                          color: '#F28290',
                          border: '1px solid #F28290',
                          borderRadius: '12px',
                          width: '12rem',
                          height: '4rem'
                        }}
                      >
                        Подробнее
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Card>
          </div>
        )}
        {showContacts && (
        <div>
          <Card
            style={{
              border: '1px solid black',
              backgroundColor: 'white',
              height: '100%',
              borderRadius: '20px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginTop: '1rem',
              marginLeft: '2rem'
            }}
          >
            {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p
                style={{
                  color: 'black',
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  marginLeft: '4rem'
                }}
              >
                Название
              </p>
              <p
                style={{
                  color: 'black',
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  marginRight: '2rem'
                }}
              >
                Длительность
              </p>
              <p
                style={{
                  color: 'black',
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  marginRight: '20rem'
                }}
              >
                Описание
              </p>
            </div> */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column'
              }}
            >
              <Card
                style={{
                  flex: 1,
                  marginRight: '1rem',
                  border: '1px solid black',
                  borderRadius: '20px',
                  height: '100%'
                }}
              >
                {' '}
                {/* First card */}
                <Card.Body>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: '3rem'
                    }}
                  >
                    <Card.Title
                      style={{
                        color: 'black',
                        fontFamily: 'Inter',
                        fontWeight: '500',
                        marginLeft: '4rem',
                        width: '15rem'
                      }}
                    >
                      Присоединяйтесь к qoqi project!
                    </Card.Title>

                    <Card.Text style = {{marginTop:'0', marginLeft:'5rem', width:'70%', textAlign:'justify', marginRight:'5rem'}}>
                      Хотите поделиться своими знаниями и опытом с другими? У нас есть для вас отличная возможность стать частью нашего сообщества!

                      На нашей платформе мы предоставляем уникальную площадку для обучения, где каждый может предложить свой собственный курс. Независимо от того, являетесь ли вы экспертом в определенной области, профессиональным преподавателем или просто у вас есть что-то ценное для передачи другим – ваш курс имеет свое место здесь.

                      Мы поддерживаем разнообразие тем и форматов обучения, поэтому вы можете создать курс по практически любой теме: от рисования и скульптурирования до музыки и ремесел. Вы также можете выбрать формат обучения, который наилучшим образом подходит вашему материалу: видеоуроки, онлайн лекции, интерактивные курсы или даже офлайн лекции.

                      Присоединяйтесь к нам сегодня, чтобы поделиться своими знаниями и помочь другим учиться и расти!
                    </Card.Text>
                  </div>
                  <div style={{ display: 'flex', marginBottom: '4rem' }}>
                    <Button
                      style={{
                        backgroundColor: '#F28290',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        marginLeft: '4rem',
                        width: '12rem',
                        height: '4rem'
                      }}
                    >
                      Создать
                    </Button>
                    <Button
                      style={{
                        marginLeft: '2rem',
                        backgroundColor: 'white',
                        color: '#F28290',
                        border: '1px solid #F28290',
                        borderRadius: '12px',
                        width: '12rem',
                        height: '4rem'
                      }}
                    >
                      Узнать подробнее
                    </Button>
                  </div>
                </Card.Body>
              </Card>

            </div>
          </Card>
        </div>
        )}
      </div>
    </main>
  );
};

export default Education;
