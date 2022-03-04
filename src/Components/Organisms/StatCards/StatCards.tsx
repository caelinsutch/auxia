import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import StatCard from './StatCard'

const StatCards = () => {
  return (
    <Box as="section" pb="20">
      <Box bg="blue.600" pt="20" pb="20">
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <Box mb="16" color="white" maxW="xl">
            <Heading size="2xl" letterSpacing="tight" fontWeight="extrabold" lineHeight="normal">
              Super Simple Setup, Zero Maintence
            </Heading>
            <Text fontSize="lg" mt="4" fontWeight="medium">
              All you have to do is connect the phone numbers of your officers and you&apos;re good to go!
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt="-20">
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
            <StatCard title="Processed Texts" value="81">
              Processed anonymous text conversations.
            </StatCard>
            <StatCard title="Customers" value="3">
              3 Greek organizations trust Auxia for their risk needs.
            </StatCard>
            <StatCard title="Low Cost" value="$.004">
              Get charged by usage, not a subscription rate
            </StatCard>
            <StatCard title="Always Online" value="24/7">
              Auxia is always online.
            </StatCard>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}

export default StatCards;
