import React, { useContext, useState } from "react";
import { useCreate } from "../apiHooks/gameApi.js";
import { useNavigate } from 'react-router';
import { UserContext } from "../contexts/UserContext.js";

export default function CreatePage() {
  let { create } = useCreate();
  let navigate = useNavigate();
  let { email } = useContext(UserContext);
  let [imageUrl, setImageUrl] = useState('');

  let submitAction = async (formData) => {
    let gameData = Object.fromEntries(formData);
    gameData.imageUrl = imageUrl;
    gameData.authorEmail = email;
    
    await create(gameData);

    navigate('/games');
  }

  const handleFileChange = (e) => {
    let file = e.target.files?.[0];
    if (!file) return;

    let reader = new FileReader();
    reader.onload = (event) => setImageUrl(event.target.result);
    reader.readAsDataURL(file);
  };


  return (
    <div className="form-container">
      <div className="form-box">
        <h1>Add a Game</h1>
        <form action={submitAction}>
          <div className="input-group">
            <label htmlFor="game-title">Title</label>
            <input id="game-title" placeholder="Game title" type="text" name="title" className="input-field" />
          </div>

          <div className="input-group">
            <label htmlFor="game-genre">Genre</label>
            <input id="game-genre" placeholder="Action, RPG, FPS" type="text" name="genre" className="input-field" />
          </div>

          <div className="input-group">
            <label htmlFor="game-description">Description</label>
            <input id="game-description" placeholder="Game Description" type="text" name="description" className="input-field" />
          </div>

          <div className="input-group">
            <label htmlFor="game-release-date">Release Date</label>
            <input id="game-release-date" type="date" name="date" className="input-field" />
          </div>

          <div className="input-group">
            <label htmlFor="game-cover">Upload Cover</label>
            <input id="game-cover" name="imageUrl" type="file" accept="image/*" onChange={handleFileChange} className="input-field" />
            {imageUrl && <img src={imageUrl} alt="Cover" className="cover-preview" />}
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
