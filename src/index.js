import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './container/Home';
import { Provider } from 'react-redux';
import Store from './utils/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render( 
<Provider store={Store.store}>
    <PersistGate loading={null} persistor={Store.persistor}>
        <Home/>
    </PersistGate>
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
