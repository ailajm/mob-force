// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Game from './components/Game';
import Player, { Player as PlayerType } from './components/Player';
import Monster, { Monster as MonsterType } from './components/Monster';
import Environment, { Environment as EnvironmentType } from './components/Environment';


const App: React.FC = () => {
  const [playerData, setPlayerData] = useState<PlayerType | null>(null);
  const [monsterData, setMonsterData] = useState<MonsterType | null>(null);
  const [environmentData, setEnvironmentData] = useState<EnvironmentType | null>(null);

  useEffect(() => {
    axios.get<PlayerType>('/api/player').then(response => {
      setPlayerData(response.data);
    });

    axios.get<MonsterType>('/api/monster').then(response => {
      setMonsterData(response.data);
    });

    axios.get<EnvironmentType>('/api/environment').then(response => {
      setEnvironmentData(response.data);
    });
  }, []);

  if(!playerData || !monsterData || !environmentData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        Monster Collector RPG
      </header>
      <Game />
      <Environment environment={environmentData} />
      <Player player={playerData} />
      <Monster monster={monsterData} />
    </div>
  );
}

export default App;
