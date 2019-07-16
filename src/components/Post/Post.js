import React from 'react';
import firebase from 'firebase';
import Load from '../Loader/Loader';

class Post extends React.Component {
    state = {
        postTitle: null,
        postText: null
    }
    getPostsData() {
        var database = firebase.database().ref(`posts/${this.props.match.params.id}`);
        database.on('value', (snapshot) => {
            const { title, text } = snapshot.val().data;
            this.setState({
                postTitle: title,
                postText: text
            });
        })
    }
    componentDidMount() {
        this.getPostsData();
    }
    render() {
        const { postTitle, postText } = this.state
        return (
                postTitle && postText  ?
                    <div className="ui container">
                        <h1>{postTitle}</h1>
                        <p>{postText}</p>
                    </div>:
                    <Load />
            
            
        )
    }

}

export default Post;