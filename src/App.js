import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    {publicRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.component} />
                    ))}
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
