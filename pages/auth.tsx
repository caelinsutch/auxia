import React from 'react';
import {PageContainer, Rating, SignUpForm} from '../src/Components';
import { Avatar, Box, Center, Flex, Heading, Icon, Stack, Text, VStack } from '@chakra-ui/react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

const Auth: React.FC = () => (
  <PageContainer>
    <Box py={{ base: '12', md: '24' }} maxW="7xl" mx="auto">
      <Stack direction="row" spacing="12">
        <Flex flex="1">
          <SignUpForm />
        </Flex>
        <Center flex="1" px={{ lg: '8' }} display={{ base: 'none', lg: 'flex' }}>
          <VStack spacing="8">
            <Stack direction="row" spacing="3">
              <Icon as={ImQuotesLeft} boxSize="8" mt="-4" />
              <Heading size="sm" fontWeight="medium" textAlign="center">
                This product makes it so much easier for Pledges to kick Geeds out
              </Heading>
              <Icon as={ImQuotesRight} boxSize="8" alignSelf="end" />
            </Stack>
            <VStack spacing="4">
              <Avatar
                size="lg"
                src="https://media-exp1.licdn.com/dms/image/C5603AQE2zgTY0-E-DQ/profile-displayphoto-shrink_200_200/0/1642802539154?e=1649289600&v=beta&t=-7bO3q8PQjg9PH_Pzo4eiE82g1UfiMiUs4NDkz8okLA"
                name="Brandon Guo"
              />
              <Stack textAlign="center" spacing="1">
                <Text fontSize="md" fontWeight="medium" color="muted">
                  Brandon Guo
                </Text>
                <Text fontWeight="medium" fontSize="sm" color="muted">
                  Pledge
                </Text>
              </Stack>
              <Rating defaultValue={5} />
            </VStack>
          </VStack>
        </Center>
      </Stack>
    </Box>
  </PageContainer>
)

export default Auth;
