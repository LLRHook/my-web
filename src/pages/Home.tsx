import { Box, Container, Heading, VStack, Text, SimpleGrid, useColorModeValue } from '@chakra-ui/react'

const Home = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'gray.100')

  return (
    <Box bg={bgColor} color={textColor} minH="100vh" py={10}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          {/* Header Section */}
          <Box textAlign="center" py={10}>
            <Heading as="h1" size="2xl" mb={2}>Victor Ivanov</Heading>
            <Text fontSize="xl">Computer Science & Economics</Text>
          </Box>

          {/* Education Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>Education</Heading>
            <Box p={4} borderRadius="md" borderWidth="1px">
              <Heading as="h3" size="md">University of Maryland</Heading>
              <Text>B.S. in Computer Science, Minor in Economics</Text>
              <Text>Baltimore, MD</Text>
            </Box>
          </Box>

          {/* Certifications Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>Certifications</Heading>
            <SimpleGrid columns={[1, 2]} spacing={4}>
              <Box p={4} borderRadius="md" borderWidth="1px">
                <Text fontWeight="bold">AWS Cloud Certification</Text>
                <Text>Pursuing</Text>
              </Box>
              <Box p={4} borderRadius="md" borderWidth="1px">
                <Text fontWeight="bold">Oracle Certified Professional</Text>
                <Text>Java SE</Text>
              </Box>
            </SimpleGrid>
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
                <Box key={course} p={3} borderRadius="md" borderWidth="1px">
                  <Text>{course}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home 