import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import parser from "html-react-parser";   //this lib will change the HTML String into real HTML and inject to React code directly
import axios from "axios";
import { ContactSupportOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    circleIcon: {
        width: "36px",
        height: "36px",
        "&:hover": {
            cursor: "pointer",
        },
        "&:focus": {
            cursor: "pointer",
        },
        marginRight: "8px",
    },
    adminTitle: {
        marginTop: "32px",
        marginBottom: "52px",
        fontSize: "32px",
        textAlign: "center",
        fontWeight: 700,
    },
    addSection: {
        margin: "16px auto",
        display: "flex",
        alignItems: "center",
    },
    ckeditorSize: {
        "&>div>div:nth-of-type(2)>div": {
            height: '150px',
        }
    }
});

function Admin() {
    const classes = useStyles();
    const [editorData, setEditorData] = React.useState("");
    const [openDialog, setOpenDialog] = React.useState(false);
    const [blogs, setBlogs] = React.useState([]);
    const [reload, setReload] = React.useState(false);
    // let rows = [];

    function createData(title, createdDate, updateBlog, deleteBlog) {
        return { title, createdDate, updateBlog, deleteBlog };
    }

    async function fetchBlogs() {
        try {
            const res = await axios.get("http://localhost:9000/blog");
            const data = res.data;
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    async function createBlog() {
        try {
            const res = await axios.post("http://localhost:9000/blog/post", {
                title: "This is the 1st blog",
                content: "Welcome to my blog page",
                dob: new Date(Date.now())
            });
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteBlog(id) {
        try {
            const res = await axios.delete(`http://localhost:9000/blog/delete/${id}`);
            setReload(prev => !prev);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    async function updateBlog() {
        try {
            const res = await axios.put("http://localhost:9000/blog/update/2", {
                title: "This is a 3rd page",
                content: "Hello",
                dob: new Date(Date.now())
            });
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    React.useEffect(() => {
        fetchBlogs().then(result => setBlogs(result));
    }, [reload]);

    const handleDelete = (id) => {
        deleteBlog(id);
    }

    const handleUpdate = () => {
        updateBlog();
        setReload(prev => !prev);
    }

    const handleToggleDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setEditorData("");
    }


    const rows = [];
    blogs.length > 0 && blogs.map((blog) => {
        rows.push(createData(blog.title, blog.dob, <Button style={{ background: "green", color: "#FFFFFF" }} onClick={handleToggleDialog}>Update</Button>, <Button style={{ background: "red", color: "#FFFFFF" }} onClick={() => handleDelete(blog.id)}>Delete</Button>))
    })

    console.log(editorData);
    // console.log(editorData.props.children);

    return (
        <div style={{ width: "85%", margin: "0px auto" }}>
            <div className={classes.adminTitle}>Admin Page</div>
            {blogs.length > 0 && blogs && <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="center">Created Date</TableCell>
                            <TableCell align="center">Update</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.title}>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="center">{row.createdDate}</TableCell>
                                <TableCell align="center">{row.updateBlog}</TableCell>
                                <TableCell align="center">{row.deleteBlog}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>}
            <div className={classes.addSection}>
                <AddCircleIcon className={classes.circleIcon} onClick={handleToggleDialog} />
                <div>Add a Blog</div>
            </div>
            <Dialog
                open={openDialog}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Create/Update your blog here"}</DialogTitle>
                <DialogContent className={classes.ckeditorSize}>
                    {openDialog &&
                        <>
                            <TextField label="Title" style={{ marginBottom: "30px" }} />
                            <CKEditor
                                editor={ClassicEditor}
                                onChange={(event, editor) => {
                                    setEditorData(parser(editor.getData()));
                                }}
                            />
                        </>}
                    <div>
                        <div>Editor data down here</div>
                        {editorData}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Done
                    </Button>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Admin;