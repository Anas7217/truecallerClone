import { Text, Stack, Img, Box, HStack, Heading, Flex } from '@chakra-ui/react';
import React from 'react'


const WhatWe = () => {
    const content = [
        {
            img: "https://www.truecaller.com/cms/56efefd4da30e9814f9e1de39fef0feb.avif", 
            heading: "#1 trusted Caller ID app",
            paragraph: "Trusted and used by over 356 million people to identify calls and SMS from around the world."
        },
        {
            img: "https://www.truecaller.com/cms/5b3e44ef04a2635fbbf8acd3f89c0d98.avif",
            heading: "Community-based spam reporting",
            paragraph: "Real-time spam reporting allows for accurate and quick protection from scams, telemarketers, fraud and more."
        },
        {
            img: "https://www.truecaller.com/cms/f81f7e7c9d5a6e1334ff1f1708e4ed08.avif",
            heading: "Auto-block spam calls and SMS",
            paragraph: "Stop spam in its tracks - or before it rings. You’ll never have to worry about another spammer getting through."
        },
        {
            img: "https://www.truecaller.com/cms/c8a78287e3a07421f9b3cabf628411d4.avif",
            heading: "Safe and efficient communication",
            paragraph: "Choose a better way to communicate by letting Truecaller make smart choices."
        }
    ];
    return (
        <Box bg={"rgb(242, 242, 242)"} px={6} py={12}>
            <Flex gap={{base:0,md:12}} maxW={"800px"} mx={'auto'} flexDir='column'>

                <Box>
                    <Heading as={"h1"} textAlign={"center"} size={"2xl"}>What we do</Heading>
                </Box>
                <Box>
                    <HStack gap={{base:0,md:20}} flexDir={{base:"column",md:"row"}}>
                        {
                           
                            content.map((item,index) => (

                                // <Box>{item.heading}</Box>

                               
                                
                                <Box key={index}>
                                     {/* <Box>{item.heading}</Box> */}
                                
                                    <Flex flexDir={{ base: "row", md: "column" }}>
                                        <Box display={{base:'flex',md:"block"}} gap={3}>
                                            <Box >

                                                <Img src={item.img} borderRadius={"full"} h={{base:"150px",md:"auto"}} objectFit={"contain"} />
                                            </Box>
                                            <Box textAlign={{base:"none",md:'center'} } mt={{base:'12',md:"8"}}>
                                                <Text  lineHeight={{base:0,md:1}}  fontSize={"1rem"} fontWeight={600}>{item.heading}</Text>
                                                <Text color={'black.400'} as={"p"} fontSize={"0.9rem"}>{item.paragraph}</Text>
                                            </Box>

                                        </Box>

                                    </Flex>
                                 </Box>
                            ))
                        }

                    </HStack>
                </Box>
            </Flex>

        </Box>
    )
}

export default WhatWe