import React from 'react';
import store from "../redux/store";
import { Provider } from 'react-redux';
import DefaultLayout from "../layout/DefaultLayout";

const App = () => {
    return (
        <Provider store={store}>
            <DefaultLayout>
                <div>Home page</div>
            </DefaultLayout>
        </Provider>
    );
};

export default App;
