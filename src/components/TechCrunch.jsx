import { Box, HStack, Img } from '@chakra-ui/react'
import React from 'react'

const TechCrunch = () => {
    return (
        <Box maxW={"800px"} mx={'auto'} >
            <HStack gap={4} mx={'auto'} objectFit={"cover"} >
                <Box display="inline-block" maxW={"100%"}  >
                    <Img width={"400px"} objectFit='contain' src="https://www.truecaller.com/cms/2c9f56e0f6907088c8d7ecd234ac98ed.avif" />
                </Box>
                <Box   >
                    <Img objectFit='contain' src="https://www.truecaller.com/cms/fa1c869e999cd10b4ea1f30bb1d31a92.avif" />
                </Box>
                <Box display="inline-block"  maxW="100%">
                    <Img objectFit='contain' w={170} h={170} src="https://www.truecaller.com/cms/f4fcddffe59a744a8fa0a00087be79a1.avif" />
                </Box>

                <Box display="inline-block"  maxW="100%">
                    <Img objectFit='contain' w={70} h={70} src="https://www.truecaller.com/cms/107a20405cf357b5464d4b1bdc985b4f.avif" />
                </Box>
                <Box >
                    <Img objectFit='contain' src="https://www.truecaller.com/cms/2bb7a7c4926a1d4f6a26c8217d7b4150.avif" />
                </Box>

            </HStack>
        </Box>
    )
}

export default TechCrunch