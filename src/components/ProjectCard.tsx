import { Box, Heading, Text, Stack, Badge, Link, useColorModeValue, HStack } from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
}

const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      p={6}
      h="100%"
      bg={bgColor}
      border="1px"
      borderColor={borderColor}
      borderRadius="lg"
      transition="all 0.3s"
      position="relative"
      top="0"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: 'xl',
        borderColor: 'teal.400',
      }}
    >
      <Stack spacing={4}>
        <Heading as="h3" size="md" transition="color 0.2s" _hover={{ color: 'teal.400' }}>
          {title}
        </Heading>
        
        <Text color={useColorModeValue('gray.600', 'gray.400')}>
          {description}
        </Text>

        <Stack direction="row" flexWrap="wrap" spacing={2}>
          {technologies.map((tech) => (
            <Badge
              key={tech}
              colorScheme="teal"
              borderRadius="full"
              px={3}
              py={1}
              transition="all 0.2s"
              _hover={{
                transform: 'scale(1.05)',
                bg: 'teal.500',
                color: 'white'
              }}
            >
              {tech}
            </Badge>
          ))}
        </Stack>

        <HStack spacing={4}>
          <Link
            href={githubUrl}
            isExternal
            display="inline-flex"
            alignItems="center"
            color={useColorModeValue('gray.600', 'gray.400')}
            _hover={{ color: 'teal.400' }}
            transition="all 0.2s"
          >
            <FaGithub size="20px" />
            <Text ml={2}>GitHub</Text>
          </Link>
          
          {liveUrl && (
            <Link
              href={liveUrl}
              isExternal
              display="inline-flex"
              alignItems="center"
              color={useColorModeValue('gray.600', 'gray.400')}
              _hover={{ color: 'teal.400' }}
              transition="all 0.2s"
            >
              <FaExternalLinkAlt size="18px" />
              <Text ml={2}>Live Demo</Text>
            </Link>
          )}
        </HStack>
      </Stack>
    </Box>
  )
}

export default ProjectCard 