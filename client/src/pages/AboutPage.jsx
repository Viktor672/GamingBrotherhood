import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { UserContext } from '../contexts/UserContext';

const links = [
  { name: "Go to Home Page", href: "/", isAuth: false },
  { name: "Explore Games", href: "/games", isAuth: false },
  { name: "Sign up here", href: "/register", isAuth: true },
  { name: "Login here", href: "/login", isAuth: true },
];

const stats = [
  { name: "Games Available", value: "100+" },
  { name: "Active Players", value: "200K+" },
  { name: "Matches Played Daily", value: "20K+" },
  { name: "Top Prize Pool", value: "$250,000" },
];

export default function AboutPage() {
  let [isPending, setIsPending] = useState(true);
  let { accessToken } = useContext(UserContext);

  useEffect(() => {
    setIsPending(false);
  }, []);

  if (isPending) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">Welcome to GameZone</h2>
          <p className="about-description">
            Enter the ultimate gaming universe where players battle, explore,
            and compete for glory. From casual fun to intense esports, we have ve got
            it all. Are you ready to level up?
          </p>
          <div className="about-links">
  {links
    .filter((link) => (link.isAuth ? !accessToken : true))
    .map((link) => (
      <Link to={link.href} key={link.name} className="about-link">
        {link.name} →
      </Link>
    ))}
</div>

        </div>
        <div className="about-stats">
          {stats.map((stat) => (
            <div key={stat.name} className="stat-card">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}