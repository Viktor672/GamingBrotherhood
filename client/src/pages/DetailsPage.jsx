import { useParams } from "react-router";

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

export default function DetailsPage() {
  const { id } = useParams();
  const post = postsObj.find((p) => p.id === Number(id));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div className="details"
      style={{
        backgroundImage: `url(${post.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <video
        className="video-background"
        src="../src/public/assets/videos/.mp4"
        autoPlay
        muted
        loop
      />

      <div className="details__container" >

        <div className="details__header">
          <img src={post.author.imageUrl} alt={post.author?.name} className="details__author-img" />
        </div>
        <h1 className="details__title">{post.title}</h1>
        <p className="details__date">{post.date} | {post.category?.title}</p>
        <p className="details__description">{post.description}</p>
        <div className="details__author-info">
          <p className="details__author-name">{post.author?.name}</p>
          <p className="details__author-email">{post.author?.email}</p>
        </div>
        <div className="details__buttons">
          <button className="details__edit-btn">Edit</button>
          <button className="details__delete-btn">Delete</button>
        </div>
      </div>
    </div >
  );
}
