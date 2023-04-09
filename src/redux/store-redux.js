import { combineReducers, legacy_createStore as createStore } from "redux";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";

const reducers = combineReducers({
  messagesPage: messageReducer,
  profile: profileReducer,
  navbar: navbarReducer,
});

let store = createStore(reducers);

export default store;
