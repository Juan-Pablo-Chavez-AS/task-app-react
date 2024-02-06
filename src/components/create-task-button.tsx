import { Add } from "@mui/icons-material";
import { Button, Dialog } from "@mui/material";
import { useState } from "react";
import { TaskForm } from "./task-form";

export const CreateTaskButton: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        sx={{
          width: "10%",
          alignSelf: "end"
        }}
        onClick={() => setOpen(true)}
        variant="contained"
        color="primary"
        startIcon={<Add />}
      >
        Create Task
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xs"
      >
        <TaskForm />
      </Dialog>
    </>
  );
};
