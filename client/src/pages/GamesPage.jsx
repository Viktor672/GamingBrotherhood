import { Link } from 'react-router';

const postsObj = [
    {
        id: 1,
        title: "World Of Warcraft",
        description:
            "Travel deep into the goblin city of Undermine and learn to D.R.I.V.E., join a cartel, adventure in two new delves, a new dungeon: Operation Floodgate, face Gallywix in the Liberation of Undermine raid, battle in a new PvP Arena— and more!",
        date: "Mar 18, 2025",
        datetime: "2025-03-18",
        category: { title: "Fantasy", href: "#" },
        backgroundImage: "../src/assets/images/world-of-warcraft.webp",
        likes: 0,
        author: {
            name: "Smith Williams",
            email: "smithwilliams@gmail.com",
            href: "#",
            imageUrl:
                "https://img.freepik.com/free-photo/close-up-young-caucasian-guy-with-beard-smiling-looking-happy-camera-standing-blue-background_1258-40230.jpg",
        },
    },
    {
        id: 2,
        title: "League Of Legends",
        description:
            "League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.",
        date: "Mar 18, 2025",
        datetime: "2020-03-16",
        category: { title: "Fantasy", href: "#" },
        backgroundImage: "../src/assets/images/league-of-legends.jpg",
        likes: 0,
        author: {
            name: "Mary Hayden",
            email: "maryhayden@gmail.com",
            href: "#",
            imageUrl:
                "https://parrotprint.com/media/wordpress/7630543941b44634748ddea65e5a417c.jpg",
        },
    },
];

export default function GamesPage() {
    return (
        <div className="page-container">
            <video
                className="video-background"
                src="../src/public/assets/videos/gamesVideo.mov"
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
                            {postsObj.map((post) => (
                                <article
                                    key={post.id}
                                    className="blog__post"
                                    style={{
                                        backgroundImage: `url(${post.backgroundImage})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >

                                    <div className="blog__meta">
                                        <time dateTime={post.datetime} className="blog__date">{post.date}</time>
                                        <a href={post.category.href} className="blog__category">{post.category.title}</a>
                                    </div>

                                    <div className="group">
                                        <h3 className="blog__post-title">
                                            <Link to={`/details/${post.id}`} className="blog__title-btn">{post.title}</Link>
                                        </h3>
                                        <p className="blog__description">{post.description}</p>/
                                    </div>

                                    <div className="blog__author">
                                        <img alt="" src={post.author.imageUrl} className="blog__author-img" />
                                        <div className="blog__author-info">
                                            <p className="blog__author-name">
                                                <a href={post.author.href}>{post.author.name}</a>
                                            </p>
                                            <p className="blog__author-email">{post.author.email}</p>
                                        </div>
                                    </div>

                                    <div className="blog__like-section">
                                        <button className="blog__like-btn">
                                            <span className="blog__like-text">Like</span>
                                        </button>
                                        <div className="blog__like-count-wrapper">
                                            <span className="blog__like-icon"><img src="../src/assets/images/heart.svg" alt="" /></span>
                                            <span className="blog__like-count">{post.likes} Likes</span> {/* Default like count */}
                                        </div>
                                    </div>

                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
