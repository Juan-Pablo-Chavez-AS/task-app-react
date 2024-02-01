import { Stack, Typography } from '@mui/material'
import { TaskList } from './pages/task-list'

function App() {
  return (
    <Stack alignItems={'center'} >
      <Typography fontSize={32} fontWeight={'bold'}>Task List Application</Typography>
      <TaskList />
    </Stack>
  )
}

export default App
