import { combineReducers } from "redux";
import userReducer from './userReducer'
import staticReducer from './staticReducer'

const rootReducer = combineReducers({
  static: staticReducer,
  users: userReducer
});

export default rootReducer;
