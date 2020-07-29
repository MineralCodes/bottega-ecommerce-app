import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import headerNavbar from "./headernavbarReducer.js";
import user from "./userReducer.js";

const rootReducer = combineReducers({
	form,
	headerNavbar,
	user,
});

export default rootReducer;
