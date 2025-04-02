import { Routes, Route } from 'react-router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import GamesPage from './pages/GamesPage';
import DetailsPage from './pages/DetailsPage';
import CreatePage from './pages/CreatePage';
import { UserProvider } from './contexts/UserContext';
import LogoutPage from './pages/LogoutPage';
import EditPage from './pages/EditPage';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import OwnerRoute from './routes/OwnerRoute';

function App() {
    return (
        <UserProvider>
            <div className="app-container">
                <Header />

                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
                        <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/games" element={<GamesPage />} />
                        <Route path="/:gameId/details" element={<DetailsPage />} />
                        <Route path="/:gameId/edit" element={<OwnerRoute><EditPage /></OwnerRoute>} />
                        <Route path="/create" element={<PrivateRoute><CreatePage /></PrivateRoute>} />
                        <Route path="/logout" element={<PrivateRoute><LogoutPage /></PrivateRoute>} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </UserProvider>
    );
}

export default App;
