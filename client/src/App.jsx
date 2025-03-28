import { Routes, Route, Navigate } from 'react-router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/404';
import GamesPage from './pages/GamesPage';
import DetailsPage from './pages/DetailsPage';
import CreatePage from './pages/CreatePage';
import { UserProvider } from './contexts/UserContext';
import LogoutPage from './pages/LogoutPage';
import EditPage from './pages/EditPage';
import DeletePage from './pages/DeletePage';

function App() {
    let PrivateRoute = ({ children }) => {
        let isAuthenticated = !!localStorage.getItem('user');
        return isAuthenticated ? children : <Navigate to="/register" />;
    };

    return (
        <UserProvider>
            <div className="app-container">
                <Header />

                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/404" element={<NotFound />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/games" element={<GamesPage />} />
                        <Route path="/:gameId/details" element={<DetailsPage />} />
                        <Route path="/:gameId/edit" element={<PrivateRoute><EditPage /></PrivateRoute>} />
                        <Route path="/:gameId/delete" element={<PrivateRoute><DeletePage /></PrivateRoute>} />
                        <Route path="/create" element={<PrivateRoute><CreatePage /></PrivateRoute>} />
                        <Route path="/logout" element={<PrivateRoute><LogoutPage /></PrivateRoute>} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </UserProvider>
    );
}

export default App;
