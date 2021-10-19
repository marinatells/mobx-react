import {action, observable, makeObservable} from 'mobx';

class BooksStore {
    @observable books = [];

    constructor() {
        makeObservable(this)
    }

    @action add = (book) => {
        this.books.push(book);
    }

    @action remove = (index) => {
        this.books.splice(index, 1);
    }
}

export default BooksStore;