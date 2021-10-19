import React, { useEffect } from 'react';
import {inject, observer} from 'mobx-react';

function Films({ films, add, isLoaded }) {
    if (!isLoaded) {
        return '... идет загрузка ...';
    }
    
    const onAdd = () => {
        add({name: 'Фильм #' + Math.round(Math.random() * 100)})
    }
    
    return (
        <div>
            <button onClick={onAdd}>Добавить фильм</button>
            {
                films.map((item, index) => {
                    return <p key={index}>{item.name}</p>
                })
            }
        </div>
    );
};


export default inject(({ filmsStore }) => {
    const {films, add, isLoaded, loadData} = filmsStore;

    useEffect(() => {
        loadData();
    });

	return {
        films, add, isLoaded
    };
})(observer(Films));
