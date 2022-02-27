import { Box,
  HStack,
  Input,
  Spacer 
 } from "@chakra-ui/react";

export default function Navbar(){
  return(
    <Box boxShadow='md' borderRadius='0px' p='1' rounded='md' minW='1100px' bg='white' sx={{ position: '-webkit-sticky',position: 'sticky', top: '0' }}>
      <HStack spacing='26px'>
        <Spacer />
        <a href="/Home">
          <img src="https://www.vectorlogo.zone/logos/quora/quora-ar21.svg" alt="kdhvb" width={'90px'} height={''} />
        </a>
        <a href="/Home">
          <img src="https://www.svgrepo.com/show/157866/home.svg" alt="kdhvb" width={'28px'} height={''} />
        </a>
        <a href="/following">
          <img src="https://www.svgrepo.com/show/67709/list.svg" alt="kdhvb" width={'28px'} height={''} />
        </a>
        <a href="/answer">
          <img src="https://www.svgrepo.com/show/16380/edit.svg" alt="kdhvb" width={'28px'} height={''} />
        </a>
        <a href="/spaces">
          <img src="https://www.svgrepo.com/show/309836/people-team.svg" alt="kdhvb" width={'28px'} height={''} />
        </a>
        <a href="/notifications">
          <img src="https://www.svgrepo.com/show/109985/notification.svg" alt="kdhvb" width={'28px'} height={''} />
        </a>
        <Input placeholder='Search' htmlSize={27} width='auto' />
        <Box
          as='button'
          height='30px'
          lineHeight='1.2'
          transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
          border='1px'
          px='8px'
          borderRadius='20px'
          fontSize='14px'
          fontWeight='semibold'
          bg='#f5f6f7'
          borderColor='#ccd0d5'
          color='#4b4f56'
          _hover={{ bg: '#ebedf0' }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
          }}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
        >
          Try Quora+
        </Box>
        <a href="/">
          <img src="https://www.svgrepo.com/show/81103/avatar.svg" alt="kdhvb" width={'28px'} height={''} />
        </a>
        <a href="/">
          <img src="https://www.svgrepo.com/show/243060/translate-language.svg" alt="kdhvb" width={'28px'} height={''} />
        </a>
        {/* <a href="/">
          <Button colorScheme='red' variant='solid' borderRadius='20px'>
            Add Question
          </Button>
        </a> */}
        <Box
          as='button'
          height='30px'
          lineHeight='1.2'
          transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
          px='8px'
          borderRadius='20px'
          fontSize='14px'
          fontWeight='semibold'
          bg='#c4372d'
          borderColor='#ccd0d5'
          color='white'
          _hover={{ bg: '#91261f' }}
          _active={{
            bg: '#91261f',
            transform: 'scale(0.98)',
          }}
          
        >
          Add Question
        </Box>
        <Spacer />
      </HStack>
    </Box>
  ) 
}