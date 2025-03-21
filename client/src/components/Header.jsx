import { useContext } from 'react';
import { Link } from 'react-router';
import { UserContext } from '../contexts/UserContext';

export default function Header() {
    let { email } = useContext(UserContext);

    return (
        <>
            <header>
                <Link to="/" className="brand">Home</Link>
                <div className="menu-btn"></div>
                <div className="navigation">
                    <div className="navigation-items">
                        <Link to="/games">Games</Link>
                        <Link to="/about">About</Link>
                        {email
                            ? (
                                <>
                                    <Link to="/create">Create</Link>
                                    <Link to="/logout">Logout</Link>
                                </>
                            )
                            : (
                                <>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                                </>
                            )
                        }
                    </div>
                </div>
            </header>
        </>
    )
}