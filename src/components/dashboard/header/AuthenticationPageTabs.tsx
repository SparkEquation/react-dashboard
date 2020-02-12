import React, { useContext } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import a11yProps from '../../tabs/a11yProps';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { MenuContext } from '../../../context/menuContext';

const useStyles = makeStyles((theme: Theme) => ({
    secondaryBar: {
        zIndex: 0,
    }
}));

const AuthenticationPageTabs: React.FC<{}> = () => {

    const { menuState, setMenuState } = useContext(MenuContext); const classes = useStyles();

    const onChange = (event: React.ChangeEvent<{}>, value: number) => {
        setMenuState({
            ...menuState,
            tabs: {
                ...menuState.tabs,
                authenticationPage: {
                    value
                }
            }
        });
    };
    return (
        <AppBar
            component="div"
            className={classes.secondaryBar}
            color="primary"
            position="static"
            elevation={0}
        >
            <Tabs
                value={menuState.tabs.authenticationPage.value}
                onChange={onChange}
                textColor="inherit"
            >
                <Tab
                    label="Users"
                    value={1}
                    {...a11yProps(0)}
                />
                <Tab
                    label="Authentication method"
                    value={2}
                    {...a11yProps(1)}
                />
            </Tabs>
        </AppBar>
    )
};

export default AuthenticationPageTabs;