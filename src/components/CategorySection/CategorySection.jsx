import { useEffect, useState } from "react";
import movieApi from "../../service/MovieServise.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Mousewheel} from 'swiper/modules';

const CategorySection = () => {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        movieApi.fetchMovieGenreList()
            .then((data) => setGenres(data.genres))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="app-container bg-[#131416] text-white">
            <h3 className="text-2xl font-bold mb-[15px]">Смотрите фильмы, которые вам нравятся</h3>
            <p className="text-gray-[#979797] w-[410px] mb-[60px]">
                На нашем сайте собрано огромное количество фильмов и сериалов на любой вкус
            </p>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                className="genre-swiper"
                mousewheel={true}
                modules={[Mousewheel]}
            >
                {loading ? (
                    <div className="text-center">Загрузка...</div>
                ) : (
                    genres.map((genre) => (
                        <SwiperSlide key={genre.id}>
                            <div className="w-[300px] h-[170px] rounded-[10px] bg-[#1A1A1A] flex flex-col items-center justify-center">
                                <h4 className="text-xl font-medium">{genre.name}</h4>
                                <p className="text-sm text-red-900">{Math.floor(Math.random() * 120) + 80}k+ фильмов</p>
                            </div>
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
        </div>
    );
};

export default CategorySection;
