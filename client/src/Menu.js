import React, { Fragment } from 'react';
import { useLocation } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import ForumIcon from '@material-ui/icons/Forum';
import LockIcon from '@material-ui/icons/Lock';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import { Icon } from '@material-ui/core';

import * as Icons from './img/icons'
import AdapterNavLink from './utils/navLinkAdapter';

const drawerWidth = 244;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    headerSpacer: theme.mixins.toolbar,
}));

const menuItems = [
    {
        text: 'Home',
        to: '/',
        icon: <HomeIcon />
    },
    {
        text: 'Profile',
        to: '/profile',
        icon: <PersonIcon />
    },
    {
        text: 'Hooks Form',
        to: '/hooksform',
        icon: <TextFieldsIcon />
    },
    {
        text: 'Hooks Container',
        to: '/hookscontainer',
        icon: <Icon><img src={Icons.Hook} alt="Hook Icon" /></Icon>
    },
    {
        text: 'Private Route',
        to: '/privateroute',
        icon: <LockIcon />
    },
    {
        text: 'Posts',
        to: '/posts',
        icon: <ForumIcon />
    },

]

const Menu = () => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.headerSpacer} />
            <List disablePadding>
                <Divider />
                {menuItems.map(item => (
                    <Fragment key={item.text}>
                        <ListItem button component={AdapterNavLink} selected={location.pathname === item.to} to={item.to}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                        <Divider />
                    </Fragment>
                ))}
            </List>
        </Drawer>
    )
}
export default Menu;