import { useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}
export default App
