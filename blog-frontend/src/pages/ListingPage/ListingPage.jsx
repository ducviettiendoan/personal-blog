import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import introPicture from "../../img/landing-page-img.png";
import BlogPreview from "./BlogPreview";
import pic1 from "../../img/blog_picture1.png";
import pic2 from "../../img/blog_picture2.png";
import pic3 from "../../img/blog_picture3.png";
import pic4 from "../../img/blog_picture4.png";
import axios from "axios";
import Button from '@material-ui/core/Button';

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
    }
});

function ListingPage() {
    const classes = useStyles();

    // async function fetchStudents() {
    //     try {
    //         const res = await axios.get("http://localhost:9000/blog");
    //         const data = res.data;
    //         console.log(data);
    //     }catch(err){
    //         console.log(err);
    //     }
    // }

    // async function createStudents() {
    //     try {
    //         const res = await axios.post("http://localhost:9000/blog/post",{
    //             title: "This is the 1st blog",
    //             content: "Welcome to my blog page",
    //             dob: new Date(Date.now())
    //         });
    //         console.log(res);
    //     }catch(err){
    //         console.log(err);
    //     }
    // }

    // async function deleteStudent(){
    //     try {
    //         const res = axios.delete("http://localhost:9000/blog/delete/2")
    //         console.log(res);
    //     }catch(err){
    //         console.log(err);
    //     }
    // }

    // async function updateStudents() {
    //     try {
    //         const res = await axios.put("http://localhost:9000/blog/update/2",{
    //             title: "This is a 3rd page",
    //             content: "Hello",
    //             dob: new Date(Date.now())
    //         });
    //         console.log(res);
    //     }catch(err){
    //         console.log(err);
    //     }
    // }

    // React.useEffect(() => {
    //     fetchStudents();
    //     // createStudents();
    // }, [])

    // const handleDelete=()=>{
    //     deleteStudent();
    // }

    // const handleUpdate = ()=> {
    //     updateStudents();
    // }

    const blogs = {
        blog1: {
            img: pic1,
            description: "Here are some things you should know regarding how we work ",
        },
        blog2: {
            img: pic2,
            description: "Granny gives everyone the finger, and other tips from OFFF Barcelona",
        },
        blog3: {
            img: pic3,
            description: "Hello world, or, in other words, why this blog exists",
        },
        blog4: {
            img: pic4,
            description: "Here are some things you should know regarding how we work ",
        },
    };

    return (
        <div className={classes.bodySpace}>
            <img src={introPicture} style={{ width: '100%' }} />
            <div className={`${classes.centerContent} ${classes.boldTitle}`}>A few words about this blog platform, Ghost, and how this site was made</div>
            <div className={`${classes.centerContent} ${classes.subTitle}`}>Why Ghost (& Figma) instead of Medium, WordPress or other options?</div>
            <div className={`${classes.blackUnderline}`}></div>
            <Grid container>
                {Object.keys(blogs).map(blog => {
                    return (
                        <Grid item sm={12} md={6}>
                            <BlogPreview img={blogs[blog].img} description={blogs[blog].description} />
                        </Grid>
                    )
                })}
            </Grid>
            {/* <Button style={{background:"red"}} onClick={handleDelete}>Delete</Button>
            <Button style={{background:"green"}} onClick={handleUpdate}>Update</Button> */}
        </div>
    )
}

export default ListingPage;