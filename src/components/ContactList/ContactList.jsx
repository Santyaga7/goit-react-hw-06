
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css'

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <ul className={css.list}>
      {filteredContacts.map(item => (
        <li key={item.id}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
}
export default ContactList;


