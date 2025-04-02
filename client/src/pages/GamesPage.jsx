import { Link } from 'react-router';
import { useAllGames } from '../apiHooks/gameApi';
import { useEffect, useState } from 'react';

export default function GamesPage() {
    let { allGames } = useAllGames();
    let [isPending, setIsPending] = useState(true);
    let [filteredGames, setFilteredGames] = useState([]);

    useEffect(() => {
        if (allGames.length > 0) {
            setFilteredGames(allGames);
            setIsPending(false);
        }
    }, [allGames]);

    if (isPending) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    const searchHandler = async (e) => {
        let searchTerm = e.target.value;

        let resultGames = allGames.filter((game) =>
            game.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredGames(resultGames);
    };



    return (
        <div className="page-container">
            <video
                className="video-background"
                src="/videos/gamesVideo.mov"
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

                        <div className="search-bar-wrapper">
                            <input
                                type="text"
                                className="search-bar"
                                placeholder="Search games by title..."
                                onChange={searchHandler}
                            />
                        </div>

                        <div className="blog__grid">
                            {filteredGames.length > 0
                                ?
                                filteredGames.map((game) => (
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
