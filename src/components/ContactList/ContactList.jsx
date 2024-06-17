
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css'

const ContactList = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = allContacts.filter(contact => {
    return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
};


export default ContactList;
