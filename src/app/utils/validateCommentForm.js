import React from "react";

export const validateCommentForm = (values) => {
    const error = {};
    if(!values.rating){
        error.rating = "required"
    }
     if(values.author.length < 2){
        error.author = "Must be at least 2 characters"
    }else if(values.author.length > 15){
        error.author = "Must be 15 characters or less"
    }
    return error;
}