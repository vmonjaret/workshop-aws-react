import React from 'react';
import PostList from "./PostList";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Blog
                    </Typography>
                </Toolbar>
            </AppBar>
            <PostList/>
        </div>
    );
}

export default App;
