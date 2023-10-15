import React from 'react';
import { 
  Box, Flex, Button, useDisclosure, 
  useColorModeValue, Stack, useColorMode, Image 
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const NavLink = ({ children, to }) => {
  return (
    <Box
      as={Link}
      to={to}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      {children}
    </Box>
  );
};

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box as={Link} to="/">
            <Image src="logo.png" alt="Logo" boxSize="60px" />
          </Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            <NavLink to="/chat">Chat</NavLink>
              <NavLink to="/meetandrew">Meet Andrew</NavLink>
              <NavLink to="/about">About</NavLink>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              {/* ... (rest of your code) */}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Nav;
