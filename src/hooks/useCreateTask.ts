import { useState } from "react";
import { taskService } from "../api/task.service";
import { Task } from "../types/types";

export const useCreateTask = (successAction: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const createTask = async (task: Task) => {
    setIsLoading(true);
    try {
      await taskService.createTask(task);
      setError(false);
      successAction();
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { createTask, isLoading, error };
};
