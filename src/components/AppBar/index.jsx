import { Box } from '@mui/material'
import ModeSelect from '../ModeSlect'

function AppBar() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'primary.light', height: (theme) => theme.trello.appBarHeight, width: '100%' }}>
      <ModeSelect/>
    </Box>
  )
}

export default AppBar