
import { contactReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";

const persistConfig = {
   key: 'items',
    storage,
  
};
const persistedContactReducer = persistReducer(persistConfig, contactReducer);
 export const rootReducer = {
   contacts: persistedContactReducer,
   filters: filtersReducer

}