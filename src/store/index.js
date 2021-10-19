import Books from './books';
import FilmsStore from './films';

const store = {
    booksStore: new Books(),
    filmsStore: new FilmsStore()
};

export default store;