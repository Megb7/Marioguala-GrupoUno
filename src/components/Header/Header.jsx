import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-semibold">Mi Tienda</h1>
            <nav className="flex space-x-4">
                <Link to="/" className="hover:text-gray-400">Inicio</Link>
                <Link to="/products" className="hover:text-gray-400">Productos</Link>
                <Link to="/about" className="hover:text-gray-400">Nosotros</Link>
                <Link to="/contact" className="hover:text-gray-400">Contacto</Link>
                <Link to="/cart" className="hover:text-gray-400">Carrito</Link>
            </nav>
        </header>
    );
}

export default Header;
