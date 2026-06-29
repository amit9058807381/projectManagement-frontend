
import { ACCEPT_INVITATION_REQUEST, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, FETCH_PROJECT_BY_ID_REQUEST, FETCH_PROJECT_BY_ID_SUCCESS, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, INVITE_TO_PROJECT_REQUEST, SEARCH_PROJECT_SUCCESS } from "./ActionType";

const initialState={
    projects:[],
    loading:false,
    error:null,
    projectDetails:null,
    searchProjects:[],
};

export const projectReducer=(state=initialState,action)=>{
    switch (action.type){

        case FETCH_PROJECTS_REQUEST:
        case CREATE_PROJECT_REQUEST:
        case DELETE_PROJECT_REQUEST:
        case FETCH_PROJECT_BY_ID_REQUEST:
        case ACCEPT_INVITATION_REQUEST:
        case INVITE_TO_PROJECT_REQUEST:
            return{
                ...state,
                loading:true,
                error:null,
            }
           
        case FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                loading:false,
                projects:action.projects,
                error:null,
            };    
        
        case SEARCH_PROJECT_SUCCESS:
            return {
                ...state,
                loading:false,
                searchProjects:action.payload,
                error:null,
            }
           
        case CREATE_PROJECT_SUCCESS:
            return{
                ...state,
                loading:false,
                projects:[...state.projects,action.projects],
                error:null,
            }  
            
        case FETCH_PROJECT_BY_ID_SUCCESS:
            return{
                ...state,
                loading:false,
                projectDetails:action.projects,
                error:null,
            }  

        case DELETE_PROJECT_SUCCESS:
            return{
                ...state,
                loading:false,
                projects:state.projects.filter(
                    (project)=>project.id !== action.projectId
                ),
                error:null,
            }    
        default:
            return state;      
    }

}