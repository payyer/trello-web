import Typography from '@mui/material/Typography'
import ModeSelect from '~/components/ModeSlect'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import WorkSpaces from './Menus/WorkSpaces'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import Box from '@mui/material/Box'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles'
import QueueIcon from '@mui/icons-material/Queue'

function AppBar() {
  return (
    <Box px={2}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1,
        overflowX: 'auto',
        height: (theme) => theme.trello.appBarHeight, width: '100%'
      }}>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            fontSize={'small'}
            sx={{ color: 'primary.main' }}
          />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }} >Trello</Typography>
        </Box>

        <Box sx={{ display: { xs:'none', md: 'flex', gap: 2 } }}>
          <WorkSpaces/>
          <Recent/>
          <Starred/>
          <Templates/>
          <Button variant="outlined" startIcon={<QueueIcon/>}>Create</Button>
        </Box>

      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id="outlined-search" label="Search..." type="search" size='small' sx={{ minWidth: '120px' }}/>
        <ModeSelect/>
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }} >
            <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }} >
            <HelpOutlineIcon sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip>

        <Profiles/>
      </Box>

    </Box>
  )
}

export default AppBar