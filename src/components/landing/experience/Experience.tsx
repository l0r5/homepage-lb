import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import { ChevronDownIcon } from '@chakra-ui/icons';

import 'react-vertical-timeline-component/style.min.css';
import { Experience, experiences } from '../../../constants';
import styled from '@emotion/styled';
import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
  useTheme,
  UnorderedList,
  ListItem, Link, Collapse
} from '@chakra-ui/react';

interface ExperienceCardProps {
  experience: Experience;
}

const StyledVerticalTimelineElement = styled(VerticalTimelineElement)`
  .dateClassName {
    top: 50% !important;
  }

  .vertical-timeline-element-icon {
    box-shadow: none;
  }

  .vertical-timeline-element-content p {
    font-size: 16px;
    margin: 0;
  }
`;
const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const theme = useTheme();
  const backgroundColor = useColorModeValue(
    theme.colors.whiteAlpha[500],
    theme.colors.whiteAlpha[200]
  );
  const dividerColor = useColorModeValue('gray.800', 'gray.200');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <StyledVerticalTimelineElement
      contentStyle={{
        background: backgroundColor,
        boxShadow: 'none'
      }}
      contentArrowStyle={{ borderRight: `7px solid  ${backgroundColor}` }}
      date={experience.date}
      dateClassName="dateClassName"
      icon={
        <Flex justifyContent="center" alignItems="center" w="full" h="full">
          <Box borderRadius={'full'} overflow={'hidden'}>
            <Link href={experience.company_url} isExternal>
              <Image src={experience.icon} alt={experience.company_name} objectFit="contain" />
            </Link>
          </Box>
        </Flex>
      }
    >
      <Box w="100%" h="100%">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Heading as="h4" fontSize="18px">
              {experience.title}
            </Heading>
            <Text color="secondary" fontSize="16px" fontWeight="semibold" mt={0} mb={0}>
              {experience.company_name}
            </Text>
          </Box>
          <ChevronDownIcon
            onClick={handleToggle}
            cursor="pointer"
            boxSize={6}
            transform={isExpanded ? 'rotate(180deg)' : ''}
            transition="transform 0.3s ease"
          />
        </Flex>
        <Divider borderColor={dividerColor} />
        <Collapse in={isExpanded}>
          <UnorderedList mt={5} ml={5}>
            {experience.points.map((point, index) => (
              <ListItem key={`experience-point-${index}`} pl={1}>
                <Text css={{ fontWeight: 'normal !important' }}>
                  {point}
                </Text>
              </ListItem>
            ))}
          </UnorderedList>
        </Collapse>
      </Box>
    </StyledVerticalTimelineElement>

  );
};

const Experience = () => {
  return (
    <>
      <Box
        sx={{
          '.vertical-timeline': {
            width: '100%'
          }
        }}
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </Box>
    </>
  );
};

export default Experience;