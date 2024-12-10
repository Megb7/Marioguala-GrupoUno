import React from "react";

const Contact = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-20">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Contáctanos</h1>
                <p className="text-gray-600 text-lg leading-relaxed text-center max-w-2xl mx-auto">
                    ¿Tienes alguna pregunta o necesitas ayuda? Completa el formulario a continuación o utiliza nuestras opciones de contacto.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Formulario de Contacto */}
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Envíanos un Mensaje</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-600 font-medium mb-1" htmlFor="name">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Tu nombre completo"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-medium mb-1" htmlFor="email">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="tucorreo@ejemplo.com"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-medium mb-1" htmlFor="message">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Escribe tu mensaje aquí..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-300"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                    {/* Opciones de Contacto */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="flex items-center">
                            <i className="fas fa-phone-alt text-indigo-600 text-3xl mr-4"></i>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Llámanos</h3>
                                <p className="text-gray-600">+56 9 892821002</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-envelope text-indigo-600 text-3xl mr-4"></i>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                                <p className="text-gray-600">marioernesto.guala@alumnos.ulagos.cl</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-map-marker-alt text-indigo-600 text-3xl mr-4"></i>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Dirección</h3>
                                <p className="text-gray-600">Castro, Chile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
