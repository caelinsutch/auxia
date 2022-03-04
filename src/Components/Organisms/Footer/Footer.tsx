import React from 'react';
import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'

const Footer: React.FC = () => (
  <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        <Text fontSize="2xl" fontWeight="bold">Auxia</Text>
        {/*<ButtonGroup variant="ghost">*/}
        {/*  <IconButton*/}
        {/*    as="a"*/}
        {/*    href="#"*/}
        {/*    aria-label="LinkedIn"*/}
        {/*    icon={<FaLinkedin fontSize="1.25rem" />}*/}
        {/*  />*/}
        {/*  <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />*/}
        {/*  <IconButton*/}
        {/*    as="a"*/}
        {/*    href="#"*/}
        {/*    aria-label="Twitter"*/}
        {/*    icon={<FaTwitter fontSize="1.25rem" />}*/}
        {/*  />*/}
        {/*</ButtonGroup>*/}
      </Stack>
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
      </Text>
    </Stack>
  </Container>
)

export default Footer;
