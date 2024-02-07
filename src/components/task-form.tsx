import { Button, CardMedia, Stack, TextField, Typography } from "@mui/material";
import { useCreateTask } from "../hooks/useCreateTask";
import { useTaskFormFields } from "../hooks/useTaskFormFields";

interface TaskFormProps {
  successAction: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ successAction }) => {
  const { createTask } = useCreateTask(successAction);
  const {
    dueDate,
    handleDueDateChange,
    title,
    handleTitleChange,
    imageRef,
    imageUrl,
    isValidImage,
    fileTouched,
    handleImageChange,
  } = useTaskFormFields();

  const handleSubmit = () => {
    if (!isValidImage) {
      return;
    }
    createTask({
      title: title,
      dueDate: dueDate,
      image: imageRef.current?.files?.[0],
      isCompleted: false,
      userId: '1',
    });
  };

  return (
    <Stack p={3} rowGap={2}>
      <Typography fontSize={20} fontWeight={"bold"}>
        Create New Task
      </Typography>
      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <TextField
        fullWidth
        type="date"
        label="Due date"
        InputLabelProps={{ shrink: true }}
        value={dueDate}
        onChange={handleDueDateChange}
      />
      <TextField
        fullWidth
        type="file"
        label="Image"
        InputLabelProps={{ shrink: true }}
        inputRef={imageRef}
        onChange={handleImageChange}
      />
      {!isValidImage && fileTouched && (
        <Typography color="error">Invalid image format</Typography>
      )}
      <CardMedia>
        {imageUrl && (
          <img src={imageUrl} alt="task" style={{ width: "100%" }} />
        )}
      </CardMedia>
      <Button fullWidth variant="contained" onClick={handleSubmit}>
        Create
      </Button>
    </Stack>
  );
};
