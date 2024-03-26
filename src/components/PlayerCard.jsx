import React, { useState } from "react";
// import { data } from "../helper/data";

function PlayerCard({name,img,statistics}) {
  const [showInfo,setShowInfo]=useState(false)
  const toogleShowInfo=()=>{
    setShowInfo(!showInfo)
  }
  
  return (
    <div className="card" onClick={toogleShowInfo}>
      {
        !showInfo ? (
      <div  className="img-container">
        <img src={img} alt={name} width="200px"/>
      </div>
        ) :(
          <ul className="info">
            {
              statistics.map((statistic,index)=>(
                <li key={index}>{`🏀 ${statistic}`}</li>
                ))
              }

          </ul>

        )
      }
         <h3>{name}</h3>
      {/* <h3 className="card-info">{statistics}</h3>  */}
      </div>

     
  );
}

export default PlayerCard;

 /* {data.map(({ name, img, statistics }) => (
        <div key={name}>
          <div className="view">
            <img
                onClick={()=>imgChange(statistics)}
                src={img}
                alt={name} />
                <p>{name}</p>
          
            <div className="info">
              <p>{`${formatStatistics(statistics)}`}</p>
            </div>
          )}
          </div>
        </div>
      ))} */
// const [player, setPlayer] = useState(null);
// const [toogle,setToggle]=useState(null)

// const imgChange = (statistics) => {
//   setPlayer(statistics);
//   setToggle(statistics)
//   console.log(setPlayer);
// };
// const formatStatistics = (stats) => {
//   return stats.map((stat) => `🏀 ${stat}`).join(", ");
// };

// const [toggle, setToggle] = useState(true);
// const playerIndex = players.findIndex(player => player.name === name);
// const updatedPlayers = [...players];
// updatedPlayers[playerIndex].img = toggle ? updatedPlayers[playerIndex].statistics : updatedPlayers[playerIndex].img;
// setPlayers(updatedPlayers);
// setToggle(!toggle);
