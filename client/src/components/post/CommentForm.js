import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addComment } from '../../redux/actions/postActions';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addComment(postId, { text });
    setText('');
  };

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Leave a comment</h3>
      </div>
      <form className='form my-1' onSubmit={event => handleSubmit(event)}>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Leave a comment'
          value={text}
          onChange={event => handleChange(event)}
          required
        ></textarea>
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);
