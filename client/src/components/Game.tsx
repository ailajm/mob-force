// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define Monster data
interface Monster {
  _id: string;
  name: string;
  level: number;
  health: number;
  experience: number;
  specializationPath: string;
  befriended: boolean;
}

// Define Game
const Game: React.FC = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  console.log(monsters);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Monster[]>('/api/monsters');
        setMonsters(response.data);
      } catch (err) {
        setError('Failed to fetch monsters. Please try again later.');
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="game">
    </div>
  );
}

export default Game;
