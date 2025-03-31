import { Link, useNavigate, useParams } from "react-router";
import { useDelete, useGame } from "../apiHooks/gameApi";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useUser } from "../apiHooks/userApi";

export default function DetailsPage() {
  let { deleteGame } = useDelete();
  let navigate = useNavigate();
  let hasRunned = useRef(false);
  let { accessToken } = useContext(UserContext);
  let { _id } = useContext(UserContext);
  let { gameId } = useParams();
  let { game } = useGame(gameId);
  let { like, getLikes } = useUser();

  let isOwner = _id !== undefined && _id === game._ownerId;

  //  some test accounts like george@abv.bg might have old or invalid like data stored
  // localStorage.removeItem(`liked_${gameId}_${_id}`);

  let [likesCount, setLikesCount] = useState(0);
  let [hasLiked, setHasLiked] = useState(localStorage.getItem(`liked_${gameId}_${_id}`) === "true");

  let likeHandler = async () => {
    await like(_id, gameId);
    setLikesCount(likesCount + 1);
    setHasLiked(true);
    localStorage.setItem(`liked_${gameId}_${_id}`, "true");
  };

  let deleteHandler = async () => {
    if (hasRunned.current) return;

    let hasConfirmed = window.confirm('Are you sure you want to delete?');

    if (!hasConfirmed) {  
      navigate(`/${gameId}/details`);
      return;
    }

    hasRunned.current = true;
    await deleteGame(gameId);
    return navigate('/games');
  }

  useEffect(() => {
    getLikes(gameId)
      .then((likes) => {
        setLikesCount(likes);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [gameId]);

  return (
    <div
      className="details"
      style={{
        backgroundImage: `url(${game.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="details__container">
        {/* <div className="details__header">
          <img src={game.author?.imageUrl} alt={game.authorName} className="details__author-img" />
        </div> */}

        <h1 className="details__title">{game.title}</h1>
        <p className="details__date">{game.date} | {game.genre}</p>
        <p className="details__description">{game.description}</p>

        <div className="details__author-info">
          <p className="details__author-email">{game.authorEmail}</p>
        </div>

        <div className="blog__like-section">
          {!isOwner && accessToken && !hasLiked && (
            <button className="blog__like-btn" onClick={likeHandler}>
              <span className="blog__like-text">Like</span>
            </button>
          )}

          <div className="blog__like-count-wrapper">
            <span className="blog__like-icon">
              <img src="../src/assets/images/heart.svg" alt="" />
            </span>
            <span className="blog__like-count">{likesCount} Likes</span>
          </div>
        </div>

        {isOwner && (
          <div className="details__buttons">
            <Link to={`/${gameId}/edit`} className="details__edit-btn">
              Edit
            </Link>
            <button className="details__delete-btn" onClick={deleteHandler}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
