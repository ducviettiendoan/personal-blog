import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({

});

function BlogPreview(props) {
    const classes = useStyles();
    const { img, description } = props;
    return (
        <Grid container style={{ textAlign: "center" }}>
            <Grid items xs={12}>
                <img src={img} alt="Blog" style={{width: "90%"}}/>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center", padding:"10px 25%"}}>
                {description}
            </Grid>
        </Grid>
    )
}

export default BlogPreview;