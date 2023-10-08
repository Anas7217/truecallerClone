import { Flex, Link, Text, Container, VStack, useColorModeValue, Box, Heading, HStack, Stack, Img } from '@chakra-ui/react';



const footerData = [
  {
    label: 'About us',
    href: '#',
    links: [
      { label: 'About us', href: '#' },
      { label: 'Impact', href: '#' },
      { label: 'Safety Center', href: '#' },
      { label: 'Media Kit', href: '#' },
      { label: 'Carrers', href: '#' },
      { label: 'Investors', href: '#' },
    ]
  },
  {
    label: 'Our app',
    href: '#',
    links: [
      { label: 'Download Truecaller', href: '#' },
      { label: 'Features', href: '#' },
      { label: 'Truecaller Premium', href: '#' },
      { label: 'Phone Number Search', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Help', href: '#' }
    ]
  },
  {
    label: 'Blog',
    href: '#',
    links: [
      { label: 'Home', href: '#' },
      { label: 'Insights', href: '#' },
      { label: 'Scam Alerts', href: '#' },
      { label: 'Features', href: '#' },
      { label: 'Impact', href: '#' },
      { label: 'News', href: '#' },
      { label: 'Diversity & Inclusion', href: '#' },
      { label: 'Life At Truecaller', href: '#' },
    ]
  },
  {
    label: 'Bussiness',
    href: '#',
    links: [
      { label: 'For Advertisers', href: '#' },
      { label: 'For Bussinesses', href: '#' },
      { label: 'For Developers', href: '#' },

    ]
  }
];

const Footer = () => {
  //   const { toggleColorMode } = useColorMode()
  // const colorR=useColorModeValue('gray.800', 'gray.300')
  return (
    <Box bg={"#0b49b4"}>

      <Container maxW={{base:"full",md:"900px"}} p={{ base: 5, md: 10 }}>
        <HStack flexDir={{base:"column",md:"row"}} align={{base:"flex-start",md:"none"}}>
          <Box >
            <Stack>
              <Box bg={'white'} w={"200px"} borderRadius={"12px"}>
                  <Stack spacing={0}>
                    {/* <Box> */}

                    <Text as={"p"}>Language</Text>
                    {/* </Box> */}
                    {/* <Box> */}
                       <HStack>
                        <Img mb={3} height={"1.2em"} width={"1.2em"} src="images/Internet.svg" />
                        <Text>English</Text>
                      </HStack>
                    {/* </Box> */}
                  </Stack>
              </Box>
              <Box>
                <Stack>
                  <Box boxSize={'150px'}>
                  <Img src='https://www.truecaller.com/cms/63a42faf0b4e8344cb601acb312d97c1.avif' />

                  <Img src='https://www.truecaller.com/cms/f0e9ab987056bd8450279de7b6ddcf1a.avif' />
                  </Box>
                </Stack>
              </Box>
              <Box></Box>
            </Stack>
          </Box>
          <Box w={'full'} >

            <VStack spacing={5} alignItems="initial">
              <Flex
                flexWrap="wrap"
                direction={{ base: 'column', md: 'row' }}
                alignItems="start"
                justifyContent="space-between"
                gap={8}
              >
                {footerData.map((data, index) => (
                  <Flex key={index} direction="column" mb="3">
                    <Link
                      fontWeight="500"
                      href={data.href}
                      color={'white'}
                      textDecoration={"none"}
                    // onClick={toggleColorMode}
                    >
                      <Heading as={"h5"} size={"xl"}>{data.label}</Heading>
                    </Link>
                    <Flex direction={{ base: 'row', md: 'column' }}>
                      {data.links.map((link, index) => (
                        <Link
                          key={index}
                          padding={1}
                          fontSize={{ base: 'sm', sm: 'md' }}
                          href="#"
                          mr={{ base: 1, sm: 2, md: 0 }}
                          color="white"
                          _hover={{ color: 'blue.600' }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </Flex>
                  </Flex>
                ))}
              </Flex>
              <Flex alignItems="center">
                <Text color="white" fontSize="0.875rem" pl="0.5rem">
                  &copy; 2023 company, Inc. All rights reserved.
                </Text>
              </Flex>
            </VStack>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;