// Imports 
import React from 'react';

// Define Player type
interface Player {
  _id: string;
  name: string;
  gender: string;
  monsters: string[]; // Monster _id array
}

interface PlayerProps {
  player: Player;
}

// Define Player
const Player: React.FC<PlayerProps> = ({ player }) => {
  return (
    <div className="player">
      <h2>{player.name}</h2>
      <p>Gender: {player.gender}</p>
      <div>
        Monsters:
        <ul>
          {player.monsters.map(monsterId => (
            <li key={monsterId}>{monsterId}</li> // Replace with a Monster component
          ))}
        </ul>
      </div>
    </div>
  );
}

// Export
export default Player;
