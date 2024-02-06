import React from "react";
import { Task } from "../types/types";
import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

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
        <Grid
          container
          alignItems={'center'}
        >
          <Grid
            item
            md={7}
          >
            <Typography flexGrow={1}>{task.title}</Typography>
          </Grid>
          <Grid
            item
            md={2}
          >
            <Typography>{task.isCompleted ? 'completed' : 'not completed'}</Typography>
          </Grid>
          <Grid
            item
            md={2}
          >
            <Typography>{formatDate(task.dueDate)}</Typography>
          </Grid>
          <Grid
            item
            md={0.5}
          >
            <IconButton>
              <Edit />
            </IconButton>
          </Grid>
          <Grid
            item
            md={0.5}
          >
            <IconButton>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
