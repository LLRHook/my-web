import { Box, Heading, SimpleGrid, Text, VStack, useColorModeValue, Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react'
import { FaJava, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaPython, FaDocker, FaAws } from 'react-icons/fa'
import { SiJquery, SiJira } from 'react-icons/si'

interface SkillCardProps {
  icon: React.ElementType;
  name: string;
  proficiency: string;
  color: string;
}

const SkillCard = ({ icon: Icon, name, proficiency, color }: SkillCardProps) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      p={4}
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        shadow: 'lg',
        borderColor: color,
      }}
    >
      <VStack spacing={2}>
        <Icon size="3em" color={color} />
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="sm" color="gray.500">{proficiency}</Text>
      </VStack>
    </Box>
  )
}

const Skills = () => {
  const categories = {
    'Frontend Development': [
      { icon: FaReact, name: 'React', proficiency: 'Advanced', color: '#61DAFB' },
      { icon: FaHtml5, name: 'HTML5', proficiency: 'Advanced', color: '#E34F26' },
      { icon: FaCss3Alt, name: 'CSS3', proficiency: 'Advanced', color: '#1572B6' },
      { icon: SiJquery, name: 'jQuery', proficiency: 'Intermediate', color: '#0769AD' },
    ],
    'Backend Development': [
      { icon: FaJava, name: 'Java', proficiency: 'Advanced', color: '#007396' },
      { icon: FaPython, name: 'Python', proficiency: 'Advanced', color: '#3776AB' },
      { icon: FaDatabase, name: 'SQL', proficiency: 'Advanced', color: '#336791' },
    ],
    'Cloud & DevOps': [
      { icon: FaDocker, name: 'Docker', proficiency: 'Intermediate', color: '#2496ED' },
      { icon: FaAws, name: 'AWS', proficiency: 'Intermediate', color: '#FF9900' },
      { icon: SiJira, name: 'Jira', proficiency: 'Advanced', color: '#0052CC' },
    ],
  }

  const tabBg = useColorModeValue('gray.100', 'gray.700')
  const selectedTabBg = useColorModeValue('white', 'gray.600')

  return (
    <Box py={10}>
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
                borderTopColor: 'blue.500'
              }}
              bg={tabBg}
            >
              {category}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {Object.entries(categories).map(([category, skills]) => (
            <TabPanel key={category}>
              <SimpleGrid columns={[2, 2, 3]} spacing={6}>
                {skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                    proficiency={skill.proficiency}
                    color={skill.color}
                  />
                ))}
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Skills 