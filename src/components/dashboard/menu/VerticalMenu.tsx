import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import { Omit } from '@material-ui/types';

type TCategoryChild = {
    id: string,
    icon: JSX.Element,
    to: string,
    isExact?: boolean
}

type TCategory = {
    id: string,
    children: TCategoryChild[]
};

const categories: TCategory[] = [
    {
        id: 'Develop',
        children: [
            { id: 'Authentication', icon: <PeopleIcon />, to: '/dashboard/authentication' },
            { id: 'Database', icon: <DnsRoundedIcon />, to: '/dashboard/database' },
            { id: 'UI Kit', icon: <SettingsInputComponentIcon />, to: '/dashboard/uikit' },
        ],
    },
    {
        id: 'Quality',
        children: [
            { id: 'Analytics', icon: <SettingsIcon />, to: '/dashboard/analytics' },
            { id: 'Performance', icon: <TimerIcon />, to: '/dashboard/analytics' },
        ],
    },
];

const useStyles = makeStyles((theme: Theme) => ({
    categoryHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: 1,
        paddingBottom: 1,
        color: 'rgba(255, 255, 255, 0.7)',
        '&:hover,&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
        '& a': {
            color: 'rgba(255, 255, 255, 0.7)',
        }
    },
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white,
    },
    itemActiveItem: {
        color: '#4fc3f7',
    },
    itemPrimary: {
        fontSize: 'inherit',
    },
    itemIcon: {
        minWidth: 'auto',
        marginRight: theme.spacing(2),
    },
    divider: {
        marginTop: theme.spacing(2),
    },
}));

export interface VerticalMenuProps extends Omit<DrawerProps, 'classes'> { }

const VerticalMenu: React.FC<VerticalMenuProps> = (props) => {

    const { ...other } = props;
    const classes = useStyles();

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
                    Spark Equation Hub
                </ListItem>
                <ListItem className={clsx(classes.item, classes.itemCategory)}>
                    <ListItemIcon className={classes.itemIcon}>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText
                        classes={{
                            primary: classes.itemPrimary,
                        }}
                    >
                        Project Overview
          </ListItemText>
                </ListItem>
                {categories.map(({ id, children }) => (
                    <Fragment key={id}>
                        <ListItem className={classes.categoryHeader}>
                            <ListItemText
                                classes={{
                                    primary: classes.categoryHeaderPrimary,
                                }}
                            >
                                {id}
                            </ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, to, isExact }) => (
                            <ListItem
                                key={childId}
                                button
                                className={clsx(classes.item)}
                            >
                                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.itemPrimary,
                                    }}
                                >
                                    <NavLink
                                        to={to}
                                        activeClassName="active"
                                        activeStyle={{ color: '#4fc3f7' }}
                                        exact={(isExact === undefined) ? false : isExact}
                                    >
                                        {childId}
                                    </NavLink>
                                </ListItemText>
                            </ListItem>
                        ))}
                        <Divider className={classes.divider} />
                    </Fragment>
                ))}
            </List>
        </Drawer>
    );
}

export default VerticalMenu;