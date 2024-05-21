import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import Slider from 'react-slick';
import Carousel from 'react-grid-carousel';
import { MessageDisplay } from '@/components/common';
import { useDocumentTitle, useScrollTop } from '@/hooks';
import { selectFilterEvents } from '@/selectors/selectorEvent';
import {
  EventAppliedFilters,
  EventGrid,
  EventList
} from '@/components/eventss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Firebase from '../../services/firebase';

const Event = () => {
  useDocumentTitle('Qoqiqaz | Events');
  useScrollTop();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numColumns, setNumColumns] = useState(3);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const store2 = useSelector(
    (state) => ({
      filteredEvents: selectFilterEvents(state.events.items, state.filter),
      events: state.events,
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading
    }),
    shallowEqual
  );

  useEffect(() => {
    // Ensure that the first button is clicked when the page is just opened
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const { events } = await Firebase.getEvents();
        setEvents(events);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1200) {
        setNumColumns(3); // Adjust for larger screens
      } else if (windowWidth >= 800) {
        setNumColumns(2); // Adjust for medium screens
      } else if (windowWidth >= 767) {
        setNumColumns(2); // Adjust for medium screens
      } else if (windowWidth >= 600) {
        setNumColumns(2); // Adjust for medium screens
      } else {
        setNumColumns(2); // Adjust for smaller screens
      }
      setIsMobile(windowWidth <= 767);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize once to set initial number of columns
    handleResize();
    fetchEvents();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [Firebase]);

  return (
    <main className="content">
      <div className="home">
        <div className="scrollable-events">
          <h2 className="home-title">Мероприятия</h2>
          {isMobile ? (
            <>
              {events.map((event, index) => (
                <EventGrid events={[event]} key={index} />
              ))}
            </>
          ) : (
            <Carousel cols={numColumns} rows={2} gap={10} loop scrollSnap>
              {events.map((event, index) => (
                <Carousel.Item key={index}>
                  <EventGrid events={[event]} />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </main>
  );
};

export default Event;
