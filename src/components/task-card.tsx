import React from "react";
import { Task } from "../types/types";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

interface TaskCardProps {
  task: Task;
}

const formatDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        src={task.imageUrl}
        alt={task.title}
      />
      <CardContent
        sx={{ width: "100%" }}
      >
        <Stack
          direction={"row"}
        >
          <Typography flexGrow={1}>{task.title}</Typography>
          <Typography>{formatDate(task.dueDate)}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
