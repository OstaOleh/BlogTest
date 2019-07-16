import React from "react";
import firebase from 'firebase';
import Tabs from '../Tabs/Tabs';
import Posts from '../Posts/Posts';
import Load from '../Loader/Loader';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            category: [],
            filteredPosts: [],
            currentCategory: ''
        }
        this.tabClickHandler = this.tabClickHandler.bind(this)
    }
  
    componentDidMount() {
        console.log('mount')
        this.getPostsData();
    }
    getPostsData() {
        var database = firebase.database().ref('posts');
        database.on('value', (snapshot) => {
            const category = [];
            snapshot.val().forEach((post, i ,arr)=>{
                category.indexOf(post.category) === -1 ? category.push(post.category) : console.log("already exists");
            })
            this.setState({
                posts: snapshot.val(),
                category: category,
                currentCategory: category[0]
            }, () => { this.tabClickHandler(category[0])});
        })
    }

    tabClickHandler(cat) {
        const filteredPosts = this.state.posts.filter(post => post.category === cat);
        this.setState({
            filteredPosts: filteredPosts,
            currentCategory: cat
        });
    }

    render() {
        const { category, currentCategory, filteredPosts, posts } = this.state;
        return(
            <div className="ui container">
                <h1>Blog</h1>
                {
                    posts.length > 0 ? 
                    <>
                        <Tabs 
                            category={category}
                            currentCategory={currentCategory}
                            tabClickHandler={this.tabClickHandler}
                        />
                        <Posts 
                            posts={filteredPosts}
                        />
                    </>
                    : <Load />
                }
            </div>
        ) 
    }
};

export default Home;