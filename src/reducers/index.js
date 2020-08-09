import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import headerNavbar from "./headernavbarReducer.js";
import user from "./userReducer.js";
import shop from "./shopReducer";

const rootReducer = combineReducers({
	form,
	headerNavbar,
	user,
	shop,
});

export default rootReducer;
