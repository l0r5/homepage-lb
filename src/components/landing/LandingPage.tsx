import { Box, Button, Container, Heading, Link, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import ProfileImage from '../layout/ProfileImage';
import { Section } from '../layout/Section';
import { Paragraph } from '../layout/Paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../layout/Bio';
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import Experience from './experience/Experience';
import SurfKitty from '../surfkitty/SurfKitty';

export const LandingPage = (): ReactElement => {
  return (
    <>
      <SurfKitty />
      <Container maxW={'container.lg'}>
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
            proficient in understanding clients' needs and delivering projects that meet their requirements. With a
            strong
            academic background and hands-on experience in transforming software-related business ideas into reality, I
            am
            committed to collaborating with teams to deliver high-quality products on time.</Paragraph>
          <br />
          <Paragraph>
            Throughout my journey, I have honed my skills in various aspects of software engineering and am always eager
            to take on challenging roles that allow me to apply and grow my expertise. I invite you to explore my
            portfolio to discover the exciting projects I've had the pleasure of working on, and learn more about how I
            can help bring your vision to life.
          </Paragraph>
          <Box textAlign={'center'} my={4} mt={10} mb={20}>
            <Button as={Link} href={'/works'} rightIcon={<ChevronRightIcon />} colorScheme={'teal'}>
              My portfolio
            </Button>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as={'h3'} variant={'section-title'}>
            Work Experience
          </Heading>
          <Experience />
        </Section>
        <Section delay={0.2}>
          <Heading as={'h3'} variant={'section-title'}>
            Education
          </Heading>
          <BioSection>
            <BioYear>2014 - 2017</BioYear>
            Master Program of Information Systems at Technical University of Munich.
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Semester abroad at San Diego State University.
          </BioSection>
          <BioSection>
            <BioYear>2010 - 2014</BioYear>
            Bachelor Program of Information Systems at University of Augsburg.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as={'h3'} variant={'section-title'}>
            I ♥
          </Heading>
          <Paragraph>
            Travelling, Scuba Diving, Boxing, Yoga & Meditation, Gaming
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/l0r5" isExternal>
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
              <Link href="https://twitter.com/larsbraitinger" isExternal>
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
              <Link href="https://www.linkedin.com/in/larsbraitinger" isExternal>
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
    </>
  );
};