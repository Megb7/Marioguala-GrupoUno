import React from 'react';

export default function FooterComponent() {
    return (
        <footer className="bg-black py-[60px] w-[100vw] text-white">
            <div className="container mx-auto flex flex-row items-start justify-content-center">

                {/* Derechos de autor */}
                <div className="text-center">
                    <p>&copy; Todos los derechos reservados a Mario Ernesto Guala Barrìa.</p>
                </div>
            </div>
        </footer>
    );
}
