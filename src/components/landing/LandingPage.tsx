import { Box, Button, Container, Heading, Link, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import { ReactElement } from 'react';
import ProfileImage from '../layout/ProfileImage';
import { Section } from '../layout/Section';
import { Paragraph } from '../layout/Paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../layout/Bio';
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

export const LandingPage = (): ReactElement => {
  return (
    <Container>
      <Box borderRadius={'lg'} p={3} mb={6} alignContent={'center'}
           bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
           css={{ backdropFilter: 'blur(10px)' }}>
        Hi, I'm a Full-Stack Developer based in Switzerland who loves to connect & create.
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
          Intro
        </Heading>
        <Paragraph>As a passionate and dedicated software engineer, I bring industry experience in designing,
          developing, and maintaining both web and mobile applications using a diverse range of tech stacks. I am
          proficient in understanding clients' needs and delivering projects that meet their requirements. With a strong
          academic background and hands-on experience in transforming software-related business ideas into reality, I am
          committed to collaborating with teams to deliver high-quality products on time.</Paragraph>
        <br />
        <Paragraph>
          Throughout my journey, I have honed my skills in various aspects of software engineering and am always eager
          to take on challenging roles that allow me to apply and grow my expertise. I invite you to explore my
          portfolio to discover the exciting projects I've had the pleasure of working on, and learn more about how I
          can help bring your vision to life.
        </Paragraph>
        <Box textAlign={'center'} my={4}>
          <Button as={Link} href={'/works'} rightIcon={<ChevronRightIcon />} colorScheme={'teal'}>
            My portfolio
          </Button>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as={'h3'} variant={'section-title'}>
          Work Experience
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
      <Section delay={0.2}>
        <Heading as={'h3'} variant={'section-title'}>
          Education
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