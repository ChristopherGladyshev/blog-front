import React from 'react';

import './AddForm.scss';


const AddForm = ({ title, createdAt, _id }) => {
    return (
        <form className="add-form">
            <div class="form-group">
                <div className="add-form__row">
                    <h4><label for="title">Title</label></h4>
                    <input
                        type="title"
                        className="form-control"
                        id="title"
                        placeholder="title"
                    />
                </div>
            </div>
            <div class="form-group">
                <div className="add-form__row">
                    <h4><label for="image">Image Url</label></h4>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        placeholder="Enter image URL"
                    />
                </div>
            </div>
            <div class="form-group">
                <div className="add-form__row">
                    <h4><label for="description">Description</label></h4>
                    <textarea
                        rows="8"
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="Enter text"
                    />
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}

export default AddForm;