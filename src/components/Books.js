import React from 'react';
import {inject, observer} from 'mobx-react';

function Books({ books, add, remove }) {
    const onAdd = () => {
        add({name: 'Книга #' + Math.round(Math.random() * 100)})
    }
    
    return (
        <div>
            <button onClick={onAdd}>Добавить книгу</button>
            {
                books.map((item, index) => {
                    return <p key={index}>{item.name}</p>
                })
            }
        </div>
    );
};


export default inject(({ booksStore, filmsStore }) => {    
	return {
        books: booksStore.books,
        add: booksStore.add,
        remove: booksStore.remove
    };
})(observer(Books));
