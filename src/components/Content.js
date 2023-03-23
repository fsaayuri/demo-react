import Box from '@mui/material/Box'
import Alert from './Alert'
import SampleUseState from './SampleUseState';

const Content = () => {

  return (
    <Box sx={{
      background: "#EEE",
      width: "100%",
      padding: '15px'
    }}>
      <h1>Content</h1>

      <Alert type="success" >
        Deu certo Amem!
      </Alert>

      <Alert type="error">
        Deu Erro!
      </Alert>

      <Alert type="info">
        Info!
      </Alert>

      <Alert type="warning">
        Warning!
      </Alert>

      <SampleUseState></SampleUseState>
    </Box>
  )
}

export default Content