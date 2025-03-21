import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/404';
import GamesPage from './pages/GamesPage';
import DetailsPage from './pages/DetailsPage';
import CreatePage from './pages/CreatePage';
import { useState } from 'react';
import { UserContext } from './contexts/UserContext';
import LogoutPage from './pages/LogoutPage';

function App() {
    let [user, setUser] = useState({});

    let setUserHandler = (data = {}) => {
        setUser(data);
        console.log(data);
    }

    return (
        <UserContext.Provider value={{ ...user, setUserHandler }} >
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
                        <Route path="/details/:id" element={<DetailsPage />} />
                        <Route path="/create" element={<CreatePage />} />
                        <Route path="/logout" element={<LogoutPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </UserContext.Provider>
    );
}

export default App;
