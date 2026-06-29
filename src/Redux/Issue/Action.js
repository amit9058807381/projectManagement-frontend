import api from "@/Config/api";
import * as actionType from "./ActionType"

export const fetchIssues=(id)=>{
    return async (dispatch)=>{
        dispatch({type:actionType.FETCH_ISSUES_REQUEST});
        try{
            const response=await api.get(`/api/issues/project/${id}`);
            console.log("fetch Issue",response.data );
            dispatch({
                type:actionType.FETCH_ISSUES_SUCCESS,
                issues:response.data,
            });
        }catch(error){
            console.log("error",error)
            dispatch({
                type:actionType.FETCH_ISSUES_FAILURE,
                error:error.message
            })
        }
    }
}


export const fetchIssueById=(id)=>{
    return async (dispatch)=>{
        dispatch({type:actionType.FETCH_ISSUES_BY_ID_REQUEST});
        try{
            const response=await api.get(`/api/issues/${id}`);
            console.log("fetch issues by id",response.data);
            dispatch({
                type:actionType.FETCH_ISSUES_BY_ID_SUCCESS,
                issues:response.data,
            })
        }catch(error){
            console.log("error",error)
            dispatch({
                type:actionType.FETCH_ISSUES_BY_ID_FAILURE,
                error:error.message,
            })
        }

    }
}

export const updateIssueStatus=({id,status})=>{
    return async (dispatch)=>{
        dispatch({type:actionType.UPDATE_ISSUE_STATUS_REQUEST})
        try{
            const response=await api.put(`/api/issues/${id}/status/${status}`);
            console.log("update issue Status",response.data)
            dispatch({
                type:actionType.UPDATE_ISSUE_STATUS_SUCCESS,
                issues:response.data,
            })
        }catch(error){
            dispatch({
                type:actionType.UPDATE_ISSUE_STATUS_FAILURE,
                error:error.message,
            })
        }
    }
}

export const assignedUserToIssue=({issueId,userId})=>{
    return async (dispatch)=>{
        dispatch({type:actionType.ASSIGNED_ISSUE_TO_USER_REQUEST});
        try{
            const response=await api.put(`/api/issues/${issueId}/assignee/${userId}`)
            console.log("assigned issue",response.data)
            dispatch({
                type:actionType.ASSIGNED_ISSUE_TO_USER_SUCCESS,
                issue:response.data,
            })
        }catch(error){
            dispatch({
                type:actionType.ASSIGNED_ISSUE_TO_USER_FAILURE,
                error:error.message,
            })
        }
    }
}

export const createIssue = (issueData) => {
    return async (dispatch) => {
        dispatch({
            type: actionType.CREATE_ISSUE_REQUEST,
        });

        try {
            const response = await api.post(
                "/api/issues",
                issueData
            );

            console.log("create issue", response.data);

            dispatch({
                type: actionType.CREATE_ISSUE_SUCCESS,
                issue: response.data,
            });
        } catch (error) {
            console.log("error", error);
            console.log("Response Data:", error.response?.data);
    console.log("Status:", error.response?.status);

            dispatch({
                type: actionType.CREATE_ISSUE_FAILURE,
                error: error.message,
            });
        }
    };
};

export const deleteIssue = (issueId) => {
    return async (dispatch) => {
        dispatch({
            type: actionType.DELETE_ISSUE_REQUEST,
        });

        try {
            const response = await api.delete(`/api/issues/${issueId}`);

            console.log("delete issue", response.data);

            dispatch({
                type: actionType.DELETE_ISSUE_SUCCESS,
                issueId,
            });
        } catch (error) {
            console.log("error", error);
            console.log("Response Data:", error.response?.data);
            console.log("Status:", error.response?.status);

            dispatch({
                type: actionType.DELETE_ISSUE_FAILURE,
                error: error.message,
            });
        }
    };
};