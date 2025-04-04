import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <Box>
      <Navbar />
      <Home />
      <BackToTop />
    </Box>
  )
}

export default App
