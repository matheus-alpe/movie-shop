import api from '@/http';

export default {
    getAllGenresTypes: (language = 'pt-BR') => api({ method: 'GET', url: `genre/movie/list?language=${language}`}),
    
    getTrendings: (page = '1') => api({ method: 'GET', url: `/trending/movie/week?page=${page}`}),
    
    searchByTerm: (page, term) => api({ method: 'GET', url: `/search/movie?query=${term}&page=${page}` })
}