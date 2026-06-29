import api from "@/Config/api";
import * as actionType from "./ActionType";

export const sendMessage=(messageData)=>{
    return async(dispatch)=>{
        dispatch({type:actionType.SEND_MESSAGE_REQUEST});
        try{
            const response=await api.post(
                "/api/messages/send",
                messageData
            );
            dispatch({
                type:actionType.SEND_MESSAGE_SUCCESS,
                message:response.data,
            })
            console.log("Send Message:",response.data)
        }catch(error){
            dispatch({
                type:actionType.SEND_MESSAGE_FAILURE,
                error:error.message
            });
        }
    }
}

export const fetchChatByProject=(projectId)=>{
    return async (dispatch)=>{
        dispatch({type:actionType.FETCH_CHAT_BY_PROJECT_REQUEST});
        try{
            const response=await api.get(
                `/api/projects/${projectId}/chat`
            );
            console.log("fetch chat",response.data)
            dispatch({
                type:actionType.FETCH_CHAT_BY_PROJECT_SUCCESS,
                chat:response.data,
            });
        }catch(error){
            console.log("error--",error)
            dispatch({
                type:actionType.FETCH_CHAT_BY_PROJECT_FAILURE,
                error:error.message,
            })
        }
    }
}

export const fetchChatMessage=(chatId)=>{
    console.log("chatId received =", chatId);
    return async (dispatch)=>{
        dispatch({
            type:actionType.FETCH_CHAT_MESSAGES_REQUEST});
            try{
                const response=await api.get(
                    `/api/messages/chat/${chatId}`
                );
                console.log("fetch message",response.data)
                dispatch({
                    type:actionType.FETCH_CHAT_MESSAGES_SUCCESS,
                    chatId,
                    messages:response.data,
                });
                console.log("Message Data:",response.data)

            }catch(error){
                
    console.log("STATUS =>", error.response?.status);
    console.log("DATA =>", error.response?.data);
    console.log("URL =>", error.config?.url);
    console.log("FULL =>", error);

                console.log("error--",error)
                dispatch({
                    type:actionType.FETCH_CHAT_MESSAGES_FAILURE,
                    error:error.message,             
                })
            }
    }
}