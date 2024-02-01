import { Paper, Stack } from "@mui/material";
import { TaskCard } from "../components/task-card";
import { useGetTasks } from "../hooks/useGetTasks";
import { Task } from "../types/types";

export const TaskList = () => {
  const { tasks, isLoading, error } = useGetTasks();
  return (
    <>
      <h1>Task List</h1>
      <Stack
        component={Paper}
        width={'80%'}
        spacing={2}
        p={1.5}
        m={1}
        borderRadius={5}
      >
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {'An error occurred'}</p>}
        {(!isLoading && !error) && tasks.map((task: Task) => (
          <TaskCard key={task.id} task={task} />
          ))}
      </Stack>
    </>
  );
};
