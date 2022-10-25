import axios from 'axios';
import { useEffect, useState } from 'react';

function Read() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const res = await axios.get('http://localhost:5000/game/');
      setGames(res.data);
    };
    getGames();
  });
  return (
    <>
      {games.map(({ title, platform, rating }) => (
        <>
          <p>{title}</p>
          <p>{platform}</p>
          <p>{`${rating}/10`}</p>
        </>
      ))}
    </>
  );
}

export default Read;
