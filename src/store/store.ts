import { createStore, combineReducers } from "redux";
import { taskReducer } from "./reducers/taskReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
