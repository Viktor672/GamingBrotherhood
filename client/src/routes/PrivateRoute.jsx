import { Navigate } from 'react-router';

export default function PrivateRoute({ children }) {
    let isAuthenticated = !!localStorage.getItem('user');
    return isAuthenticated ? children : <Navigate to="/register" />;
}