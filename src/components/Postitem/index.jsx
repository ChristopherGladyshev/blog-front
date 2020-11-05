import React from 'react';
import { Link } from 'react-router-dom';

import './Postitem.scss';


const PostItem = ({ title, createdAt, _id, onRemove }) => {
    return (
        <div className="post-item">
            <Link to={`/post/${_id}`}>
                <h2>{title}</h2>
            </Link>
            <p><i>Posted on {createdAt}</i></p>
            <div className="post-btn">
                <p><a href="javascript://" onClick={onRemove}>
                    Remove</a>
                </p>
                <p><Link to={`/post/${_id}/edit`}>Edit</Link></p>
            </div>
        </div>
    );
}

export default PostItem;