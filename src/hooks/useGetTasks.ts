import { useEffect, useState } from "react";
import { taskService } from "../api/task.service";

export const useGetTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const reFetchTasks = async () => {
    setIsLoading(true);
    await fetchTasks();
  };

  const fetchTasks = async () => {
    try {
      const response = await taskService.getTasks();
      setTasks(response.data);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  return { tasks, isLoading, error, reFetchTasks };
};
