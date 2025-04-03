import { Box, Container, Heading, VStack, Text, Image, Flex, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import Skills from '../components/Skills'
import Navbar from '../components/Navbar'
import profilePic from '../assets/IMG_6184.png'

const Home = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <>
      <Navbar />
      <Box bg={bgColor} color={textColor} minH="100vh" pt="60px" pb={10}>
        <Container maxW="container.lg">
          <VStack spacing={8} align="stretch">
            {/* Hero Section */}
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align="center"
              justify="center"
              py={10}
              gap={8}
            >
              <Box
                borderRadius="full"
                overflow="hidden"
                boxSize={{ base: '200px', md: '250px' }}
                boxShadow="xl"
                bg={cardBg}
              >
                <Image
                  src={profilePic}
                  alt="Victor Ivanov"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </Box>
              <VStack align={{ base: 'center', md: 'start' }} spacing={3}>
                <Heading as="h1" size="2xl">Victor Ivanov</Heading>
                <Text fontSize="xl" color={useColorModeValue('gray.600', 'gray.400')}>
                  Computer Science & Economics
                </Text>
                <Text fontSize="lg" maxW="500px" textAlign={{ base: 'center', md: 'left' }}>
                  Passionate software engineer with expertise in full-stack development,
                  cloud technologies, and a strong foundation in computer science principles.
                </Text>
              </VStack>
            </Flex>

            {/* Skills Section */}
            <Skills />

            {/* Education Section */}
            <Box>
              <Heading as="h2" size="xl" mb={4}>Education</Heading>
              <Box p={4} borderRadius="md" borderWidth="1px" bg={cardBg}>
                <Heading as="h3" size="md">University of Maryland</Heading>
                <Text>B.S. in Computer Science, Minor in Economics</Text>
                <Text>Baltimore, MD</Text>
              </Box>
            </Box>

            {/* Certifications Section */}
            <Box>
              <Heading as="h2" size="xl" mb={4}>Certifications</Heading>
              <Box p={4} borderRadius="md" borderWidth="1px" bg={cardBg}>
                <Text fontWeight="bold">AWS Cloud Certification</Text>
                <Text>Pursuing</Text>
              </Box>
              <Box p={4} mt={4} borderRadius="md" borderWidth="1px" bg={cardBg}>
                <Text fontWeight="bold">Oracle Certified Professional</Text>
                <Text>Java SE</Text>
              </Box>
            </Box>

            {/* Courses Section */}
            <Box>
              <Heading as="h2" size="xl" mb={4}>Relevant Coursework</Heading>
              <SimpleGrid columns={[2, 3, 4]} spacing={4}>
                {[
                  'Artificial Intelligence',
                  'Data Structures',
                  'Computer Architecture',
                  'Linear Algebra',
                  'Multivariable Calculus',
                  'Operating Systems',
                  'Cyber Security',
                  'Machine Learning',
                  'Databases'
                ].map((course) => (
                  <Box key={course} p={3} borderRadius="md" borderWidth="1px" bg={cardBg}>
                    <Text>{course}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  )
}

export default Home 