import { Box, Button, Chip } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLE = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: 5,
  borderRadius: '4px',
  '&. MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover' :{
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      height: (theme) => theme.trello.boardBarHeight,
      width: '100%',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="AnhHocFe"
          clickable
        />
        <Chip
          sx={{
            color: 'primary.main',
            bgcolor: 'white',
            border: 'none',
            borderRadius: '4px',
            '&. MuiSvgIcon-root': {
              color: 'primary.main'
            },
            '&:hover' :{
              bgcolor: 'primary.50'
            }
          }}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />

        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to Goolge Drive"
          clickable
        />

        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />

        <Chip
          sx={MENU_STYLE}
          icon={<FilterAltIcon />}
          label="Filter"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon/>}>Invite</Button>
        <AvatarGroup sx={{
          '& .MuiAvatar-root': {
            width: 34,
            height: 34,
            fontSize: 16
          }
        }}
        max={4}>
          <Avatar alt="AnhHocFE" src="https://img.freepik.com/premium-photo/cute-asian-girl-kawaii-anime-avatar-ai-generative-art_225753-9233.jpg" />
          <Avatar alt="AnhHocFE" src="https://imgv3.fotor.com/images/gallery/girl-mega-anime-avatar-with-black-long-hair-made-in-fotor-anime-avatar-creator.jpg" />
          <Avatar alt="AnhHocFE" src="https://cdn.pixabay.com/photo/2023/08/24/08/20/avatar-8210116_1280.jpg" />
          <Avatar alt="AnhHocFE" src="https://img.freepik.com/premium-photo/cute-asian-girl-kawaii-anime-avatar-ai-generative-art_225753-9233.jpg" />
          <Avatar alt="AnhHocFE" src="https://img.freepik.com/premium-photo/cute-asian-girl-kawaii-anime-avatar-ai-generative-art_225753-9233.jpg" />
          <Avatar alt="AnhHocFE" src="https://img.freepik.com/premium-photo/cute-asian-girl-kawaii-anime-avatar-ai-generative-art_225753-9233.jpg" />
          <Avatar alt="AnhHocFE" src="https://img.freepik.com/premium-photo/cute-asian-girl-kawaii-anime-avatar-ai-generative-art_225753-9233.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar