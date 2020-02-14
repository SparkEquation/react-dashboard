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

const AnalyticsPageTabs: React.FC<{}> = () => {

    const { menuState, setMenuState } = useContext(MenuContext); const classes = useStyles();

    const onChange = (event: React.ChangeEvent<{}>, value: number) => {
        setMenuState({
            ...menuState,
            tabs: {
                ...menuState.tabs,
                analyticsPage: {
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
                value={menuState.tabs.analyticsPage.value}
                onChange={onChange}
                textColor="inherit"
            >
                <Tab
                    label="Graphs"
                    value={1}
                    {...a11yProps(0)}
                />
                <Tab
                    label="Adazzle Data Grid"
                    value={2}
                    {...a11yProps(1)}
                />
                <Tab
                    label="Kendo UI Grid"
                    value={3}
                    {...a11yProps(1)}
                />
            </Tabs>
        </AppBar>
    )
};

export default AnalyticsPageTabs;