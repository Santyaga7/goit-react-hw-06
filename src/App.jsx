import { useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox onFilter={handleFilterChange} />
      <ContactList onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;
