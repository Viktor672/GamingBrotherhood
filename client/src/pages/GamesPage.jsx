import { Link } from 'react-router';
import { useAllGames } from '../apiHooks/gameApi';
import { useEffect, useState } from 'react';

export default function GamesPage() {
    let { allGames, loading } = useAllGames();  
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (allGames.length > 0) {
            setIsLoading(false);  
        }
    }, [allGames]);

    if (isLoading || loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div> 
            </div>
        );
    }

    return (
        <div className="page-container">
            <video
                className="video-background"
                src="../src/assets/videos/gamesVideo.mov"
                autoPlay
                muted
                loop
                preload="auto"
            />

            <div className="content">
                <div className="blog">
                    <div className="blog__container">
                        <div className="blog__header">
                            <h2 className="blog__title">Latest Games</h2>
                            <p className="blog__subtitle">Stay updated with the newest games, reviews, and insights from the world of gaming.</p>
                        </div>

                        <div className="blog__grid">
                            {allGames.length > 0
                                ?
                                allGames.map((game) => (
                                    <article
                                        key={game._id}
                                        className="blog__post"
                                        style={{
                                            backgroundImage: `url(${game.imageUrl})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >
                                        <div className="blog__meta">
                                            <time className="blog__date">{game.date}</time>
                                            <Link to={`/${game._id}/details`} className="blog__genre">{game.genre}</Link>
                                        </div>

                                        <h3 className="blog__post-title">
                                            <Link to={`/${game._id}/details`} className="blog__title-btn">{game.title}</Link>
                                        </h3>
                                        <p className="blog__description">{game.description}</p>

                                        <div className="blog__author">
                                            <div className="blog__author-info">
                                                <p className="blog__author-name">
                                                    <Link to={game.author?.href}>{game?.authorEmail}</Link>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="blog__like-section">
                                            <button className="blog__like-btn">
                                                <span className="blog__like-text">Like</span>
                                            </button>
                                            <div className="blog__like-count-wrapper">
                                                <span className="blog__like-icon"><img src="../src/assets/images/heart.svg" alt="" /></span>
                                                <span className="blog__like-count">{game.likes} Likes</span>
                                            </div>
                                        </div>
                                    </article>
                                ))
                                :
                                <h2 className="no-games">No Games yet!</h2>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
