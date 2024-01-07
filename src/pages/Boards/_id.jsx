// Board detail
import { Container } from '@mui/material'
import AppBar from '../../components/AppBar'
import BoardBar from './BoardBar'
import BoardBarContent from './BoardContent'

function Board() {
  return (
    <Container disableGutters={true} maxWidth={false} sx={{ height: '100vh' }}>

      <AppBar/>

      <BoardBar/>

      <BoardBarContent/>

    </Container>
  )
}

export default Board