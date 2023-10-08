import { Box, Button, Container, HStack, Heading, Img, Link, Stack, Text } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'


const DownloadToday = () => {
    return (
        <Box width={"100%"} bg={"rgb(242, 242, 242)"}>
            {/* <Container > */}

            <HStack flexDir={{ base: "column", md: "row-reverse" }} mt={{ base: 10, md: 0 }} gap={{ base: 0, md: 10 }}>
                <Box width={{ base: "full", md: "50%" }} mt={20} pr={{ base: "10", md: "0" }} pl={4}>
                    <Stack spacing={1}>
                        <Box>
                            {/* <Box> */}
                            <Text lineHeight={{ base: 1, md: 0.1 }} fontSize={{ base: "2rem", md: "1.3rem" }} fontWeight={"bold"} className='text-primary'>DOWNLOAD TODAY</Text>

                            {/* </Box> */}
                        </Box>
                        <Box>
                            <Heading as={"h3"} size={{ base: "3xl", md: "2xl" }}>Trust your communicatio­n with Truecaller<span className='text-primary'>.</span></Heading>

                        </Box>
                        <Box>
                            <Text color={"#2D2D2D"} as={"p"} fontSize={{ base: "1.2rem", md: "1rem" }}>Trusted by over 356 million people, Truecaller is proud to be a leader in caller ID and spam blocking software as well as research around call and SMS harassment.</Text>

                        </Box>
                        <Box>
                            <Button borderRadius={"full"} bg={'white'} className="text-primary border border-primary" _hover={{ bg: "none" }}>Read More</Button>
                        </Box>
                        <Box maxW={{ base: "200px", md: "400px" }} mt={5}>
                            <Grid templateColumns={{ base: 'repeat(2, 1fr)', xl: 'repeat(3,1fr)' }} gap={2}>
                                <GridItem >


                                    
                                    <Box
                                        w="180px"
                                        h="auto"
                                        borderWidth="1px"
                                        borderColor="gray.300"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Link href="#">

                                            <Img
                                                src="https://www.truecaller.com/cms/63a42faf0b4e8344cb601acb312d97c1.avif"
                                                maxW="100%"
                                                maxH="100%"
                                                alt="Image"
                                            />
                                        </Link>
                                    </Box>
                                </GridItem>
                                <GridItem >



                                    <Box
                                        w="180px"
                                        h="auto"
                                        borderWidth="1px"
                                        borderColor="gray.300"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Link to="#">

                                            <Img
                                                src="https://www.truecaller.com/cms/f0e9ab987056bd8450279de7b6ddcf1a.avif"
                                                maxW="100%"
                                                maxH="100%"
                                                alt="Image"

                                            />
                                        </Link>
                                    </Box>
                                </GridItem>
                                <GridItem >

                                    <Box
                                        w="180px"
                                        h="auto"
                                        borderWidth="1px"
                                        borderColor="gray.300"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Link to="#">

                                            <Img
                                                src="https://www.truecaller.com/cms/204ab1e66c7768126ed9bc624007f98f.avif"
                                                maxW="100%"
                                                maxH="100%"
                                                alt="Image"
                                            />
                                        </Link>
                                    </Box>
                                </GridItem>

                            </Grid>
                        </Box>
                    </Stack>

                </Box>
                <Box width={"50%"} boxSize={"sm"} mt={20}>
                    <Img src="https://www.truecaller.com/cms/85e363473f8c26721ecd461f79ac3630.avif" objectFit={"cover"} />
                </Box>

            </HStack>

            {/* </Container> */}
        </Box>
    )
}

export default DownloadToday