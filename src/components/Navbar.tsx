import { Box, Flex, Button, useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('white', 'gray.800')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={100}
      bg={bgColor}
      px={4}
      py={2}
      borderBottom="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      backdropFilter="blur(8px)"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="6xl" mx="auto">
        <Flex gap={4}>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('about')}
            _hover={{ color: 'teal.500' }}
          >
            About
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('skills')}
            _hover={{ color: 'teal.500' }}
          >
            Skills
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('projects')}
            _hover={{ color: 'teal.500' }}
          >
            Projects
          </Button>
        </Flex>

        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          variant="ghost"
          _hover={{
            transform: 'rotate(360deg)',
            transition: 'transform 0.6s ease-in-out'
          }}
        />
      </Flex>
    </Box>
  )
}

export default Navbar 