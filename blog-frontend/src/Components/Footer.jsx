import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
    footerSpace: {
        padding: "100px 30% 32px 30%",
        background: "black",
        color: "#FFFFFF",
    },
    contactUs:{
        display: "flex",
        justifyContent: "center",
        marginBottom: "64px",
    },
    contactLink: {
        textDecoration: "underline",
        marginLeft: "27px",
    },
    nodricRoseFooter:{
        color: "rgba(255, 255, 255, 1)",
        fontSize: "36px",
        textAlign: "center",
    },
    lorem:{
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "normal",
        margin: "24px 0px 32px 0px",
    },
    centerText:{
        textAlign: "center",
    },
    copyRight: {
       fontSize: "12px", 
    }
});

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footerSpace}>
            <div className={classes.nodricRoseFooter}>Nodric Rose</div>
            <div className={`${classes.lorem} ${classes.centerText}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. 
                In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. 
            </div>
            <div className={classes.contactUs}>
                <span className={classes.contactLink}>Twitter</span>
                <span className={classes.contactLink}>Linkedlin</span>
                <span className={classes.contactLink}>RSS</span>
            </div>
            <div className={`${classes.centerText} ${classes.copyRight}`}>© 2012–2020 Nordic Rose Co.</div>
            <div className={`${classes.centerText} ${classes.copyRight}`}>All rights reserved.</div>
        </div>
    )
}

export default Footer;