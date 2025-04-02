import { Link } from 'react-router';
import facebookIcon from '/images/facebook-brands.svg';
import instagramIcon from '/images/instagram-brands.svg';
import twitterIcon from '/images/twitter-brands.svg';

export default function HomePage() {
    return (

        <section className="home">
            <video
                className="video-slide"
                src="/videos/homeVideo.mp4"
                autoPlay
                muted
                loop
                 preload="auto"
            />

            <div className="content active">
                <h1>Gaming <br /> Brotherhood</h1>
                <p>
                    Welcome to Gaming Brotherhood, the ultimate online hub where gamers from all walks of life come together to connect,
                    compete, and conquer. Whether you're a casual player or a hardcore enthusiast,
                    our platform offers an immersive experience designed
                    to fuel your passion for gaming.
                </p>
                <Link className="cta-button" to="/games">Explore Games</Link>
            </div>


            <div className="media-icons">
                <Link to="#"><img src={facebookIcon} alt="Facebook" /></Link>
                <Link to="#"><img src={instagramIcon} alt="Instagram" /></Link>
                <Link to="#"><img src={twitterIcon} alt="Twitter" /></Link>

            </div>
        </section>
    )
}