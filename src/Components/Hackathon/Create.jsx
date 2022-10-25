import axios from 'axios';
import { useState } from 'react';

function Create() {
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/game/create', {
      title, platform, rating,
    });

    console.log('CREATED:', res.data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <br />
      <label htmlFor="platform">
        Platform:
        <select type="text" id="platform" value={platform} onChange={(e) => setPlatform(e.target.value)} required>
          <option value="">--Please choose an option--</option>
          <option value="ps5">PlayStation 5</option>
          <option value="xbox">XBOX</option>
          <option value="pc">PC</option>
          <option value="switch">Switch</option>
        </select>
      </label>
      <br />
      <label htmlFor="rating">
        Rating:
        <input type="number" id="rating" min={0} max={10} step="1" value={rating} onChange={(e) => setRating(e.target.value)} required />
      </label>
      <br />
      <button type="submit">CREATE</button>
    </form>
  );
}

export default Create;
