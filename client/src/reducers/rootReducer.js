import { combineReducers } from "redux";
import clientsReducer from './clientsReducer'
import staticReducer from './staticReducer'

const rootReducer = combineReducers({
  static: staticReducer,
  clients: clientsReducer
});

export default rootReducer;
