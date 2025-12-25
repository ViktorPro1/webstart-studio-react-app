import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        // Контейнер з мінімалістичним градієнтом
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">

            {/* Анімаційний фоновий елемент (для ефекту) */}
            <div className="absolute top-0 right-0 h-96 w-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 left-0 h-96 w-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="max-w-xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10 z-10">
                <div className="py-16 px-8 sm:px-12 lg:px-16 text-center">

                    {/* Покращений блок 404 - акцентний, великий, стилізований */}
                    <div className="relative mb-6">
                        <span className="text-9xl font-extrabold text-white opacity-10 absolute inset-0 flex items-center justify-center pointer-events-none">
                            OOPS
                        </span>
                        {/* ВИПРАВЛЕННЯ: bg-gradient-to-r замінено на bg-linear-to-r */}
                        <h1 className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-red-400 to-indigo-400 mb-4 tracking-tight relative z-20">
                            404
                        </h1>
                    </div>


                    <h2 className="text-3xl font-bold text-gray-50 mb-3 tracking-wider">
                        Сторінку не знайдено
                    </h2>

                    <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                        Вибачте, але сторінка, яку ви шукаєте, була переміщена,
                        видалена,або знаходиться в розробці. <br />Спробуйте повернутися пізніше.
                    </p>

                    {/* Кнопка з ефектом "скла" та анімацією наведення */}
                    <Link
                        to="/"
                        className="inline-flex items-center px-8 py-4 border border-transparent text-base font-semibold rounded-2xl shadow-lg 
                                   text-white bg-indigo-600/70 backdrop-blur-sm 
                                   hover:bg-indigo-700/90 transition duration-300 ease-in-out 
                                   transform hover:scale-[1.05] focus:outline-none focus:ring-4 focus:ring-indigo-500/50 
                                   hover:shadow-2xl hover:shadow-indigo-500/50"
                    >
                        ← Повернутися на Головну
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;





