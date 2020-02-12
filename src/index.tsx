import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'typeface-roboto';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MenuContext } from './context/menuContext';
import { ThemeProvider } from '@material-ui/core';
import baseTheme from './baseTheme';
import { TMenuState } from './interfaces/index';


const Main: React.FC<{}> = () => {
    const [menuState, setMenuState] = useState<TMenuState>({
        currentPage: 'authentication',
        currentHeader: 'Authentication',
        tabs: {
            authenticationPage: {
                value: 1
            }
        }
    });
    return (
        <BrowserRouter>
            <MenuContext.Provider value={{ menuState, setMenuState }}>
                <ThemeProvider theme={baseTheme}>
                    <App />
                </ThemeProvider>
            </MenuContext.Provider>
        </BrowserRouter>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
