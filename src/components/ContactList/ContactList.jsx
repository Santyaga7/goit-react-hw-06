
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css'
import React, { useState } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId)); 
  };
  const [filter, setFilter] = useState('');
  const filteredContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);

return (
  <div>
    <input
      type="text"
      placeholder="Фильтр по имени"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
    <ul className={css.contactContainer}>
      {filteredContacts.map(contact => (
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

export default ContactList;

