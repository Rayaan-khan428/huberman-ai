import React from 'react';
import {
  Box,
  Text,
  Image,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Link,
  Icon
} from '@chakra-ui/react';

function MeetAndrew() {
  return (
    <Box py={8} px={12}>
      {/* Interactive Profile Image */}
      <Box position="relative" w="100%" mb={6}>
        <Image
          w="100%"
          src="andrew-huberman.jpg"
          alt="Andrew"
          _hover={{ opacity: 0.7 }}
        />
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" display="none" _groupHover={{ display: 'block' }}>
          <Text fontSize="xl" color="white">"The brain is malleable and can be trained."</Text>
        </Box>
      </Box>

      {/* Profile Name */}
      <Heading mb={4} size="lg">Andrew Huberman, Ph.D.</Heading>

      {/* Tabs for Different Sections */}
      <Tabs variant="enclosed" mb={6}>
        <TabList>
          <Tab>Biography</Tab>
          <Tab>Research</Tab>
          <Tab>Publications</Tab>
          <Tab>Awards</Tab>
          <Tab>Media Appearances</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text fontSize="lg">
              Andrew Huberman is a distinguished neuroscientist known for his extensive research...
              {/* Rest of the biography */}
            </Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg">
              Dr. Huberman's research primarily focuses on the mechanisms of the visual system...
              {/* Rest of the research details */}
            </Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg">
              Some of Dr. Huberman's notable publications include...
              {/* List of publications */}
            </Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg">
              Throughout his career, Dr. Huberman has received numerous awards...
              {/* List of awards */}
            </Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg">
              Dr. Huberman has appeared in numerous media outlets...
              {/* Media appearances and embedded videos */}
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* Social Media Links */}
      <Box d="flex" justifyContent="center" alignItems="center" mt={4}>
        <Link href="https://twitter.com/hubermanlab" isExternal mr={4}>
        </Link>
        <Link href="https://www.instagram.com/hubermanlab/" isExternal mr={4}>
        </Link>
        <Link href="https://hubermanlab.com/podcast/" isExternal mr={4}>
        </Link>
        <Link href="https://www.youtube.com/channel/UC2D2CMWXMOVWx7giW1n3LIg" isExternal>
        </Link>
      </Box>
    </Box>
  );
}

export default MeetAndrew;
