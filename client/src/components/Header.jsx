import {Link} from 'react-router';

export default function Header() {
    return (
        <>
            <header>
                <a href="/" className="brand">Home</a>
                <div className="menu-btn"></div>
                <div className="navigation">
                    <div className="navigation-items">
                        <Link to="/catalog">Games</Link>
                        <Link to="/about">About</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                </div>
            </header>
        </>
    )
}