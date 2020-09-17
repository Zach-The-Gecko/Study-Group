import { combineReducers } from "redux";

import userReducer from "./user/user.reducer.js.js";

export default combineReducers({
  user: userReducer,
});
