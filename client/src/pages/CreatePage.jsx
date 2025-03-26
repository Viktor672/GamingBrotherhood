import React, { useActionState, useContext, useEffect, useState } from "react";
import { useAllGames, useCreate } from "../apiHooks/gameApi.js";
import { useNavigate } from 'react-router';
import { UserContext } from "../contexts/UserContext.js";

export default function CreatePage() {
  let { create } = useCreate();
  let navigate = useNavigate();
  let { email } = useContext(UserContext);
  let [imageUrl, setImageUrl] = useState('');

  let submitHandler = async (state, formData) => {
    let formDataValues = Object.fromEntries(formData);

    let gameValues = {
      title: formDataValues.title,
      genre: formDataValues.genre,
      description: formDataValues.description,
      date: formDataValues.date
    }

    formDataValues.imageUrl = imageUrl;
    formDataValues.authorEmail = email;

    let data = await create(formDataValues);

    if (data?.error) {
      alert(data.error);
      return gameValues;
    }

    navigate('/games');
  }

  let initialData = {
    title: '',
    genre: '',
    description: '',
    date: ''
  }

  let [state, submitAction, isPending] = useActionState(submitHandler, initialData);

  if (isPending) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
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
            <input id="game-title" placeholder="Game title" type="text" name="title" className="input-field" defaultValue={state.title} />
          </div>

          <div className="input-group">
            <label htmlFor="game-genre">Genre</label>
            <input id="game-genre" placeholder="Action, RPG, FPS" type="text" name="genre" className="input-field" defaultValue={state.genre} />
          </div>

          <div className="input-group">
            <label htmlFor="game-description">Description</label>
            <input id="game-description" placeholder="Game Description" type="text" name="description" className="input-field" defaultValue={state.description} />
          </div>

          <div className="input-group">
            <label htmlFor="game-release-date">Release Date</label>
            <input id="game-release-date" type="date" name="date" className="input-field" defaultValue={state.date} />
          </div>

          <div className="input-group">
            <label htmlFor="game-cover">Upload Cover</label>
            <input id="game-cover" name="imageUrl" type="file" accept="image/*" onChange={handleFileChange} className="input-field" />
            {imageUrl && <img src={imageUrl} alt="Cover" className="cover-preview" />}
          </div>

          <button type="submit" className="submit-btn" disabled={isPending}>Submit</button>
        </form>
      </div>
    </div>
  );
}
