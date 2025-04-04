import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        _hover: {
          transform: 'translateY(-2px)',
          transition: 'transform 0.2s ease'
        },
        _active: {
          transform: 'translateY(0)',
          transition: 'transform 0.1s ease'
        }
      }
    }
  }
})

export default theme 