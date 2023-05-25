// Imports
import React from 'react';

// Define Monster type
interface Monster {
  _id: string;
  name: string;
  level: number;
  health: number;
  experience: number;
  specializationPath: string;
  befriended: boolean;
}

interface MonsterProps {
  monster: Monster;
}

// Define Monster
const Monster: React.FC<MonsterProps> = ({ monster }) => {
  return (
    <div className="monster">
      <h2>{monster.name}</h2>
      <p>Level: {monster.level}</p>
      <p>Health: {monster.health}</p>
      <p>Experience: {monster.experience}</p>
      <p>Specialization Path: {monster.specializationPath}</p>
      <p>Befriended: {monster.befriended ? 'Yes' : 'No'}</p>
    </div>
  );
}

// Export
export default Monster;
