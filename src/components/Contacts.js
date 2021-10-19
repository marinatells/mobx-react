import React, { useContext } from 'react';
import {ContactsContext} from '../context/Contacts';

export default function Contacts() {
    const {contacts, add} = useContext(ContactsContext);

    const onAdd = () => {
        add({name: 'Контакт #' + Math.round(Math.random() * 100)});
    }
    
    return (
        <div>
            <button onClick={onAdd}>Добавить контакт</button>
            {
                contacts.map((item, index) => {
                    return <p key={index}>{item.name}</p>
                })
            }
        </div>
    );
};
