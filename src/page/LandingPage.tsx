import { Box, Button, Container, Heading, Link, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import { ReactElement } from 'react';
import ProfileImage from '../components/ProfileImage';
import { Section } from '../components/Section';
import { Paragraph } from '../components/Paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/Bio';
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

export const LandingPage = (): ReactElement => {
  return (
    <Container>
      <Box borderRadius={'lg'} p={3} mb={6} alignContent={'center'}
           bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
           css={{ backdropFilter: 'blur(10px)' }}>
        Hello, I'm a full-stack developer based in Switzerland!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant={'page-title'}>
            Lars Braitinger
          </Heading>
          <p>Software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/lars.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as={'h3'} variant={'section-title'}>
          Work
        </Heading>
        <Paragraph>Highly self-motivated software
          engineer with professional
          experience designing, developing
          and maintaining web, as well as
          mobile, applications, using different
          tech stacks.
          Adept at understanding clients’
          needs and delivering projects
          accordingly. Strong academic background and hands on experience
          bringing software-related business
          ideas to life. Highly skilled at
          collaborating with a team to ship
          quality products within deadlines.
          Looking forward to applying the
          acquired range of skills in a
          challenging role.
        </Paragraph>
        <Box textAlign={'center'} my={4}>
          <Button rightIcon={<ChevronRightIcon />} colorScheme={'teal'}>
            My portfolio
          </Button>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as={'h3'} variant={'section-title'}>
          Bio
        </Heading>
        <BioSection>
          <BioYear>1990</BioYear>
          Born in Heidenheim an der Brenz, Germany.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Completed the Master Program of Information Systems at Technical University of Munich.
        </BioSection>
        <BioSection>
          <BioYear>2018 to 2021</BioYear>
          Worked at Bâloise Insurance & Bâloise Bank SoBa in Basel.
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Works at Netcetera in Zurich.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as={'h3'} variant={'section-title'}>
          I ♥
        </Heading>
        <Paragraph>
          Travelling, Scuba Diving, Yoga & Meditation, Gaming
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/l0r5" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @l0r5
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/larsbraitinger" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @larsbraitinger
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/larsbraitinger" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Lars Braitinger
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
};