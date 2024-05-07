import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const phoneContacts = {
    items: [
        { id: 'id-1', name: 'Beyoncé', number: '342-12-44' },
        { id: 'id-2', name: 'Drake', number: '440-22-78' },
        { id: 'id-3', name: 'Taylor Swift', number: '897-11-20' },
        { id: 'id-4', name: 'Shawn Mendes', number: '284-91-51' },
    ],
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: phoneContacts,
    reducers: {
        addContact(state, action) {
            state.items.push({ id: nanoid(), ...action.payload });
        },
        removeContact(state, action) {
            state.items = state.items.filter(
                contact => contact.id !== action.payload.id
            );
        },
    },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = persistReducer(
    { key: 'contacts', storage },
    contactsSlice.reducer
);