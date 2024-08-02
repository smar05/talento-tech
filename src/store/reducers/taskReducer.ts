const initialState = {
  tasks: [] as string[],
};

type Action =
  | { type: "ADD_TASK"; payload: string }
  | { type: "REMOVE_TASK"; payload: string };

export const taskReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task !== action.payload),
      };
    default:
      return state;
  }
};
