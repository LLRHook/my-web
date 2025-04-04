import { Box, Container, Heading, VStack, Text, Image, Flex, SimpleGrid, useColorModeValue, Button, Link, HStack, Tag } from '@chakra-ui/react'
import { FaDownload, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Skills from '../components/Skills'
import profilePic from '../assets/IMG_6184.png'
import resumePdf from '../assets/Victor_Ivanov_Resume_2025.pdf'

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      p={6}
      bg={cardBg}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
      boxShadow="lg"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
    >
      <VStack align="start" spacing={4}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack wrap="wrap" spacing={2}>
          {technologies.map((tech) => (
            <Tag key={tech} colorScheme="blue" size="sm">
              {tech}
            </Tag>
          ))}
        </HStack>
        <HStack spacing={4}>
          {githubUrl && (
            <Link href={githubUrl} isExternal>
              <Button size="sm" leftIcon={<FaGithub />} variant="outline">
                GitHub
              </Button>
            </Link>
          )}
          {liveUrl && (
            <Link href={liveUrl} isExternal>
              <Button size="sm" leftIcon={<FaExternalLinkAlt />} variant="outline">
                Live Demo
              </Button>
            </Link>
          )}
        </HStack>
      </VStack>
    </Box>
  )
}

const Home = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  const cardBg = useColorModeValue('white', 'gray.800')
  const gradientBg = useColorModeValue(
    'linear-gradient(180deg, rgba(237, 242, 247, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%)',
    'linear-gradient(180deg, rgba(26, 32, 44, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%)'
  )
  const patternBg = useColorModeValue(
    "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23EDF2F7' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232D3748' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E"
  )

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Chakra UI, featuring dark mode support, interactive skill cards, and a clean design. Showcases my professional experience and technical skills with smooth animations and intuitive navigation.",
      technologies: ["React", "TypeScript", "Chakra UI", "Framer Motion"],
      githubUrl: "https://github.com/LLRHook/my-web",
      liveUrl: window.location.href
    },
    {
      title: "Image to PDF Converter",
      description: "A privacy-focused web application that converts images to PDF files entirely in the browser. Features include drag & drop support, automatic image compression, mobile-friendly interface, and offline functionality. No server uploads required - all processing happens locally for maximum privacy and speed.",
      technologies: ["React", "pdf-lib", "browser-image-compression", "GitHub Actions"],
      githubUrl: "https://github.com/LLRHook/image-to-pdf-converter",
      liveUrl: "https://LLRHook.github.io/image-to-pdf-converter"
    }
  ]

  return (
    <Box
      bg={bgColor}
      color={textColor}
      minH="100vh"
      backgroundImage={patternBg}
      backgroundRepeat="repeat"
      py={8}
    >
      <Container maxW="container.lg">
        <VStack spacing={16} align="stretch">
          {/* About Section */}
          <Box id="about">
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align="center"
              justify="center"
              gap={8}
              bg={gradientBg}
              borderRadius="xl"
              backdropFilter="blur(8px)"
              boxShadow="xl"
              p={8}
            >
              <Box
                borderRadius="full"
                overflow="hidden"
                boxSize={{ base: '200px', md: '250px' }}
                boxShadow="2xl"
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
              <VStack align={{ base: 'center', md: 'start' }} spacing={4}>
                <Heading as="h1" size="2xl">Victor Ivanov</Heading>
                <Text fontSize="xl" color={useColorModeValue('gray.600', 'gray.400')}>
                  Computer Science & Economics
                </Text>
                <Text fontSize="lg" maxW="500px" textAlign={{ base: 'center', md: 'left' }}>
                  Passionate software engineer with expertise in full-stack development,
                  cloud technologies, and a strong foundation in computer science principles.
                </Text>
                <Button
                  as="a"
                  href={resumePdf}
                  download="Victor_Ivanov_Resume.pdf"
                  colorScheme="blue"
                  size="lg"
                  leftIcon={<FaDownload />}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  transition="all 0.2s"
                >
                  Download Resume
                </Button>
              </VStack>
            </Flex>
          </Box>

          {/* Skills Section */}
          <Box id="skills">
            <Box
              bg={gradientBg}
              borderRadius="xl"
              p={6}
              boxShadow="lg"
              backdropFilter="blur(8px)"
            >
              <Heading as="h2" size="xl" mb={6}>Technical Skills</Heading>
              <Skills />
            </Box>
          </Box>

          {/* Projects Section */}
          <Box id="projects">
            <Box
              bg={gradientBg}
              borderRadius="xl"
              p={6}
              boxShadow="lg"
              backdropFilter="blur(8px)"
            >
              <Heading as="h2" size="xl" mb={6}>Featured Projects</Heading>
              <SimpleGrid columns={[1, 1, 2]} spacing={6}>
                {projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                  />
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home 