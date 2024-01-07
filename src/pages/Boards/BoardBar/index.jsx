import { Box } from '@mui/material'

function BoardBar() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'primary.dark', height: (theme) => theme.trello.boardBarHeight, width: '100%' }}>
      Board bar
    </Box>
  )
}

export default BoardBar