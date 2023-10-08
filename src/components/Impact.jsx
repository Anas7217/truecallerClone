import { Box, Button, Container, HStack, Heading, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Impact = () => {
    return (
        // px={{ base: 4, md:0 }} py={{ base: 4, md: 12 }}
        <Box width={"100%"}>
            {/* <Container > */}

                <HStack flexDir={{ base: "column", sm: "row-reverse" }} mt={{ base: 10, md: 0 }} gap={{base:5,md:10}}>
                    <Box width={{ base: "full", md: "50%" }} px={5}>
                        <Stack >
                            <Box>
                                <Box>
                                    <Text lineHeight={0.1} fontSize={{ base: "2rem", sm: "1.3rem" }} fontWeight={"bold"} className='text-primary'>IMPACT</Text>

                                </Box>
                            </Box>
                            <Box>
                                <Heading as={"h3"} size={{ base: "3xl", sm: "2xl" }}>Making an Impact through Truecaller<span className='text-primary'>.</span></Heading>

                            </Box>
                            <Box>
                                <Text color={"#2D2D2D"} as={"p"} fontSize={{ base: "1.2rem", sm: "1rem" }}>Truecaller was created to identify who was calling, but today it is being used to fight crime, and help loved ones.</Text>

                            </Box>
                            <Box>
                                <Button borderRadius={"full"}   bg={'white'}    className="text-primary border border-primary" _hover={{ bg: "none" }}>Read More</Button>
                            </Box>
                        </Stack>

                    </Box>
                    <Box width={{ base: "full", md: "50%" }}> 
                        <Img height={{base:"400px" ,md:"500px"}} width={'full'} src="https://www.truecaller.com/cms/2955cad945b7f22620739d4bfba791c8.avif"objectFit={"cover"}/>
                    </Box>

                </HStack>

            {/* </Container> */}
        </Box>
    )
}

export default Impact