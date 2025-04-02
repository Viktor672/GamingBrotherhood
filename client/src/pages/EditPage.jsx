import { useNavigate, useParams } from "react-router";
import { useEdit, useGame } from "../apiHooks/gameApi";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export default function EditPage() {
  let { gameId } = useParams();
  let { email } = useContext(UserContext);
  let { editGame } = useEdit();
  let { game } = useGame(gameId);
  let navigate = useNavigate();
  let [isPending, setIsPending] = useState(false);
  let [imageUrl, setImageUrl] = useState('');
  let [formData, setFormData] = useState({
    title: game?.title,
    genre: game?.genre,
    description: game?.description,
    date: game?.date,
    imageUrl: game?.imageUrl,
    authorEmail:game?.authorEmail
  });

  let changeHandler = (e) => {
    let { name, value } = e.target;

    setFormData(oldState => ({ ...oldState, [name]: value, imageUrl: imageUrl }));
  }

  let editHandler = async (e) => {
    e.preventDefault();
    setIsPending(true);
    let data = await editGame(gameId, formData);
    setIsPending(false);
    if (data?.error) {
      return alert(data.error);
    }

    return navigate(`/${gameId}/details`);
  }

  useEffect(() => {
    if (game) {
      setImageUrl(game.imageUrl);
      setFormData({
        title: game.title,
        genre: game.genre,
        description: game.description,
        date: game.date,
        imageUrl: game.imageUrl,
        authorEmail: email
      });
    }
  }, [game]);

  const handleFileChange = (e) => {
    let file = e.target.files?.[0];
    if (!file) return;

    let reader = new FileReader();
    reader.onload = (event) => {
      let newImageUrl = event.target.result;
      setImageUrl(newImageUrl);
      setFormData(oldState => ({
        ...oldState,
        imageUrl: newImageUrl,

      }));
    };
    reader.readAsDataURL(file);
  };

  console.log(imageUrl);

  return (
    <>
      <div className="form-container">
        <div className="form-box">
          <h1>Add a Game</h1>
          <form onSubmit={editHandler}>
            <div className="input-group">
              <label htmlFor="game-title">Title</label>
              <input id="game-title" placeholder="Game title" type="text" name="title" className="input-field" value={formData?.title || ''} onChange={changeHandler} />
            </div>

            <div className="input-group">
              <label htmlFor="game-genre">Genre</label>
              <input id="game-genre" placeholder="Action, RPG, FPS" type="text" name="genre" className="input-field" value={formData?.genre || ''} onChange={changeHandler} />
            </div>

            <div className="input-group">
              <label htmlFor="game-description">Description</label>
              <input id="game-description" placeholder="Game Description" type="text" name="description" className="input-field" value={formData?.description || ''} onChange={changeHandler} />
            </div>

            <div className="input-group">
              <label htmlFor="game-release-date">Release Date</label>
              <input id="game-release-date" type="date" name="date" className="input-field" value={formData?.date || ''} onChange={changeHandler} />
            </div>

            <div className="input-group">
              <label htmlFor="game-cover">Upload Cover</label>
              <input id="game-cover" className="input-field" name="imageUrl" type="file" accept="image/*" onChange={handleFileChange} />
              {imageUrl && <img src={imageUrl} alt="Cover" className="cover-preview" />}
            </div>

            <button type="submit" className="submit-btn" disabled={isPending}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}