export const addTask = (task: string) => ({
  type: "ADD_TASK",
  payload: task,
});

export const removeTask = (task: string) => ({
  type: "REMOVE_TASK",
  payload: task,
});
