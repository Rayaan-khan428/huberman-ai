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
            Andrew Huberman, a recognized expert in the field of neuroscience, currently holds a position as a tenured professor in the Department of Neurobiology at the Stanford University School of Medicine. His academic journey navigated through earning a Ph.D. in Neurobiology from the University of California, Davis, followed by postdoctoral research at the University of California, San Diego. Huberman’s fascination with the functioning and capabilities of the brain has not only shaped his career but has also propelled him into a position where he ardently seeks to bridge the gap between complex scientific discoveries and public understanding.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg">
            Dr. Huberman’s research predominantly revolves around the understanding of neural circuits, particularly those that govern visual perception, eye movements, and how we physiologically respond to threats and rewards. His laboratory, the Huberman Lab at Stanford University, delves into the intricate mechanisms of neural development and plasticity, especially within the visual system. Their research explores everything from how the eye and brain communicate to developing novel therapeutic strategies for various blinding conditions, aiming to unravel the secrets of the nervous system and its remarkable ability to adapt and recover.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg">
            With a prolific background in scientific writing, Dr. Huberman has contributed numerous articles to esteemed scientific journals. His research papers often center around neuroplasticity, neural regeneration, and the intricate workings of the visual system, consistently advancing the field's knowledge base. His work is frequently cited by fellow scientists and researchers, affirming the significant impact and relevance of his research within and beyond the scientific community. Dr. Huberman’s commitment to proliferating scientific knowledge also translates to his willingness to make such information accessible to public audiences, not just academics.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg">
            Over the years, Andrew Huberman has been the recipient of numerous awards, recognizing his significant contributions to the field of neuroscience. Some notable acknowledgments include the McKnight Foundation Neuroscience Scholar Award and the Cogan Award from the Association for Research in Vision and Ophthalmology (ARVO). These awards honor his pioneering research, particularly within the realm of visual neuroscience and neural regeneration. The accolades he has received underscore his commitment to rigorous scientific exploration and his significant contributions to advancing understanding within his field.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg">
            In addition to his research and academic endeavors, Dr. Huberman has emerged as a prominent figure in media, particularly for making neuroscience accessible and comprehensible to the general public. Through hosting the "Huberman Lab Podcast", he distills complex neuroscientific concepts into digestible and practical insights for enhancing mental and physical well-being. Moreover, his expertise is frequently sought after for various media appearances, public talks, and interviews, where he passionately discusses topics ranging from sleep and stress to enhancing cognitive and physical performance through a neuroscientific lens.
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
