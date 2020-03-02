import {createStore, combineReducers, applyMiddleware} from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import loginReducer from '../reducers/loginReducer';
import dataReducer from '../reducers/dataReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducers = combineReducers({
    loginReducer,
    dataReducer
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

let store = createStore(persistedReducer) //,{},composeWithDevTools(applyMiddleware(thunk))


let persistor = persistStore(store);


export default { store, persistor };