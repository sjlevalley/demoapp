import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'

const restrictStoreAccess = (store) => (next) => (action) => {
    if (process.env.NODE_ENV === 'production') {
        // Remove Redux DevTools
        delete window.__REDUX_DEVTOOLS_EXTENSION__
        delete window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

        // Remove console access to store
        delete window.store

        // Prevent certain actions in production if needed
        const restrictedActions = ['SOME_DEBUG_ACTION', 'ANOTHER_DEBUG_ACTION']
        if (restrictedActions.includes(action.type)) {
            return store.getState()
        }

        return next(action)
    }
    return next(action)
}

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(restrictStoreAccess),
    devTools: process.env.NODE_ENV !== 'production',
}) 