import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [filter, setFilter] = useState(''); // Локальное состояние для фильтра

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId)); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Find contacts by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul className={css.contactContainer}>
        {contacts
          .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
          .map(contact => (
            <Contact
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
              onDelete={() => handleDelete(contact.id)} 
            />
          ))}
      </ul>
    </div>
  );
};

export default ContactList;
