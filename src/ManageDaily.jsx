import { Box, Img } from '@chakra-ui/react'
import React from 'react'

const ManageDaily = () => {
  return (
    <Box bg={"red"} width={"full"} display={'flex'}flexDir={{base:"column",md:'row'}}>
        <Box w={{base:"full",md:"50%"}} bg={"green"}>
            <Img src="/images/background_image.jpg"  objectFit={'inherit'} position={"relative"}/>
            <Img  position={'absolute'} src='https://media-www.sqspcdn.com/images/pages/tour/blogs/workflow/categories-tags-300w.jpg' display={'flex'} justifyContent={'center'} alignItems={'center'}/>
        </Box>
        <Box w={{base:"full",md:"50%"}}  bg={"blue"}>swkbj</Box>
    </Box>
  )
}

export default ManageDaily