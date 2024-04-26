import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { useDocumentTitle, useScrollTop } from '@/hooks';

const About = () => {
  useDocumentTitle('AboutUs | Qoqiqaz');
  useScrollTop();

  const [showInfo, setShowInfo] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [firstFloor, setFirstFloor] = useState(false);
  const [secondFloor, setSecondFloor] = useState(false);
  const [thirdFloor, setThirdFloor] = useState(false);

  const toggleInfo = () => {
    setShowInfo(true);
    setShowContacts(false);
  };


  const toggleContacts = () => {
    setShowInfo(false);
    setShowContacts(true);
  };

  const toggleFirstFloor = () => {
    setFirstFloor(true);
    setSecondFloor(false);
    setThirdFloor(false);
  };

  const toggleSecondFloor = () => {
    setFirstFloor(false);
    setSecondFloor(true);
    setThirdFloor(false);
  };

  const toggleThirdFloor = () => {
    setFirstFloor(false);
    setSecondFloor(false);
    setThirdFloor(true);
  };

  useEffect(() => {
    // Ensure that the first button is clicked when the page is just opened
    toggleInfo();
    toggleFirstFloor();
  }, []);


  return (
    <main
      className="content"
      style={{
        width: '97.5%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '2rem',
        marginTop: '3rem'
      }}
    >
      <div>
        <div>
          <h2>О нас</h2>
          <button
            onClick={toggleInfo}
            style={{
              // marginTop: "2rem",
              backgroundColor: showInfo ? '#F28290' : 'white',
              color: showInfo ? 'white' : 'black',
              border: showInfo ? 'none' : '1px solid black',
              borderRadius: '12px'
            }}
          >
            <p
              style={{
                color: showInfo ? 'white' : 'black',
                fontFamily: 'Inter',
                fontWeight: '500'
              }}
            >
              Информация о компании
            </p>
          </button>
          <button
            onClick={toggleContacts}
            style={{
              // marginTop: "2rem",
              marginLeft: '2rem',
              backgroundColor: showContacts ? '#F28290' : 'white',
              color: showContacts ? 'white' : 'black',
              border: showContacts ? 'none' : '1px solid black',
              borderRadius: '12px'
            }}
          >
            <p
              style={{
                color: showContacts ? 'white' : 'black',
                fontFamily: 'Inter',
                fontWeight: '500'
              }}
            >
              Контакты
            </p>
          </button>
          <br />
          <br />
          <br />
        </div>
        {showInfo && (
          <div>
            <div style={{ display: 'flex', marginTop: '1vw' }}>
              <div
                style={{
                  flex: 1,
                  border: '1px solid #F28290',
                  backgroundColor: '#F28290',
                  borderRadius: '20px'

                  // height: "30rem",
                }}
              >
                <div
                  style={{
                    backgroundColor: '#FFFBFB',
                    width: '10rem',
                    borderRadius: '15px',
                    marginLeft: '2rem',
                    height: '3rem',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <p
                    style={{
                      color: '#F28290',
                      marginLeft: '1rem',
                      fontFamily: 'Inter',
                      fontWeight: '500'
                    }}
                  >
                    Описание
                  </p>
                  <p
                    style={{
                      color: 'white',
                      width: '60rem',
                      marginTop: '13rem',
                      fontFamily: 'Inter',
                      fontWeight: '500'
                    }}
                  >
                    ACDSSS (Ассоциация креативного развития социальных и
                    спортивных пространств) – это некоммерческая
                    организация, Целью которой является создание новых точек
                    притяжения в виде креативных арт-пространств и устойчивого
                    образования
                  </p>
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  // border: "1px solid #F28290",
                  // borderRadius: "20px",
                  marginLeft: '2rem'

                }}
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2Fpexels-fauxels-3184418.jpg?alt=media&token=8077d9e9-821e-4edc-a20c-f532dc50e807"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '2rem'
                  }}
                />
              </div>
            </div>
            <div
              style={{
                border: '1px solid #F28290',
                backgroundColor: '#F282904D',
                height: '18rem',
                borderRadius: '20px',
                marginTop: '1rem'
              }}
            >
              <div
                style={{
                  backgroundColor: '#F28290',
                  width: '10rem',
                  borderRadius: '15px',
                  marginLeft: '2rem',
                  height: '3rem',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <p
                  style={{
                    color: 'white',
                    marginLeft: '3rem',
                    fontFamily: 'Inter',
                    fontWeight: '500'
                  }}
                >
                  QOQI
                </p>
                <p
                  style={{
                    color: '#F28290',
                    width: '70rem',
                    marginTop: '3rem',
                    fontFamily: 'Inter',
                    fontWeight: '500'
                  }}
                >
                  QOQI Project – это креативный проект в рамках которого
                  работает Арт-пространство на базе Музея энергии будущего NUR
                  ALEM со следующими активностями:
                </p>
              </div>
            </div>
            <div
              style={{ display: 'flex', marginTop: '1rem', height: '100%' }}
            >
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #F28290',
                  backgroundColor: '#F282904D',
                  borderRadius: '20px',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div style={{
                  background: '#F28290',
                  borderRadius: '15px',
                  height: '3rem',
                  width: '11rem',
                  marginTop: '2rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                >
                  <p
                    style={{
                      color: 'white',
                      width: '9rem',
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      textAlign: 'center'
                    }}
                  >
                    Обучение
                  </p>
                </div>
                <p
                  style={{
                    color: '#F28290',
                    width: '90%',
                    marginLeft: '2rem',
                    fontFamily: 'Inter',
                    fontWeight: '500'
                  }}
                >
                  Программа EMBA «Креативный подход в менеджменте» Школа
                  креативных искусств (ШКИ): музыка, танцы, арт-дизайн, дизайн
                  одежды, театральное искусство
                </p>
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #F28290',
                  backgroundColor: '#F282904D',
                  borderRadius: '20px',
                  // justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: '1rem'
                }}
              >
                <div style={{
                  background: '#F28290',
                  borderRadius: '15px',
                  height: '3rem',
                  width: '12rem',
                  marginTop: '2rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                >
                  <p
                    style={{
                      color: 'white',
                      width: '8rem',
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      textAlign: 'center'
                    }}
                  >
                    Events
                  </p>
                </div>
                <p
                  style={{
                    color: '#F28290',
                    width: '90%',
                    marginLeft: '2rem',
                    fontFamily: 'Inter',
                    fontWeight: '500'
                  }}
                >
                  Лекторий, креативный аукцион, зимний каток, летний
                  fashion фестиваль
                </p>
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #F28290',
                  backgroundColor: '#F282904D',
                  borderRadius: '20px',
                  alignItems: 'center',
                  marginLeft: '1rem'
                }}
              >
                <div style={{
                  background: '#F28290',
                  borderRadius: '15px',
                  height: '3rem',
                  width: '90%',
                  marginTop: '2rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                >
                  <p
                    style={{
                      color: 'white',
                      width: '100%',
                      marginTop: '1rem',
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      textAlign: 'center'
                    }}
                  >
                    Создание цифрового контента
                  </p>
                </div>
                <p
                  style={{
                    color: '#F28290',
                    width: '90%',
                    marginLeft: '2rem',
                    fontFamily: 'Inter',
                    fontWeight: '500'
                  }}
                >
                  Подкасты, stand up,
                  театр/перформанс, выставки, новая музыка
                </p>
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #F28290',
                  backgroundColor: '#F282904D',
                  borderRadius: '20px',
                  // justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: '1rem'
                }}
              >
                <div style={{
                  background: '#F28290',
                  borderRadius: '15px',
                  height: '3rem',
                  width: '12rem',
                  marginTop: '2rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                >
                  <p
                    style={{
                      color: 'white',
                      width: '10rem',
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      textAlign: 'center'
                    }}
                  >
                    Cyber Sport
                  </p>
                </div>
                <p
                  style={{
                    color: '#F28290',
                    width: '90%',
                    marginLeft: '2rem',
                    fontFamily: 'Inter',
                    fontWeight: '500'
                  }}
                >
                  Проведение соревнований по киберспорту
                </p>
              </div>
            </div>
            <div
              style={{ display: 'flex', marginTop: '1rem', height: '100%' }}
            >
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #F28290',
                  backgroundColor: '#F282904D',
                  borderRadius: '20px',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div style={{
                  marginTop: '2rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                >
                  <button
                    onClick={toggleFirstFloor}
                    style={{
                      // marginTop: "2rem",
                      backgroundColor: firstFloor ? '#F28290' : 'white',
                      color: firstFloor ? 'white' : 'black',
                      border: firstFloor ? 'none' : '1px solid black',
                      borderRadius: '12px'
                    }}
                  >
                    <p
                      style={{
                        color: firstFloor ? 'white' : 'black',
                        fontFamily: 'Inter',
                        fontWeight: '500'
                      }}
                    >
                      1 этаж
                    </p>
                  </button>
                  <button
                    onClick={toggleSecondFloor}
                    style={{
                      // marginTop: "2rem",
                      marginLeft: '2rem',
                      backgroundColor: secondFloor ? '#F28290' : 'white',
                      color: secondFloor ? 'white' : 'black',
                      border: secondFloor ? 'none' : '1px solid black',
                      borderRadius: '12px'
                    }}
                  >
                    <p
                      style={{
                        color: secondFloor ? 'white' : 'black',
                        fontFamily: 'Inter',
                        fontWeight: '500'
                      }}
                    >
                      2-7 этажи
                    </p>
                  </button>
                  <button
                    onClick={toggleThirdFloor}
                    style={{
                      // marginTop: "2rem",
                      marginLeft: '2rem',
                      backgroundColor: thirdFloor ? '#F28290' : 'white',
                      color: thirdFloor ? 'white' : 'black',
                      border: thirdFloor ? 'none' : '1px solid black',
                      borderRadius: '12px'
                    }}
                  >
                    <p
                      style={{
                        color: thirdFloor ? 'white' : 'black',
                        fontFamily: 'Inter',
                        fontWeight: '500'
                      }}
                    >
                      8 этаж
                    </p>
                  </button>

                </div>
                {firstFloor && (
                <>
                  <ul style={{ display: 'flex', marginTop: '3rem' }}>
                    <li style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290'
                    }}
                    >
                      Зона коворкинга
                    </li>
                    <li style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '5rem'
                    }}
                    >
                      Выставочная зона
                    </li>
                    <li style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '5rem'
                    }}
                    >
                      Лекторий для EMBA
                    </li>
                  </ul>
                  <p style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    color: '#F28290',
                    marginLeft: '2rem'
                  }}
                  >
                    Ценность обучения на Программе состоит в возможности уникальных менеджеров, сталкивающихся в повседневной работе с решением задач в условиях неопределённости и растущей многосложности.
                  </p>
                  <h3 style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    color: '#F28290'
                  }}
                  >
                    Программа «Креативный подход в менеджменте»
                  </h3>
                  <p style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    color: '#F28290'
                  }}
                  >
                    Совмещает в себе основные предметы бизнес-программ и курсы по развитию навыков креативного мышления.
                  </p>
                  <h4 style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    color: '#F28290'
                  }}
                  >
                    Блоки обучающих программ по направлениям:
                  </h4>
                  <ul>
                    <li style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290'
                    }}
                    >
                      Создание музыкальных композиций
                    </li>
                    <li style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290'
                    }}
                    >
                      Навыки танца
                    </li>
                    <li style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290'
                    }}
                    >
                      Арт-дизайн
                    </li>
                    <li style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290'
                    }}
                    >
                      Создание дизайна одежды
                    </li>
                    <li style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290'
                    }}
                    >
                      Театральное искусство
                    </li>
                  </ul>
                  <p style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    color: '#F28290',
                    marginLeft: '2rem'
                  }}
                  >
                    Слушатели Программы получат Сертификат MBA от ACDSSS подтвержденный сертификатом MBA Farabi Business School (Республика Казахстан) и диплом MBA выданный Scandinavian School of Economy (Российская Федерация).
                  </p>
                  <p style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    color: '#F28290'
                  }}
                  >
                    Организаторы Программы:
                    <strong style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290'
                    }}
                    >
                      ACDSSS, Farabi Business School
                    </strong>
                    {' '}
                    и
                    <strong style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290'
                    }}
                    >
                      Nordic School of Economics (NSE)
                    </strong>
                    .
                  </p>
                  <h3 style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    color: '#F28290'
                  }}
                  >
                    Развитие soft-skills у менеджеров
                  </h3>
                  <p style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    color: '#F28290',
                    marginLeft: '2rem'
                  }}
                  >
                    Обучение на Программе EMBA рассчитано на 6 модулей по 5 дней каждый. Учебный день длится с 10:00 до 19:00. Периодичность модулей 1 мес/1,5 мес.
                  </p>
                  <p style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    color: '#F28290'
                  }}
                  >
                    Длительность обучения 1 год.
                  </p>
                  <h2 style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    color: '#F28290'
                  }}
                  >
                    Проведение соревнований по кибер-спорту
                  </h2>
                  <p style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    color: '#F28290'
                  }}
                  >
                    Соревнования по киберспорту проводятся по всему миру, в том числе и международные.
                  </p>
                  <p style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    color: '#F28290'
                  }}
                  >
                    В киберспорте в различных дисциплинах разное количество игроков в команде: их количество варьируется от 1 до 15.
                  </p>
                  <p style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    color: '#F28290'
                  }}
                  >
                    <strong style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290'
                    }}
                    >
                      Состав команд:
                    </strong>
                    {' '}
                    Профессиональный игрок, игроки, Капитан, Тренер.
                  </p>
                </>
                )}
                {secondFloor && (
                  <div>
                    <h2 style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Qoqi School (9+)
                    </h2>
                    <p style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Это центр для реализации общеобразовательных и профессионально ориентирующих программ в сфере медиа коммуникаций, дизайна, современного театра и интерактивных технологий.
                    </p>

                    <h3 style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Студия анимации
                    </h3>
                    <p style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Изучение современных компьютерных технологий для получения навыков создания анимации на основе ее классической школы.
                    </p>

                    <h3 style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Студия дизайна
                    </h3>
                    <p style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Освоение базовых художественных и технических навыков для развития мышления в области дизайна и визуальных искусств.
                    </p>

                    <h3 style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Студия фото и видеопроизводства
                    </h3>
                    <p style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Освоение и развитие базовых навыков в сфере фото и видеопроизводства.
                    </p>

                    <h3 style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Студия звукорежиссуры и современной электронной музыки
                    </h3>
                    <p style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Освоение навыков записи, сведения и мастеринга звука; освоение навыков написания электронной музыки; освоение навыков создания звука к видеоряду.
                    </p>

                    <h3 style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Студия интерактивных цифровых технологий
                    </h3>
                    <p style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Обучение использованию интерактивных цифровых, в том числе VR/AR - технологий в качестве художественной выразительности при создании творческих проектов различных направлений.
                    </p>

                    <h3 style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Театральная студия
                    </h3>
                    <p style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Посредством актерского мастерства развитие творческой фантазии, коммуникативных навыков, воображения, внимания и памяти.
                    </p>

                    <h3 style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Студия танца
                    </h3>
                    <p style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Развитие пластической свободы и выразительности. Знакомство с современным пластическим театром.
                    </p>

                    <h3 style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Fashion Студия
                    </h3>
                    <p style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      История моды. Освоение навыков дизайна и создания одежды.
                    </p>

                    <p style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Акустические и вокальные изолированные кабины
                    </p>
                  </div>
                )}
                {thirdFloor && (
                  <div>
                    <h3 style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem'
                    }}
                    >
                      Йога пространство
                    </h3>
                    <p style={{
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: '#F28290',
                      marginLeft: '2rem',
                      width: '95%'
                    }}
                    >
                      Йога - древнее учение, которое включает в себя различные духовные, психические и физические практики. С каждым годом она становится все более популярной в современном обществе. Сегодня для многих людей занятия йогой - это возможность отвлечься от хаотичной и занятой жизни.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        )}
        {showContacts && (
          // <div>
          <div
            style={{
              flex: 1,
              border: '1px solid #F28290',
              backgroundColor: '#F28290',
              borderRadius: '20px'
            }}
          >
            <Card
              style={{
                backgroundColor: '#F28290',
                width: '10rem',
                borderRadius: '15px',
                marginLeft: '2rem',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '2rem'
              }}
            >
              <Card.Title
                style={{
                  color: 'white',
                  fontWeight: '4rem'
                }}
              >
                Контакты:
              </Card.Title>
              <Card.Body style={{ width: '100%' }}>
                <Card.Text
                  style={{
                    color: 'white',
                    fontWeight: 'bolder',
                    width: '25rem',
                    fontFamily: 'sans-serif'
                  }}
                >
                  QOQI
                  {' '}
                  <br />
                  {' '}
                  <br />
                  пр. Мангилик Ел, 53/1
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </main>
  );
};

export default About;
