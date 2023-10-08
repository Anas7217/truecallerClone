import { Center, Text, Container, Stack, Img, Box, Link, Button } from '@chakra-ui/react'
import React from 'react'

const ExploreDesign = () => {
    return (
        <Box bg={'#d5bdaf'} w={'100%'}>
            <Container maxW={"container.lg"} py={12}>
                <Center>

                    <Stack >
                        <Box>
                            <Text lineHeight={1.2} textAlign={{ base: "none", md: "center" }} fontSize={{ base: "2.5rem", md: "3rem" }} fontWeight={{ base: 500, md: 700 }} color={"white"}>Explore endless <br /> <span className='text-primary'>design</span>  options</Text>

                        </Box>
                        <Box >
                            {/* <Text textStyle={"h3"} color={"p.purple"}>bjkebhekhvfhv</Text> */}

                            <Img src="/images/ExploreImage.jpg" width={'full'} height={{ base: 400, md: 600 }} objectFit={'cover'} />
                        </Box>
                        <Box textAlign={{ base: "none", md: "center" }} >
                            <Text lineHeight={1} fontSize={{ base: "1.2rem", md: "1.5rem" }} fontWeight={{ base: 400, md: 500 }} color={"white"}>Bring your vision to life with Squarespace’s flexible blog layouts, custom color palettes, cohesive fonts, access to high-quality stock images, and built-in photo editing capabilities.</Text>
                        </Box>
                        <Box textAlign={{ base: "none", md: "center" }}>

                            {/* <Button to="/" color={"p.purple"} stylesComponents={"stylesComponents"}>Gest started</Button> */}
                            <Link to="/" textDecoration={'underline'} fontSize={{ base: "1.1rem", md: "1.3rem" }} fontWeight={{ base: 400, md: 450 }} color={"white"}>Get started</Link>
                            {/* <Link to="/"  component={"link"} >Get started</Link>
                            <Text  textStyle={"h2"} >nidvdfvjbvf</Text> */}
                        </Box>


                    </Stack>
                </Center>

            </Container>

        </Box>

    )
}

export default ExploreDesign