import { Box, Stack, Text, Img, Heading, Divider, Button, ButtonGroup, Circle, HStack } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import React from 'react'
import { Container } from 'react-bootstrap'

const LatestArticles = () => {
    const content3 = [
        {
            circleColor: "red",
            circleHead: "Scam Alert",
            img: "https://images.prismic.io/tc-blog/4968a760-202e-4a18-af6b-954d81453c79_Vishing_Feature_Image.jpg?w=800",
            cardHead: "Vishing Scams: Our Top Tips to Avoid Them in 2023",
            date: "Oct 2 2023 . 3 min read"

        },
        {
            circleColor: "cyan",
            circleHead: "News",
            img: "https://images.prismic.io/tc-blog/173261cb-6f73-46b9-9466-e310a7dd3b91_New-TC-logo.jpg?w=800",
            cardHead: "True and Blue: Truecaller’s Logo History",
            date: "Sep 20 2023 . 3 min read"

        },
        {
            circleColor: "green",
            circleHead: "Features",
            img: "https://images.prismic.io/tc-blog/fb696c7f-2e1a-40ef-b63f-332358a5967c_1.Main+img.png?w=800",
            cardHead: "Ready to Make Some Calls? Try Our New Feature Updates!",
            date: "Sep 9, 2023 . min read"

        }
    ]
    return (
        <Box bg={"#DAE8F3"}>
            <Box maxW={"800px"} mx={{base:"0",md:"auto"}} mt={10}>
                <Stack gap={8}>
                    <Box px={{base:5,md:"0"}}>
                        <Heading as={"h1"} size={'md'}>See our latest articles</Heading>
                    </Box>
                    <Box width={"full"}>
                        <HStack gap={5} flexDir={{base:"column",md:"row"}}>
                            {
                                content3.map((item) => (

                                    <Box px={{base:5,md:"0"}} width={{base:'full',md:"auto"}} >

                                        <Card maxW={{base:"", md:'md'}} borderRadius={"25px"}>
                                            <CardBody px={0}>
                                                <Box px={5}>
                                                    <HStack align={'center'}>
                                                        <Circle bg={item.circleColor} size={'12px'} mb={3} />
                                                        <Text>{item.circleHead}</Text>
                                                    </HStack>
                                                </Box>
                                                <Box>

                                                    <Img
                                                        src={item.img}
                                                        alt='Green double couch with wooden legs'
                                                        width={"full"}
                                                        height={{base:"150px",md:"100px"}}
                                                        objectFit={"cover"}

                                                    />
                                                </Box>
                                                <Box px={5}>

                                                    <Stack mt='6' spacing='3'>
                                                        <Heading size='sm' fontWeight={'bold'}>{item.cardHead}</Heading>
                                                        <Text color={"#2D2D2D"} as={"p"} fontSize={{ base: "1rem", sm: "0.8rem" }}>
                                                            {item.date}
                                                        </Text>

                                                    </Stack>
                                                </Box>
                                            </CardBody>
                                            {/* <Divider /> */}
                                            {/* <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='blue'>
                                        Buy now
                                    </Button>
                                    <Button variant='ghost' colorScheme='blue'>
                                        Add to cart
                                    </Button>
                                </ButtonGroup>
                            </CardFooter> */}
                                        </Card>
                                    </Box>

                                ))
                            }

                        </HStack>


                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default LatestArticles