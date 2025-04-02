import { useRef } from 'react';
import { Navigate } from 'react-router';

export default function PublicRoute({ children }) {
    let hasRunned = useRef(false);
    let isAuthenticated = !!localStorage.getItem('user');

    if (isAuthenticated) {
        if (hasRunned.current) {
            return <Navigate to="/" />
        };
        hasRunned.current = true;
        alert("You are already logged in!");
    }

    return children;
}
