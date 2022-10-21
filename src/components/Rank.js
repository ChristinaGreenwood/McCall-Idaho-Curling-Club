import React from "react";
import rankdata from "./rankdata";
import RankCard from "./RankCard";

function Rank() {
  const cards = rankdata.map((card) => {
    return <RankCard key={card.id} card={card} />;
  });
  return (
    <div className='rank'>
      <h1>RANKING</h1>
      <div className='rank-wrapper'>{cards}</div>
    </div>
  );
}
export default Rank;
