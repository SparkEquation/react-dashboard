import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Dashboard from './components/Dashboard';
import * as serviceWorker from './serviceWorker';
import { MenuContext } from './context/context';


const App: React.FC<{}> = () => {
    const [menuState, setMenuState] = useState();
    return (
        <BrowserRouter>
            <MenuContext.Provider value={{ menuState, setMenuState }}>
                <Dashboard />
            </MenuContext.Provider>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
