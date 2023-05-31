import { Container, Heading, VStack, Text } from '@chakra-ui/react';
import React from 'react';

export const LegalInformation = () => {
  return (
    <Container maxW={'container.lg'}>
      <VStack spacing={6} align="start" mt={10}>
        <Heading as={'h2'} variant={'page-title'}>
          Legal Information
        </Heading>
        <VStack align="start" spacing={3}>
          <Text>
            This website is a personal homepage operated by Lars Braitinger, located in Thalwil, Switzerland.
          </Text>
          {/*<Text>*/}
          {/*  Contact: [Your Contact Information]*/}
          {/*</Text>*/}
          <Text>
            Responsibility for content: The content of this website has been carefully prepared and reviewed. However, I do not assume any liability for the accuracy, completeness or timeliness of the information presented. Contributions marked by name reflect the opinion of the respective author and not always my opinion.
          </Text>
          <Text>
            Liability for links: Despite careful content control, I assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.
          </Text>
          <Text>
            Copyright: The content and works published on this website are governed by the copyright laws of Switzerland. Any duplication, processing, distribution, or any form of utilization beyond the scope of copyright law shall require the prior written consent of the author or authors in question.
          </Text>
          <Text>
            If you have any questions or concerns about my policy or practices, feel free to contact me.
          </Text>
        </VStack>
      </VStack>
    </Container>
  );
};