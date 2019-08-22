import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import accountReducer from "./accountReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  plaid: accountReducer
});