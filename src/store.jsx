import { createStore } from "redux";
import { IncrementReducer } from "./Components/Redux/Reducer/Reducer";
export const store = createStore(IncrementReducer);
