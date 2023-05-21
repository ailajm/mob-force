// Import
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

const Game: React.FC = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get<Monster[]>('/api/monsters');
      setMonsters(response.data);
    }
    fetchData();
  }, []);

  // logic

  return (
    <div className="game">
      {/* components */}
    </div>
  );
}

export default Game;
