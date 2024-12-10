import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-black">
            {/* Botón de menú hamburguesa (visible solo en pantallas pequeñas) */}
            <div className="md:hidden flex items-center justify-end p-4">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-800 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Menú (oculto en pantallas pequeñas por defecto) */}
            <ul className={`md:flex md:space-x-6 p-4 md:p-0 ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)]">
                    <Link to="/" className="no-underline text-white hover:text-blue-500 " onClick={() => setIsMenuOpen(false)}>Inicio</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/products" className="no-underline text-white hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Tienda</Link>

                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)]">
                    <Link to="/about" className="no-underline text-white hover:text-white" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)]">
                    <Link to="/contact" className="no-underline text-white hover:text-white" onClick={() => setIsMenuOpen(false)}>Contactos</Link>
                </li>
            </ul>
        </nav>
    );
}
