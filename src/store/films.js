import { makeAutoObservable, runInAction } from 'mobx';

export default class FilmsStore {
    films = [];
    isLoaded = false;
    isLoading = false;

    pages = [
        1, 2, 3, 4, 5, 6, 7
    ];

    currentPage = 4;

    get nextPage () {
        return  this.pages[this.currentPage + 1];
    }

    get prevPage () {
        return  this.pages[this.currentPage - 1];
    }

	constructor() {
		makeAutoObservable(this);
	}

    add = (film) => {
        this.films.push(film);
    }

    remove = (index) => {
        this.books.splice(index, 1);
    }

    loadData = async () => {
        if (this.isLoaded && this.isLoading) {
            return;
        }

        this.isLoading = true;
        const data = await fetch();
        this.isLoading = false;

        this.films = data;
        this.isLoaded = true;
    }
}