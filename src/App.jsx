import './App.css';
import HeaderComponent from './Components/Header/Header.jsx';
import FooterComponent from './Components/Footer/Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Home/Home.jsx';
import AboutPage from './Components/About/About.jsx';
import ContactPage from './Components/Contact/Contact.jsx';
import ProductsPage from './Components/Productos/Productos.jsx';
import ItemDetail from './Components/ItemDetail/ItemDetail.jsx';
import ProductsCategory from './Components/Categoria/Categoria.jsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderComponent />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='/products' element={<ProductsPage />} />
                    <Route path='/category/:categoryId' element={<ProductsCategory />} />
                    <Route path='/products/:productId' element={<ItemDetail />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                </Routes>

                <FooterComponent />
            </BrowserRouter>
        </>
    );
}

export default App;
