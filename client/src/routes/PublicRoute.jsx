import { Navigate } from 'react-router';

export default function PublicRoute({ children }) {
    let isAuthenticated = !!localStorage.getItem('user');
    return isAuthenticated ? <Navigate to="/" /> : children;
}
