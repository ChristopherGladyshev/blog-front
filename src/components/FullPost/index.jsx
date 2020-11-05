import React from 'react';
import { Link } from "react-router-dom";

import './FullPost.scss';


const FullPost = ({ createdAt }) => {
    return (
        <div className="full-posts">
            <div className="post-btn">
                <p className="full-posts__text"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    aspernatur enim tempora exercitationem, iste, libero sapiente sed
                    optio numquam odit, mollitia
                    incidunt iure saepe aperiam. Eaque architecto quas vero reiciendis!
                </p>
            </div>
            <p className="full-posts__details"><i>Posted on {createdAt}</i></p>
            <Link to="/" >
                <button type="button" className="btn btn-primary">
                Add posts
                </button>
            </Link>
        </div>
    );
}

export default FullPost;