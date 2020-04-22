import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../store/actions/actions';

const CommentForm = props => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');

    const handleChangeComment = e => {
        setComment(e.target.value);
    };

    const handleChangeName = e => {
        setName(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(2);
        dispatch(addComment(props.id, name, comment));
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={handleChangeName}
                />
                <textarea
                    value={comment}
                    onChange={handleChangeComment}
                ></textarea>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default CommentForm;
