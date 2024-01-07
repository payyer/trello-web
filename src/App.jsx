import { useColorScheme } from '@mui/material/styles'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Container from '@mui/material/Container'
// import useMediaQuery from '@mui/material/useMediaQuery'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme('system')
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="select-dark-light-mode"
          value={mode}
          onChange={handleChange}
          label="Mode"
        >
          <MenuItem value={'system'}>
            <Box sx={{ display: 'flex', alignItems:'center', gap: 1 }}>
              <SettingsBrightnessIcon/>System
            </Box>
          </MenuItem>

          <MenuItem value={'light'}>
            <Box sx={{ display: 'flex', alignItems:'center', gap: 1 }}>
              <LightModeIcon/>Light
            </Box>
          </MenuItem>

          <MenuItem value={'dark'}>
            <Box sx={{ display: 'flex', alignItems:'center', gap: 1 }}>
              <Brightness4Icon/>Dark
            </Box>
          </MenuItem>

        </Select>
      </FormControl>
    </div>
  )
}

function App() {
  return (
    <Container disableGutters={true} maxWidth={false} sx={{ height: '100vh' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'primary.light', height: (theme) => theme.trello.appBarHeight, width: '100%' }}>
        <ModeSelect/>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'primary.dark', height: (theme) => theme.trello.boardBarHeight, width: '100%' }}>
        Board bar
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'primary.main', height: (theme) => `calc(100vh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight} )`, width: '100%' }}>
        Contain
      </Box>
    </Container>
  )
}

export default App
