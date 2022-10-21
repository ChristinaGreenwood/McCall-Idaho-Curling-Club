import React from "react";

function RankCard(props) {
  // console.log(props)
  return (
    <div className='ranks'>
      <img className='rank-img' src={`src/images/${props.card.img}`}></img>
      <h4>{props.card.title}</h4>
    </div>
  );
}

export default RankCard;
