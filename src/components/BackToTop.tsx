import { IconButton } from '@chakra-ui/react'
import { FaArrowUp } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <IconButton
          aria-label="Back to top"
          icon={<FaArrowUp />}
          onClick={scrollToTop}
          position="fixed"
          bottom="4"
          right="4"
          colorScheme="teal"
          size="lg"
          borderRadius="full"
          opacity="0.8"
          _hover={{
            opacity: 1,
            transform: 'translateY(-2px)'
          }}
          transition="all 0.2s"
        />
      )}
    </>
  )
}

export default BackToTop 