import './App.css';
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App;
