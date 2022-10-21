import React from "react";
import EventCard from "./EventCard";
import eventsdata from "./eventsdata";
function Events() {
    const cardElement = eventsdata.map((card) => {
        return <EventCard 
        key={card.id}
        card={card}
        />
    })
    return (
    <div className="events">
{/* <img src="src/images/curling bg.001.png"></img> */}
        <h1>UPCOMING EVENTS</h1>
        <div className="events-wrapper">
        {cardElement}
        </div>
    </div>
    )
}

export default Events