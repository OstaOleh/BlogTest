import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({posts, postClickHandler}) => {
        return(  
        <ul className="ui container bottom attached segment active tab cards" style={{display: 'flex'}}>
            {posts.map((post, i) => {
                const { title, text } = post.data;
                return <Link to={`/posts/${post.id}`} key={post.id}>
                     <div className="ui card" style={{overflow: 'hidden', height: '295px'}}>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="description">{text}</div>
                        </div>
                    </div>
                </Link>
            })}
        </ul>
    )

}

export default Posts;