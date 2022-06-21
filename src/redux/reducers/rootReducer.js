import { combineReducers } from "redux";
import productsCrud from "./productsCrud";

const rootReducer = combineReducers({
        productsOpp:productsCrud
})
export default rootReducer;