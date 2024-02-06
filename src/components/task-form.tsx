import { Button, Stack, TextField, Typography } from "@mui/material";

export const TaskForm: React.FC = () => {
  return (
    <Stack p={3} rowGap={2}>
      <Typography fontSize={20} fontWeight={'bold'}>Create New Task</Typography>
      <TextField fullWidth label="Title" />
      <TextField fullWidth type="date" label="Due date" InputLabelProps={{ shrink: true}} />
      <TextField fullWidth type="file" label="Image" InputLabelProps={{ shrink: true}} />
      <Button fullWidth variant="contained">
        Create
      </Button>
  </Stack>
  );
};
