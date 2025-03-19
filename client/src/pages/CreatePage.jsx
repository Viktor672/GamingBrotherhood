import React, { useState } from "react";

export default function CreatePage() {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    releaseDate: "",
    description: "",
    multiplayer: "",
    rating: "",
    cover: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setFormData((prevData) => ({ ...prevData, cover: event.target.result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h1>Add a Game</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="game-title">Title</label>
            <input
              id="game-title"
              placeholder="Game title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label htmlFor="game-genre">Genre</label>
            <input
              id="game-genre"
              placeholder="Action, RPG, FPS"
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label htmlFor="game-description">Description</label>
            <input
              id="game-description"
              placeholder="Game Description"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label htmlFor="game-release-date">Release Date</label>
            <input
              id="game-release-date"
              type="date"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label>Multiplayer</label>
            <div className="radio-container">
              <input
                type="radio"
                id="multiplayer-yes"
                name="multiplayer"
                value="yes"
                checked={formData.multiplayer === "yes"}
                onChange={handleChange}
              />
              <label htmlFor="multiplayer-yes">Yes</label>

              <input
                type="radio"
                id="multiplayer-no"
                name="multiplayer"
                value="no"
                checked={formData.multiplayer === "no"}
                onChange={handleChange}
              />
              <label htmlFor="multiplayer-no">No</label>
            </div>
          </div>

          <div className="input-group">
            <label>Age Rating</label>
            <div className="radio-container">
              {["E", "T", "M"].map((rating) => (
                <React.Fragment key={rating}>
                  <input
                    type="radio"
                    id={`rating-${rating}`}
                    name="rating"
                    value={rating}
                    checked={formData.rating === rating}
                    onChange={handleChange}
                  />
                  <label htmlFor={`rating-${rating}`}>
                    {rating} ({rating === "E" ? "Everyone" : rating === "T" ? "Teen" : "Mature"})
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="game-cover">Upload Cover</label>
            <input
              id="game-cover"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="input-field"
            />
            {formData.cover && <img src={formData.cover} alt="Cover" className="cover-preview" />}
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
