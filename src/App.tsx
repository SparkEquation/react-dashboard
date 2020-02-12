import React, { useContext, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, useLocation } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Front from './components/front/Front';
import { MenuContext } from './context/menuContext';
import menu from './components/dashboard/menu/menu';

const App: React.FC<{}> = () => {

    const location = useLocation();
    const { menuState, setMenuState } = useContext(MenuContext);

    useEffect(() => {
        /**
         * Route handler.
         * Sets currently visited page in Menu context.
         */
        ((pathname) => {
            const currentMenuPage = menu[0].children.find((child) => child.to === pathname);
            const currentHeader = (currentMenuPage) ? currentMenuPage.id : '';
            const currentPageParts = pathname.slice(1).split('/');
            let currentPage = pathname.slice(1);
            if (currentPageParts[0] === 'dashboard') {
                currentPageParts.shift();
                currentPage = currentPageParts.join('/');
            }
            setMenuState({
                ...menuState,
                currentPage,
                currentHeader
            });
        })(location.pathname)

    }, [location.pathname]);

    return (
        <div className="App" data-testid="app">
            <Switch>
                <Route exact path='/' component={Front} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </div >
    );
}

export default hot(module)(App);
