// Imports
import React from 'react';

// Define Monster data type
interface Monster {
  _id: string;
  name: string;
  level: number;
  health: number;
  experience: number;
  specializationPath: string;
  befriended: boolean;
}

// Define props for monster component
interface MonsterProps {
  monster: Monster;
}

// Monster component
const Monster: React.FC<MonsterProps> = ({ monster }) => {
  return (
    <div className="monster">
      <h2>{monster.name}</h2>
      <p>Level: {monster.level}</p>
      {/* Display other monster info here */}
    </div>
  );
}

// Export
export default Monster;
