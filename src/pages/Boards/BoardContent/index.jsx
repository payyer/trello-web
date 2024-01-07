import { Box } from '@mui/material'

function BoardBarContent() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'primary.main', height: (theme) => `calc(100vh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight} )`, width: '100%' }}>
      Contain
    </Box>
  )
}

export default BoardBarContent