import React from 'react';
import store from "../redux/store";
import { Provider } from 'react-redux';

const App = () => {
    return (
        <Provider store={store}>
            <div className='app-title'>
                <h1>Welcome to React!</h1>
            </div>
        </Provider>
    );
};

export default App;
