// Import
import React from 'react';

// Define Player data type
interface Player {
  _id: string;
  name: string;
  gender: string;
  monsters: string[]; // An array of Monster's _id, adjust according to your data structure
}

// Interface to specify props
interface PlayerProps {
  player: Player;
}

const Player: React.FC<PlayerProps> = ({ player }) => {
  return (
    <div className="player">
      <h2>{player.name}</h2>
      <p>{player.gender}</p>
      {/* Display other player info here */}
    </div>
  );
}

export default Player;
