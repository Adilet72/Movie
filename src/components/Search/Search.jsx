import Input from "../Ui/Input/Input.jsx";
import { useEffect, useState } from "react";
import movieApi from "../../service/MovieServise.js";
import {CiSearch} from "react-icons/ci";

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [text, setText] = useState("");

    const handelSearch = () => {
        setIsLoading(true);
        movieApi.fetchMovieByName(text)
            .then((res) => {
                setMovies(res.results);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {}, []);

    const handelChange = (e) => {
        setText(e.target.value.trim());
    };

    return (
        <div className="app-container bg-[#131416] text-white">
            <h3 className="w-[550px] h-[29px] font-bold mb-[15px] text-xl">Поиск по сайту</h3>
            <p className="w-full md:w-[35%] text-[#979797] mb-[60px]">
                На нашем сайте вы найдете подходящие вам фильмы и сериалы
            </p>
            <div className="flex items-center gap-4 mb-6">
                <Input
                    onChange={handelChange}
                    value={text}
                    hintText={"Поиск..."}
                />
                <CiSearch
                    onClick={handelSearch}
                    className="text-red-900 font-black-900 w-[17px] h-[17px]"
                    style={{ marginLeft: "-45px" }}
                />
            </div>
            {isLoading && <h4 className="text-center text-gray-400">Загрузка...</h4>}
            <div className="h-[400px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 flex gap-[10px] flex-wrap">
                {movies.length > 0 && movies.map((movie) => {
                    let url = 'https://image.tmdb.org/t/p/original';
                    return (
                        <div
                            className="items-center gap-4 p-4"
                            key={movie.id}
                        >
                            <img
                                className="w-[80px] h-[120px] object-cover rounded-lg"
                                src={url + movie.poster_path}
                                alt={movie.title}
                            />
                            <h4
                                style={{overflow: "hidden"}}
                                className="text-lg font-medium text-white h-[110px] w-[100px] ">{movie.title}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Search;
