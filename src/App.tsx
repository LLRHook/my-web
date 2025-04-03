import { ChakraProvider, Box } from '@chakra-ui/react'
import { theme } from '@chakra-ui/theme'
import Home from './pages/Home'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const customTheme = {
  ...theme,
  config,
}

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box minH="100vh">
        <Home />
      </Box>
    </ChakraProvider>
  )
}

export default App
