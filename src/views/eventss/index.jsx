import { MessageDisplay } from "@/components/common";
import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { selectFilterEvents } from "@/selectors/selectorEvent";
import {
  EventAppliedFilters,
  EventGrid,
  EventList,
} from "@/components/eventss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Event = () => {
  useDocumentTitle("Qoqiqaz | Events");
  useScrollTop();

  const store2 = useSelector(
    (state) => ({
      filteredEvents: selectFilterEvents(state.events.items, state.filter),
      events: state.events,
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading,
    }),
    shallowEqual
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <main className="content">
      <div className="home">
        <h2>Мероприятия</h2>
        <EventAppliedFilters
          filteredEventsCount={store2.filteredEvents.length}
        />
        <EventList {...store2}>
          <div className="event-grid">
            {store2.filteredEvents.map((event, index) => (
              <div className="event-item" key={event.id}>
                <EventGrid events={[event]} />
              </div>
              // Insert a new row after every third event
              // {index > 0 && (index + 1) % 3 === 0 && <div className="row-divider"></div>}
            ))}
          </div>
        </EventList>
      </div>
    </main>
  );
};

export default Event;
