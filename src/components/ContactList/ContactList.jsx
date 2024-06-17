
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css'

const ContactList = () => {
    const contacts = useSelector(selectContacts)
    const filterName = useSelector(selectNameFilter)
console.log(contacts);
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterName.toLowerCase()));
    return (
        <ul className={css.listUser}>
            {filteredContacts.map(contact => (
                <li key={contact.id}>
                    <Contact contact={contact } />  
               </li> 
            ))}
        </ul>
            )
}

export default ContactList;
