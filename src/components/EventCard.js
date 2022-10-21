import React from "react";

function EventCard(props) {
  // console.log(props)

  return (
    <div className='events'>
      <div className='event-card'>
        <div className='dates'>
          {props.card.month} <div className='day'>{props.card.day}</div>
        </div>
        <img src={`src/images/${props.card.img}`}></img>
      </div>
      <div className='event-text'>
        <h3>{props.card.title}</h3>
        <p>{props.card.text}</p>
        <a
          href='https://m.facebook.com/mccallcurlingclub/'
          target='_blank'
          rel='noreferrer'
          className='link-more'
        >
          See More
        </a>
      </div>
    </div>
  );
}

export default EventCard;
