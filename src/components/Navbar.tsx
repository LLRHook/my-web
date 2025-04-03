import { Box, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      px={4}
      py={2}
      zIndex={1000}
    >
      <Box maxW="container.lg" mx="auto" display="flex" justifyContent="flex-end">
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          variant="ghost"
          colorScheme="blue"
          _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
        />
      </Box>
    </Box>
  )
}

export default Navbar 