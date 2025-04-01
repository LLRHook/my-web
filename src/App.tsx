import { ChakraProvider, Box } from '@chakra-ui/react'
import Home from './pages/Home'

function App() {
  return (
    <ChakraProvider>
      <Box minH="100vh">
        <Home />
      </Box>
    </ChakraProvider>
  )
}

export default App
