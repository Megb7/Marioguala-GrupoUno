import React from "react";

const About = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-20">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Sobre Nosotros</h1>
                <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                    En <span className="text-indigo-600 font-semibold">E-commerce Go</span>, nos dedicamos a ofrecer los mejores productos con una experiencia única de compra.
                    Nuestra misión es satisfacer tus necesidades con calidad, compromiso y pasión por lo que hacemos.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <div className="text-indigo-600 text-4xl mb-4">
                            <i className="fas fa-hand-holding-heart"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Calidad Garantizada</h3>
                        <p className="text-gray-600 mt-2">
                            Solo ofrecemos productos seleccionados cuidadosamente para cumplir con los más altos estándares.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <div className="text-indigo-600 text-4xl mb-4">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Atención Personalizada</h3>
                        <p className="text-gray-600 mt-2">
                            Nuestro equipo está aquí para ayudarte en cada paso del proceso de compra.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <div className="text-indigo-600 text-4xl mb-4">
                            <i className="fas fa-globe"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Cobertura Global</h3>
                        <p className="text-gray-600 mt-2">
                            Realizamos envíos a nivel mundial para llevar nuestros productos a donde estés.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
