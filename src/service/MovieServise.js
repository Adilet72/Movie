import { axiosInstance as axios } from '../axios/index.js';



const movieApi = {
    getMovies: async () => {
        const response = await axios.get(`discover/movie?language=ru`);
        return response.data;
    },
    getMovieById: async (id) => {
        const response = await axios.get(`movie/${id}?language=ru`);
        return response.data;
    },
    getMovieCredits: async (movieId) => {
        const response = await axios.get(`movie/${movieId}/credits?language=ru`);
        return response.data;
    },
    async fetchMovieByName(movieName){
        try {
            const {data, status} = await axios.get(`search/movie`,{
                params: {
                     query: movieName,
                    language: 'ru'
                }
            })
            if(!status === 200) {
                throw new Error("Error movie fetching movie by name")
            }
            console.log(data)
            return data
        } catch (err) {
            console.error(err)
        }
    },

    async fetchMovieGenreList(){
        try {
            const {data, status} = await axios.get(`genre/movie/list?language=ru`)
            if(!status === 200) {
                throw new Error("Error movie fetching movie genre list")
            }
            return data
        } catch (err) {
            console.error(err)
        }
    },

    async fetchMovieByFilter(filter){
        try {
            const {data, status} = await axios.get(`${filter}`, {
                params: {
                    language: 'ru'
                }
            })
            if(!status === 200) {
                throw new Error("Error fetching movie by filter")
            }
            return data
        } catch (err) {
            console.error(err)
        }
    }

};

export default movieApi;