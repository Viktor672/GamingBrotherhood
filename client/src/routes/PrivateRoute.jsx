import { useRef } from 'react';
import { Navigate } from 'react-router';

export default function PrivateRoute({ children }) {
    let hasRunned = useRef(false);
    let isAuthenticated = !!localStorage.getItem('user');
    if (!isAuthenticated) {
        if (hasRunned.current) {
            return <Navigate to="/register" />
        };
        hasRunned.current = true;
        alert("You must be logged in to be able to access this page!");
    }


    return children;
}