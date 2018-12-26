import React from "react";
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import NavAppBar from './NavAppBar';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const links = [
    {
        name: 'Home',
        location: '/'
    },
    {
        name: 'page1',
        location: '/page1'
    },
    {
        name: 'page2',
        location: '/page2'
    }
];

const styles = theme => ({
    root: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexFlow: 'column'
    },
    appBarPlace: theme.mixins.toolbar,
    drawer: {
        background: theme.palette.primary.main
    },
    drawerPaper: {
        border: 0,
        backgroundColor: theme.palette.primary.main
    },
    linkButton: {
        color: theme.palette.primary.contrastText
    },
    linkButtonContainer: {
        maxWidth: '600px',
        margin: 'auto'
    }
});

@withStyles(styles)
@withRouter
@inject('dataStore')
@observer
class Navigation extends React.Component {

    menuButtonPress = () => {
        const { dataStore } = this.props;
        dataStore.setDrawer(!dataStore.drawerOpen);
    }

    homeButtonPress= () => {
        this.goTo('/');
    }

    goTo(path){
        const {history,location} = this.props;
        this.hideDrawer();
        if(location.pathname !== path){
            history.push(path);
        }
    }

    hideDrawer = async () => {
        const { dataStore } = this.props;
        dataStore.setDrawer(false);
    }

    render() {
        const { classes, children, dataStore } = this.props;
        return (
            <div className={classes.root}>
                <NavAppBar menuClick={this.menuButtonPress} homeClick={this.homeButtonPress}/>
                <div className={classes.appBarPlace} />
                {children}
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="top"
                    open={dataStore.drawerOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.appBarPlace} />
                    {links.map((link) => {
                        return(<Button key={link.name} className={classes.linkButton} onClick={() => this.goTo(link.location)}>{link.name}</Button>);
                    })}
                </Drawer>
            </div>
        );
    }
}

export default Navigation;
