import { Box, Button, HStack, Heading, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Iphone = () => {
    return (
        <Box bg={"rgb(242, 242, 242)"} px={{base:4,md:12}}  py={{base:4,md:12}}>
            <HStack flexDir={{base:"column",md:"row"}} mt={{base:10,md:0}} gap={{base:12,md:0}}>
                <Box>
                    <Stack >
                        <Box>
                            <Box>
                                <Text lineHeight={0.1} fontSize={{ base: "2rem", sm: "1.3rem" }} fontWeight={"bold"} className='text-primary'>FEATURES</Text>

                            </Box>
                        </Box>
                        <Box>
                        <Heading as={"h3"} size={{ base: "3xl", sm: "2xl" }}>Trust your communication with Truecaller<span className='text-primary'>.</span></Heading>

                        </Box>
                        <Box>
                        <Text color={"#2D2D2D"} as={"p"} fontSize={{ base: "1.2rem", sm: "1rem" }}>Truecaller is proud to be a leader in caller ID and spam blocking software as well as research around call and SMS harassment.</Text>

                        </Box>
                        <Box>
                            <Button borderRadius={"full"} bg={"rgb(242, 242, 242)"} className="text-primary border border-primary" _hover={{bg:"none"}}>Learn More</Button>
                        </Box>
                    </Stack>

                </Box>
                <Box>
                    <Img src="https://www.truecaller.com/cms/8dff8bb7f1cd44125c0f168784535245.avif" />
                </Box>

            </HStack>
        </Box>
    )
}

export default Iphone