import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import ActiveNavLink from './ActiveLink';

export default function Header() {
    let { email } = useContext(UserContext);

    return (
        <header>
            <ActiveNavLink to="/">Home</ActiveNavLink>
            <div className="navigation">
                <div className="navigation-items">
                    <ActiveNavLink to="/games">Games</ActiveNavLink>
                    <ActiveNavLink to="/about">About</ActiveNavLink>
                    {email ? (
                        <>
                            <ActiveNavLink to="/create">Create</ActiveNavLink>
                            <ActiveNavLink to="/logout">Logout</ActiveNavLink>
                        </>
                    )
                        : (
                            <>
                                <ActiveNavLink to="/login">Login</ActiveNavLink>
                                <ActiveNavLink to="/register">Register</ActiveNavLink>
                            </>
                        )}
                </div>
            </div>
        </header>
    );
}
