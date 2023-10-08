import { Box, Center,Stack, HStack, Img, Link, Text } from '@chakra-ui/react'
import React from 'react'
// import {  } from 'react-bootstrap'

const Generate = () => {
    return (
        <Box bg={"#60777c"} p={{base:6,md:10}} >
            <Stack gap={4}>
                {/* <Center> */}

                <Box>
                    <Text lineHeight={1} textAlign={{ base: "none", md: "center" }} fontSize={{ base: "2.5rem", md: "3rem" }} fontWeight={{ base: 500, md: 700 }} color={"white"}>Generate revenue from your<br /> content with Squarespace<br /> Member Areas</Text>

                </Box>
                <Box lineHeight={1} textAlign={{ base: "none", md: "center" }} >
                    <Text fontSize={{ base: "1.2rem", md: "1.5rem" }} fontWeight={{ base: 400, md: 500 }} color={"white"}>Monetize your blog with paid newsletters, podcasts, video series, and more. Squarespace Member Areas help you build, harness, and monetize the power of your online community.</Text>
                </Box>
                <Box textAlign={{ base: "none", md: "center" }}>

                    <Link to="/" textDecoration={'underline'} fontSize={{ base: "1.1rem", md: "1.3rem" }} fontWeight={{ base: 400, md: 450 }} color={"white"}>LEARN MORE</Link>
                </Box>


                <Box mt={{base:6,md:20}}>
                    <Box w={"100%"}>

                         <HStack gap={12} flexDir={{base:'column-reverse',md:"row"}} align={{base:'flex-start',md:"center"}} >   
                          {/*Hstack take by default in center */}
                            <Box w={{base:"full",md:"40%"}}>
                                <Stack lineHeight={1.1} >
                                    <Text color={'white'} fontSize={{base:"2rem",md:"2.5rem"}} fontWeight={{base:500,md:600}}>Sell premium content</Text>
                                    <Text as={"p"} fontSize={{base:"1.3rem",md:"1.5rem"}} fontWeight={{base:400,md:500}} color={'white'}>Whether you’re a chef selling recipes and cooking videos or a financial planner sharing newsletters and podcasts, Squarespace has the tools you need to sell exclusive content on your blog.</Text>

                                </Stack>
                            </Box>
                            <Box w={{base:"full",md:"60%"}}>
                                <Img src="https://media-www.sqspcdn.com/images/pages/tour/member-areas/engage/promote-1000w.jpg" height={{base:"auto",md:"400"}} objectFit={'cover'} />
                            </Box>

                        </HStack>
                    </Box>
                </Box>
                <Box mt={{base:6,md:20}}>
                    <Box w={"100%"}>

                         <HStack gap={12} flexDir={{base:'column-reverse',md:"row-reverse"}} align={{base:'flex-start',md:"center"}} >   
                          {/*Hstack take by default in center */}
                            <Box w={{base:"full",md:"40%"}}>
                                <Stack lineHeight={1.1} >
                                    <Text color={'white'} fontSize={{base:"2rem",md:"2.5rem"}} fontWeight={{base:500,md:600}}>Create a paid newsletter</Text>
                                    <Text as={"p"} fontSize={{base:"1.3rem",md:"1.5rem"}} fontWeight={{base:400,md:500}} color={'white'}>Create a paid newsletter
Use Member Areas to manage lists, send newsletters, and connect with your blog readers—all from one place.</Text>

                                </Stack>
                            </Box>
                            <Box w={{base:"full",md:"60%"}}>
                                <Img src="https://media-www.sqspcdn.com/images/pages/tour/member-areas/engage/integrate-1000w.jpg" 
                                height={{base:"auto",md:"400"}} objectFit={'cover'}  />
                            </Box>

                        </HStack>
                    </Box>
                </Box>

            </Stack>
        </Box>
    )
}

export default Generate