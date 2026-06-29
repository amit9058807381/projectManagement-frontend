import api from "@/Config/api";
import* as actionType from "./ActionType"

export const createComment=(commentData)=>{
    return async(dispatch)=>{
        dispatch({type:actionType.CREATE_COMMENT_REQUEST});
        try{
            const response=await api.post(
                `/api/comments`,
                commentData
            );
            console.log("comment created", response.data)
            dispatch({
                type:actionType.CREATE_COMMENT_SUCCESS,
                comment:response.data
            })
        }catch(error){
            console.log("error",error)
            dispatch({
                type:actionType.CREATE_COMMENT_FAILURE,
                error:error.message
            })
        }
    }
}

export const deleteComment=(commentId)=>{
    return async (dispatch)=>{
        dispatch({type:actionType.DELETE_COMMENT_REQUEST});
        try{
            await api.delete(
                `/api/comments/${commentId}`
            );
            dispatch({type:actionType.DELETE_COMMENT_SUCCESS,commentId});

        }catch(error){
            console.log("error",error)
            dispatch({
                type:actionType.DELETE_COMMENT_FAILURE,
                error:error.message
            })
        }
    }
}

export const fetchComments=(issueId)=>{
    return async (dispatch)=>{
        dispatch({type:actionType.FETCH_COMMENTS_REQUEST});
        try{
            const response=await api.get(
                `/api/comments/${issueId}`
            );
            dispatch({
                type:actionType.FETCH_COMMENTS_SUCCESS,
                comment:response.data,
            })
            console.log("fetched comment",response.data);
        }catch(error){
            console.log("error",error.message)
            dispatch({
                type:actionType.FETCH_COMMENTS_FAILURE,
                error:error.message,
            })
        }
    }
}