import React from "react";
import PlayerCard from "./PlayerCard";
import "../App.css";

function CardContainer({ data,searchPlayer }) {
  const filterPlayers=data.filter(player=>player.name.toLowerCase().includes(searchPlayer.toLowerCase()))
  return (
    <div className="CardContainer">
      {filterPlayers.map((player) => (
        <PlayerCard
          key={player.name}
          name={player.name}
          img={player.img}
          statistics={player.statistics}
        />
      ))}
    </div>
  );
}

export default CardContainer;