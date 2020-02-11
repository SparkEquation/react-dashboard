import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import dashboardExtendedTheme from './extendDashboardTheme';
import VerticalMenu from './menu/VerticalMenu';
import DashboardHeader from './header/DashboardHeader';
import { makeStyles, Hidden } from '@material-ui/core';
import clsx from 'clsx';
import DashboardContent from './content/DashboardContent';

const drawerWidth = 256;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '500vh',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        flex: 1,
        padding: theme.spacing(6, 4),
        background: '#eaeff1',
    },
    footer: {
        padding: theme.spacing(2),
        background: '#eaeff1',
    },
}));

const Dashboard: React.FC<{}> = () => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const onMenuToggle = () => {
        setOpen(!open);
    };

    return (

        <ThemeProvider theme={dashboardExtendedTheme}>
            <div data-testid="dashboard" className={clsx('dashboard', classes.root)}>
                <Hidden smUp implementation="js">
                    <nav className={classes.drawer}>
                        <VerticalMenu
                            PaperProps={{ style: { width: drawerWidth } }}
                            variant="temporary"
                            open={open}
                            onClose={onMenuToggle}
                        />
                    </nav>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <nav className={classes.drawer}>
                        <VerticalMenu
                            PaperProps={{ style: { width: drawerWidth } }}
                        />
                    </nav>
                </Hidden>
                <div className={classes.app}>
                    <DashboardHeader onMenuToggle={onMenuToggle} />
                    <main className={classes.main}>
                        <DashboardContent />
                    </main>
                    <footer className={classes.footer}>
                        Copyright here
                </footer>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Dashboard;