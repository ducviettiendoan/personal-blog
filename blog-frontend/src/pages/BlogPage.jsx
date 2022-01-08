import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import introPicture from "../img/landing-page-img.png";
import FaceBookIcon from "../Icons/Facebook";
import TwitterIcon from "../Icons/Twitter";
import blogPicture from "../img/public_blog_picture.png";

const useStyles = makeStyles({
    bodySpace: {
        padding: "7% 20%",
    },
    centerContent: {
        textAlign: "center",
    },
    blackUnderline: {
        height: "2px",
        width: "80%",
        background: "rgba(0, 0, 0, 1)",
        margin: "34px auto 64px auto",
    },
    boldTitle: {
        fontWeight: 700,
        fontSize: "56px",
        fontFamily: "san-serif",
        color: "rgba(0, 0, 0, 1)",
        padding: "44px 0px 32px 0px",
    },
    subTitle: {
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: 2.4,
        fontFamily: "SF Mono",
        color: "rgba(0, 0, 0, 1)",
        marginBottom: "32px",
    },
    iconBox: {
        border: "1px solid rgba(234, 234, 234, 1)",
        textAlign: "center",
        padding: "5px",
    },
    blogBody: {
        width: "80%",
        margin: "auto !important",
    },
    highlight: {
        color: "rgba(0, 0, 0, 1)",
        fontWeight: 700,
        fontSize: '32px',
        lineHeight: "normal",
        marginBottom: "24px",
    },
    shareBox:{
        padding: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid rgba(234, 234, 234, 1)",
    },
    shareText: {
        marginLeft: "8px",
    }
});

function ListingPage() {
    const classes = useStyles();
    return (
        <div className={classes.bodySpace}>
            <div className={`${classes.centerContent} ${classes.boldTitle}`}>A few words about this blog platform, Ghost, and how this site was made</div>
            <div className={`${classes.centerContent} ${classes.subTitle}`}>Why Ghost (& Figma) instead of Medium, WordPress or other options?</div>
            <img src={introPicture} style={{ width: '100%' }} />
            <div className={`${classes.blackUnderline}`}></div>
            <div className={classes.blogBody}>
                <Grid container style={{ marginBottom: "60px" }}>
                    <Grid item xs={9}>
                        <div>User Name</div>
                        <div>Blog created Date</div>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container>
                            <Grid item xs={6} className={classes.iconBox}>
                                <FaceBookIcon />
                            </Grid>
                            <Grid item xs={6} className={classes.iconBox}>
                                <TwitterIcon />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} style={{ marginBottom: "32px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: "52px" }}>
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.
                    </Grid>
                </Grid>
                <div className={classes.highlight}>Next on the pipeline</div>
                <Grid container>
                    <Grid item xs={12} style={{ marginBottom: "32px" }}>
                        Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: "52px" }}>
                        Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.
                    </Grid>
                </Grid>
                <img src={blogPicture} alt="Sample Picutre" style={{ width: "100%" }} />
                <div style={{ marginTop: "52px" }}>A list looks like this: </div>
                <ul style={{ paddingLeft: "18px" }}>
                    <li>First item in the list.</li>
                    <li>Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet.</li>
                    <li>Third item in the list</li>
                </ul>
                <div style={{ marginTop: "52px" }}>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. </div>
                <Grid container style={{ marginTop: "52px", marginBottom: "76px" }}>
                    <Grid item xs={12}>Thanks for reading,</Grid>
                    <Grid item xs={12}>Mika</Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6} className={classes.shareBox}>
                        <FaceBookIcon />
                        <span className={classes.shareText}>Share on Faceboook</span>
                    </Grid>
                    <Grid item xs={6} className={classes.shareBox}>
                        <TwitterIcon />
                        <span className={classes.shareText}>Share on Twitter</span>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ListingPage;