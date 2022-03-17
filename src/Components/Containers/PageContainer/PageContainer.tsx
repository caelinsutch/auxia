import React from 'react';
import {Footer, Navbar} from '../../Organisms';
import {Box, useColorModeValue} from '@chakra-ui/react';

const PageContainer: React.FC = ({ children }) =>
  <>
    <Navbar/>
    <Box minH="98vh" bg={useColorModeValue('gray.50', 'gray.700')}>
      {children}
    </Box>
    <Footer/>
  </>

export default PageContainer;
