import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { projectReducer } from "./Project/Reducer";
import ChatReducer from "./Chat/Reducer";
import commentReducer from "./Comment/Reducer";
import issueReducer from "./Issue/Reducer";


const rootReducer=combineReducers({
    auth:authReducer,
    project:projectReducer,
    chat:ChatReducer,
    comment:commentReducer,
    issue:issueReducer,

})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
