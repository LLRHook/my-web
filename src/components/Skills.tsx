import { Box, Heading, SimpleGrid, Text, VStack, useColorModeValue, Tabs, TabList, TabPanels, TabPanel, Tab, Progress, Tooltip, HStack } from '@chakra-ui/react'
import { FaJava, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaPython, FaDocker, FaAws } from 'react-icons/fa'
import { SiJquery, SiJira } from 'react-icons/si'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface SkillCardProps {
  icon: React.ElementType;
  name: string;
  proficiency: string;
  color: string;
  description?: string;
}

const getProficiencyPercentage = (proficiency: string): number => {
  switch (proficiency.toLowerCase()) {
    case 'advanced': return 90;
    case 'intermediate': return 70;
    case 'basic': return 50;
    default: return 60;
  }
}

const SkillCard = ({ icon: Icon, name, proficiency, color, description }: SkillCardProps) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const glowColor = `${color}33`
  const proficiencyPercentage = getProficiencyPercentage(proficiency)

  return (
    <Tooltip
      label={description || `${name} - ${proficiency} Level`}
      placement="top"
      hasArrow
    >
      <MotionBox
        p={4}
        bg={bgColor}
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="lg"
        position="relative"
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        _after={{
          content: '""',
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          right: '-2px',
          bottom: '-2px',
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          zIndex: -1,
          opacity: 0,
          transition: 'all 0.3s',
          borderRadius: 'lg',
        }}
        _hover={{
          borderColor: color,
          shadow: 'xl',
          _after: {
            opacity: 1,
          }
        }}
      >
        <VStack spacing={3}>
          <Icon size="3em" color={color} />
          <Text fontWeight="bold">{name}</Text>
          <Box w="100%">
            <HStack justify="space-between" mb={1}>
              <Text fontSize="sm" color="gray.500">{proficiency}</Text>
              <Text fontSize="sm" color="gray.500">{proficiencyPercentage}%</Text>
            </HStack>
            <Progress
              value={proficiencyPercentage}
              size="sm"
              colorScheme={proficiencyPercentage >= 80 ? 'green' : proficiencyPercentage >= 60 ? 'blue' : 'orange'}
              borderRadius="full"
              hasStripe
              isAnimated
            />
          </Box>
        </VStack>
      </MotionBox>
    </Tooltip>
  )
}

const Skills = () => {
  const categories = {
    'Frontend Development': [
      { icon: FaReact, name: 'React', proficiency: 'Advanced', color: '#61DAFB', description: 'Modern React with Hooks, Context API, and Redux' },
      { icon: FaHtml5, name: 'HTML5', proficiency: 'Advanced', color: '#E34F26', description: 'Semantic HTML, Accessibility, and SEO best practices' },
      { icon: FaCss3Alt, name: 'CSS3', proficiency: 'Advanced', color: '#1572B6', description: 'Modern CSS, Flexbox, Grid, and Animations' },
      { icon: SiJquery, name: 'jQuery', proficiency: 'Intermediate', color: '#0769AD', description: 'DOM manipulation and AJAX' },
    ],
    'Backend Development': [
      { icon: FaJava, name: 'Java', proficiency: 'Advanced', color: '#007396', description: 'Spring Boot, JPA, and Microservices' },
      { icon: FaPython, name: 'Python', proficiency: 'Advanced', color: '#3776AB', description: 'Django, Flask, and Data Analysis' },
      { icon: FaDatabase, name: 'SQL', proficiency: 'Advanced', color: '#336791', description: 'PostgreSQL, MySQL, and Database Design' },
    ],
    'Cloud & DevOps': [
      { icon: FaDocker, name: 'Docker', proficiency: 'Intermediate', color: '#2496ED', description: 'Containerization and Docker Compose' },
      { icon: FaAws, name: 'AWS', proficiency: 'Intermediate', color: '#FF9900', description: 'EC2, S3, Lambda, and CloudFormation' },
      { icon: SiJira, name: 'Jira', proficiency: 'Advanced', color: '#0052CC', description: 'Agile Project Management and Workflow Automation' },
    ],
  }

  const tabBg = useColorModeValue('white', 'gray.700')
  const selectedTabBg = useColorModeValue('blue.50', 'gray.600')
  const selectedTabBorder = useColorModeValue('blue.500', 'blue.200')
  const tabHoverBg = useColorModeValue('blue.50', 'gray.600')
  const gradientBg = useColorModeValue(
    'linear-gradient(180deg, rgba(237, 242, 247, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%)',
    'linear-gradient(180deg, rgba(26, 32, 44, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%)'
  )

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      py={10}
      bg={gradientBg}
      borderRadius="xl"
      boxShadow="lg"
      backdropFilter="blur(8px)"
      p={6}
    >
      <Heading as="h2" size="xl" mb={8} textAlign="center">
        Technical Skills
      </Heading>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              _selected={{ 
                bg: selectedTabBg,
                borderBottomColor: 'transparent',
                borderTopWidth: '3px',
                borderTopColor: selectedTabBorder,
                boxShadow: 'sm',
                fontWeight: 'bold',
                color: useColorModeValue('blue.600', 'blue.200')
              }}
              bg={tabBg}
              borderRadius="md"
              mx={1}
              transition="all 0.2s"
              _hover={{
                bg: tabHoverBg,
                color: useColorModeValue('blue.600', 'blue.200')
              }}
              boxShadow="sm"
              fontWeight="medium"
            >
              {category}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {Object.entries(categories).map(([category, skills]) => (
            <TabPanel key={category}>
              <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                {skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                    proficiency={skill.proficiency}
                    color={skill.color}
                    description={skill.description}
                  />
                ))}
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </MotionBox>
  )
}

export default Skills 