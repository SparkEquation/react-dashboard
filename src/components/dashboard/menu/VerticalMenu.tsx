import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import { Omit } from '@material-ui/types';
import { MenuContext } from '../../../context/menuContext';
import menu from './menu';

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
            textDecoration: 'none'
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
                    <Link to="/">Spark Equation Hub</Link>
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
                        Project Dashboard
          </ListItemText>
                </ListItem>
                {menu.map(({ id, children }) => (
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
                        {children.map(({ id: childId, Icon, to, isExact }) => (
                            <ListItem
                                key={childId}
                                button
                                className={clsx(classes.item)}
                            >
                                <ListItemIcon className={classes.itemIcon}><Icon /></ListItemIcon>
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