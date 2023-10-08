import { Box, HStack, Heading, Img, Link, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import '@fontsource/mukta/700.css'


const TrustYour = () => {
    const [isBase] = useMediaQuery('(max-width: 474px)')


    const content2 = [
        {
            img: "images/icon1.svg",
            heading: "Caller ID",
            para: "Identify incoming calls from unknown numbers",
            link: "/"
        },
        {
            img: "images/icon2.svg",
            heading: "Spam Blocking",
            para: "Block numbers",
            link: "/"
        },
        {
            img: "images/icon3.svg",
            heading: "Organized and spam-free inbox",
            para: "Keep your SMS inbox clean",
            link: "/"
        },
        {
            img: "images/icon4.svg",
            heading: "Messaging",
            para: "No need to switch to other apps",
            link: "/"
        },
    ]
    return (
        <Box bg={"#DAE8F3"} py={16}>
            <Box maxW={"800px"} mx={'auto'} py={16}>

                <HStack gap={8}>
                    <Box mt={{base:0,sm:10}} px={{base:4,sm:0}}>
                        <Stack>
                            <Box>
                                <Text lineHeight={0.1} fontSize={{base:"2rem",sm:"1.3rem"}} fontWeight={"bold"} className='text-primary'>FEATURES</Text>
                                <Heading as={"h3"} size={{base:"3xl",sm:"2xl"}}>Trust your communication with Truecaller<span className='text-primary'>.</span></Heading>
                                <Text color={"#2D2D2D"} as={"p"} fontSize={{base:"1.2rem",sm:"1rem"}}>Truecaller is proud to be a leader in caller ID and spam blocking software as well as research around call and SMS harassment.</Text>

                            </Box>
                            <Box>
                                <Box>
                                    <Stack>
                                        {
                                            content2.map((item) => (

                                                <Link to={item.link} _hover={{ bg: "white" }} borderRadius={8}>

                                                    <Box px={4} py={2} >
                                                        <HStack gap={6}>
                                                            <Box>
                                                                <Img src={item.img} borderRadius={"full"} />
                                                            </Box>
                                                            <Box mt={5}>
                                                                <Text lineHeight={{base:.8,sm:0}} fontSize={{base:"1.2rem",sm:"1rem"}} fontWeight={"600"}>{item.heading}</Text>
                                                                <Text color={"#2D2D2D"} lineHeight={{base:.8,sm:0}} as={"p"} fontSize={"0.9rem"}>{item.para}</Text>
                                                            </Box>
                                                        </HStack>
                                                    </Box>
                                                </Link>
                                            ))
                                        }
                                    </Stack>
                                </Box>
                            </Box>
                            <Box >
                                <Link to="/" style={{ textDecorationColor: 'blue' }} >
                                    <Text  color={'blue'} fontSize={"1rem"} fontWeight={300}>See all features &nbsp; <span color="blue"> &gt;</span></Text>
                                </Link>
                            </Box>
                        </Stack>
                    </Box>
                    <Box boxSize={{ base: "0", sm: "sm" }}>
                        <Img src="https://www.truecaller.com/cms/4340740c01a347e7bfd9488ea9aac81a.avif" />
                    </Box>

                </HStack>
               
                {/* {
                    isBase && (

                    )
                } */}
            </Box>
        </Box>
    )
}

export default TrustYour