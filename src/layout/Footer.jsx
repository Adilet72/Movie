import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Cinemax</h3>
                    <ul>
                        <li><a href="#" className="hover:underline">О нас</a></li>
                        <li><a href="#" className="hover:underline">Блог</a></li>
                        <li><a href="#" className="hover:underline">Вакансии</a></li>
                        <li><a href="#" className="hover:underline">Акции</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Помощь</h3>
                    <ul>
                        <li><a href="#" className="hover:underline">Вопросы и ответы</a></li>
                        <li><a href="#" className="hover:underline">Контакты</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Поддержка</h3>
                    <p className="mb-2">Мы всегда готовы вам помочь.<br />Наши операторы онлайн 24/7</p>
                    <div className="flex items-center space-x-3 mb-4">
                        <a href="#" className="text-red-500 hover:text-red-400"><i className="fas fa-phone"></i></a>
                        <a href="#" className="text-red-500 hover:text-red-400"><i className="fas fa-envelope"></i></a>
                        <a href="#" className="text-red-500 hover:text-red-400"><i className="fab fa-telegram"></i></a>
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                        Написать в чате
                    </button>
                </div>
            </div>

            <div className="container flex justify-between items-center px-4 mt-6 text-center text-sm border-t border-gray-700 pt-4">
                <p>© 2015-2024 Cinemax</p>
                <a href="#" className="hover:underline">Пользовательские соглашения</a>
            </div>
        </footer>
    );
};

export default Footer;
