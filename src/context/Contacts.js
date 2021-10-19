import React, { useState } from 'react';

export const ContactsContext = React.createContext(null);

export const ContactsWrapper = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    const changeContact = (contact) => {
       const index = contacts.findIndex(item => item.id === contact.id);
       contacts[index] = {...contact};
       setContacts([...contacts]);
    }

    const add = (contact) => {
        contacts.push(contact);
        setContacts([...contacts]);
    }

    const remove = (index) => {
        contacts.splice(index, 1);
        setContacts([...contacts]);
    }

    const value = {
        contacts,
        add,
        remove,
    };

    return (
        <ContactsContext.Provider value={value}>
            { children }
        </ContactsContext.Provider>
    );
}