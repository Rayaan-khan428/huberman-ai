// components/MeetAndrew/MeetAndrew.js
import React from 'react';
import {
  Box,
  Text,
  Image,
  Heading
} from '@chakra-ui/react';

function MeetAndrew() {
  return (
    <Box py={8} px={12}>
      {/* Image at the top */}
      <Image
        w="100%"   // This ensures the image takes the full width of its container.
        src="andrew-huberman.jpg"  // Replace this with the path to Andrew's image
        alt="Andrew"
        mb={6}  // Margin at the bottom for some spacing
      />

      <Heading mb={4} size="lg">Andrew Huberman, Ph.D.</Heading>

      <Text fontSize="lg">
      Andrew Huberman is a distinguished neuroscientist known for his extensive research on the visual system, brain plasticity, and neural regeneration. He holds a tenured position as a professor in the Department of Neurobiology at Stanford University School of Medicine.

Dr. Huberman's research primarily focuses on the mechanisms of the visual system, exploring how the eyes and brain connect and process information. He has also delved into the study of brain states, such as fear and courage, and how they can be regulated. One of the key goals of his research is to develop novel strategies for halting and reversing vision loss.

In addition to his academic contributions, Dr. Huberman is passionate about disseminating scientific knowledge to the public. He is known for his ability to explain complex scientific concepts in an accessible and engaging manner. This has led him to be a sought-after speaker and educator, both in academic settings and in the broader public domain. He also hosts the "Huberman Lab Podcast," where he discusses neuroscience topics in depth and brings in experts from various fields.

Throughout his career, Dr. Huberman has received numerous awards and honors for his contributions to neuroscience and his efforts in science communication.
      </Text>
    </Box>
  );
}

export default MeetAndrew;
