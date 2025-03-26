import { NavLink } from 'react-router';

function ActiveNavLink({ to, children }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive
                ?
                `active ${to === '/' ? 'brand' : ''}`
                :
                `${to === '/' ? 'brand' : ''}`}
        >
            {children}
        </NavLink>
    );
}

export default ActiveNavLink;
