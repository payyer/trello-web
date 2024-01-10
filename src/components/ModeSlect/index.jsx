import { Box, FormControl, InputLabel, MenuItem, Select, useColorScheme } from '@mui/material'
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
      <FormControl sx={{ minWidth: '120px' }} size="small" >
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

export default ModeSelect