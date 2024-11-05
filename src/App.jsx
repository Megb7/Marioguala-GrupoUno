import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Products />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
