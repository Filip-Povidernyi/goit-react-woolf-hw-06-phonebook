import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./sliceContacts/sliceContacts";
import { filterReducer } from "./sliceFilter/sliceFilter";
import persistStore from "redux-persist/es/persistStore";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";



export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);