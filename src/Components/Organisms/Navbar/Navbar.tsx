import { Box, Center, useColorModeValue, Text } from '@chakra-ui/react'
import React from 'react'
import BaseNavbar from './BaseNavbar'
import NavTabLink from './NavTabLink'
import UserProfile from './UserProfile'
import NextLink from 'next/link';

const Navbar = () => (
    <BaseNavbar>
      <BaseNavbar.Brand>
        <Center marginEnd={6}>
          <NextLink href="/">

          <Text fontSize="2xl" fontWeight="bold">Auxia</Text>
          </NextLink>
        </Center>
      </BaseNavbar.Brand>
      {/*<BaseNavbar.Links>*/}
      {/*    <NavTabLink>Home</NavTabLink>*/}
      {/*</BaseNavbar.Links>*/}
      <BaseNavbar.UserProfile>
        <UserProfile
          name="Christian Schröter"
          avatarUrl="https://ca.slack-edge.com/T024F7F15-UJVQ359SP-81fc55875723-512"
          email="mail@chidori-ui.com"
        />
      </BaseNavbar.UserProfile>
    </BaseNavbar>
)

export default Navbar;
