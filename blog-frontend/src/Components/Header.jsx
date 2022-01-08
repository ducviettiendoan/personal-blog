import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import headerLogo from "../img/nordic_rose.png";
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    headerPosition: {
        padding: "16px 48px",
        borderBottom: "1px ",
        boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.16)"
    },
    navPosition: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    linkGap: {
        marginLeft: "32px",
    },
    menuIconPosition: {
        textAlign: "right",
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            flexShrink: 0,
        },
        textAlign: "right",
    },
    menuButton: {
        padding: "0px",
        paddingLeft: "12px",
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
}));

function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const matches = useMediaQuery('(min-width: 600px)');

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem button>
                    <Link to="/" style={{ textDecoration: "unset" }}>
                        <div className={classes.linkGap}>Blog</div>
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link to="/about" style={{ textDecoration: "unset" }}>
                        <div className={classes.linkGap}>About</div>
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link to="/links" style={{ textDecoration: "unset" }}>
                        <div className={classes.linkGap}>Links</div>
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link to="/project" style={{ textDecoration: "unset" }}>
                        <div className={classes.linkGap}>Project</div>
                    </Link>
                </ListItem>
            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Grid container className={classes.headerPosition}>
            <Grid item xs={6}>
                <img src={headerLogo} alt="Nordic Rose" style={{ width: "50%" }} />
            </Grid>
            {matches && <Grid item xs={6} className={classes.navPosition}>
                <Link to="/" style={{ textDecoration: "unset" }}>
                    <div className={classes.linkGap}>Blog</div>
                </Link>
                <Link to="/about" style={{ textDecoration: "unset" }}>
                    <div className={classes.linkGap}>About</div>
                </Link>
                <Link to="/links" style={{ textDecoration: "unset" }}>
                    <div className={classes.linkGap}>Links</div>
                </Link>
                <Link to="/project" style={{ textDecoration: "unset" }}>
                    <div className={classes.linkGap}>Project</div>
                </Link>
            </Grid>}
            {!matches &&
                <Grid item xs={6} className={classes.nmenuIconPosition}>
                    <nav className={classes.drawer} aria-label="mailbox folders">
                        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Hidden smDown implementation="css">
                            <Drawer
                                container={container}
                                variant="temporary"
                                anchor={theme.direction === 'rtl' ? 'left' : 'right'}
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                    </nav>
                </Grid>}
        </Grid>
    )
}

export default Header;