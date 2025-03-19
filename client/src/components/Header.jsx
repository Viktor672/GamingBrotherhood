import { Link } from 'react-router';

export default function Header() {
    return (
        <>
            <header>
                <Link to="/" className="brand">Home</Link>
                <div className="menu-btn"></div>
                <div className="navigation">
                    <div className="navigation-items">
                        <Link to="/games">Games</Link>
                        <Link to="/create">Create</Link>
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