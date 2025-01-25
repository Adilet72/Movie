import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';

import movieApi from "../../service/MovieServise.js";
import {HiArrowCircleLeft, HiArrowCircleRight} from "react-icons/hi";

const filterBtns = [
    { name: "Новинки", method: "trending/movie/week" },
    { name: "Популярное", method: "movie/popular" },
    { name: "Смотрят сейчас", method: "movie/now_playing" },
    { name: "Рекомендации", method: "movie/top_rated" },
    { name: "Топ 10", method: "movie/top_rated" },
    { name: "Скоро на Cinemax", method: "movie/upcoming" },
];

const FilterButton = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFilterClick = (method) => {
        setLoading(true);
        movieApi
            .fetchMovieByFilter(method)
            .then((res) => {
                console.log(res.results);
                setMovies(res.results);
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="app-container bg-black text-white min-h-screen p-5">
            <div className="flex gap-6 mb-10 px-6 py-4 bg-gray-800 rounded-lg">
                {filterBtns.map((item) => (
                    <button
                        onClick={() => handleFilterClick(item.method)}
                        key={item.name}
                        className="py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded text-sm font-bold"
                    >
                        {item.name}
                    </button>
                ))}
            </div>

            <div className="relative mt-5 ml-[35px]">
                {loading ? (
                    <h3 className="text-center text-xl">Загрузка...</h3>
                ) : (
                    <>
                        <Swiper
                            modules={[Navigation, Mousewheel]}
                            mousewheel={true}
                            navigation={{
                                nextEl: '.custom-next',
                                prevEl: '.custom-prev',
                            }}
                            spaceBetween={10}
                            slidesPerView={4}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 4 },
                            }}
                        >
                            {movies.map((film) => {
                                const url = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
                                return (
                                    <SwiperSlide key={film.id}>
                                        <div>
                                            <img
                                                className="w-[225px] h-[300px] object-cover rounded-lg mb-[20px]"
                                                src={url}
                                                alt={film.title}
                                            />
                                            <div>
                                                <h3 className="text-xl mb-[10px]">{film.title}</h3>
                                                <span className="text-sm text-gray-400">{film.release_date?.slice(0, 4)}</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>

                        <button
                            className="custom-prev absolute top-1/3 left-[-50px] transform -translate-y-2/1 bg-[#EF4234] text-white px-1 py-1 rounded-[100%] h-[35px] w-[35px] text-2xl shadow-mb hover:bg-red-900"
                        >
                            <HiArrowCircleLeft />

                        </button>
                        <button
                            className="custom-next absolute top-1/3 right-[-20px] transform -translate-y-2/1 bg-[#EF4234] text-white px-2 py-1 rounded-[100%] h-[35px] w-[35px] text-2xl shadow-md hover:bg-red-900"
                        >
                            <HiArrowCircleRight />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default FilterButton;
