import { createStore, combineReducers } from "redux";
import { All_reducer } from "./Reducer";
import { single_reducer } from "./Reducer";

const rootReducer = combineReducers({
  all: All_reducer,
  single: single_reducer,
});
const store = createStore(rootReducer);
export default store;
