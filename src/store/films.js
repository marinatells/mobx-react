import { makeAutoObservable, runInAction } from 'mobx';

export default class FilmsStore {
    films = [];
    isLoaded = false;
    isLoading = false;

    pages = [
        1, 2, 3, 4, 5, 6, 7
    ];

    currentPage = 4;

    constructor() {
		makeAutoObservable(this);
	}


    get nextPage () {
        return  this.pages[this.currentPage + 1];
    }

    get prevPage () {
        return  this.pages[this.currentPage - 1];
    }


    add = (film) => {
        this.films.push(film);
    }

    remove = (index) => {
        this.books.splice(index, 1);
    }

    loadData = async () => {
        if (this.isLoaded || this.isLoading) {
            return;
        }

        runInAction(() => {
            this.isLoading = true;
        });

        // загрузка с сервера (тут должен быть fetch)
        const data = await Promise.resolve([
            {name: 'фильм 1 с сервера'},
            {name: 'фильм 2 c сервера'},
        ]);
        
        runInAction(() => {
            this.isLoading = false;
    
            this.films = data;
            this.isLoaded = true;
        });
    }
}