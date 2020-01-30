import React from "react";
import Post from "./Post";
import Grid from "@material-ui/core/Grid";
import mocks from './mocks';

export default class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/posts/`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                })
            });
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <Grid container spacing={4}>
                    {items.map(item => (
                        <Post key={item.id} {...item} />
                    ))}
                </Grid>
            );
        }
    }
}
