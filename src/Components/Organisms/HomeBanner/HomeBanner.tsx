import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import {Illustration} from '../../Atoms';
import NextLink from 'next/link'
import React from 'react';

const HomeBanner: React.FC = () => (
  <Box as="section" bg={mode('gray.50', 'gray.800')} pb="12" overflow="hidden">
    <Box maxW={{base: 'xl', md: '7xl'}} mx="auto" px={{base: '6', md: '8'}}>
      <Flex
        align="flex-start"
        direction={{base: 'column', lg: 'row'}}
        justify="space-between"
        mb="20"
      >
        <Box flex="1" maxW={{lg: 'xl'}} pt="6">
          <Heading as="h1" size="3xl" mt="8" fontWeight="extrabold">
            The Only Anonymous Texting Hotline for Greek Life
          </Heading>
          <Text color={mode('gray.600', 'gray.400')} mt="5" fontSize="xl">
            An easy-to-use affordable hotline for risk management in Greek Life. Make your events safer and easier to manage for everyone.
          </Text>
          <NextLink href="/">

          <Button
            mt="8"
            minW="14rem"
            colorScheme="blue"
            size="lg"
            height="14"
            px="8"
            fontSize="md"
            fontWeight="bold"
          >
            Get Started
          </Button>
          </NextLink>

        </Box>
        <Box boxSize={{base: '20', lg: '8'}}/>
        <Img
          pos="relative"
          marginEnd="-16rem"
          w="50rem"
          h="40rem"
          objectFit="cover"
          borderRadius={12}
          src="https://cdn.theatlantic.com/media/mt/business/800%20spring%20break11.jpg"
          alt="Screenshot for Form builder"
        />
      </Flex>
      <Box>
        <Text color={mode('gray.600', 'gray.400')} fontWeight="medium">
          Trusted by UC Berkeley Greek Life
        </Text>
        <SimpleGrid
          mt="8"
          columns={{base: 2, md: 3, lg: 6}}
          color="gray.500"
          alignItems="center"
          spacing={{base: '12', lg: '24'}}
          fontSize="2xl"
        >
          <Illustration name="SigmaChiBadge" size={28}/>
        </SimpleGrid>
      </Box>
    </Box>
  </Box>
)

export default HomeBanner;
