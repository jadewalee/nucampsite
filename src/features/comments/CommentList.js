import React from 'react'
import {COMMENTS} from '../../app/shared/COMMENTS';
import CommentForm from './CommentForm';


const CommentList = ({COMMENTS}) =>{
  return (
    <>
        {COMMENTS.map((COMMENTS) => <CommentForm campsiteId={campsiteId} /> )}
    </>
  )
}

export default CommentList