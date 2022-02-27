import { Container,
    Box,
    HStack,
    Heading,
    Text,
    Link,
    Image,
    Flex,
    Spacer,
    useColorModeValue
} from "@chakra-ui/react"

const Content = () => {
    return ( 
        <Container minW='1060px' pt='30px' centerContent> 
            <Box minW='570px'  bg={useColorModeValue('white', 'gray.800')} maxW='570px' p='16px 16px 0px' border='1px' borderColor='gray.200' bg='white' spacingY='100px' mb='20px'>
                <Box>
                    <HStack minw='538px' spacing={3} >
                        <a href="/theauthor">
                            <img src="https://www.svgrepo.com/show/43652/avatar.svg" alt=""  width={'30px'} height={''} />
                        </a>
                        <a href="/theauthor">
                        <Text as='sub' fontSize='15px' fontWeight='bold'>
                            <a href="">
                                Author Name{''}
                            </a><Text as='sup' > . </Text>
                            <Link color='blue.500' href='/followauthor'>
                                Follow
                            </Link>
                        </Text>
                        <br />
                        <Text as='sup' >Studied at Illinois Institute of Technology Chicago - Illinois Tech<Text as='sup' > . </Text>Dec-12</Text>
                        </a>
                    </HStack>
                </Box>
                <Box fontWeight='bold' my='6px' >
                    <Link href='/question'>
                        What is the price for a new MacBook Pro?
                    </Link>
                </Box>
                <Box my='6px'>
                    Here are the base-model prices as of September 2014:
                    <li>
                        $1,099 for a 13" non-retina
                    </li>
                    <li>
                        $1,299 for a 13" retina
                    </li>
                    <li>
                        $1,999 for a 15" retina
                    </li>
                    <Image src="https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP.jpg" my='6px' />
                    Source: <Link color='blue' href='http://store.apple.com/us/buy-mac/macbook-pro'>http://store.apple.com/us/buy-mac/macbook-pro</Link>
                </Box>
                <Box border-top='1px'>
                    <Flex>
                        <Image src="https://www.svgrepo.com/show/87165/up-arrow.svg" w='25px' m='2'/>
                        <Image src="https://www.svgrepo.com/show/96252/down-arrow.svg" w='25px' m='2'/>
                        <Image src="https://www.svgrepo.com/show/343269/retweet.svg" w='25px' m='2'/>
                        <Image src="https://www.svgrepo.com/show/379891/comment.svg" w='25px' m='2'/>
                        <Spacer />
                        <Image src="https://www.svgrepo.com/show/309955/share.svg" w='25px' m='2'/>
                        <Image src="https://www.svgrepo.com/show/39847/more.svg" w='25px' m='2'/>
                    </Flex>
                </Box>
            </Box>
            <Box minW='570px' maxW='570px' p='16px 16px 0px' border='1px' borderColor='gray.200' bg='white' spacingY='100px' mb='20px'>
                <Box>
                    <HStack minw='538px' spacing={3} >
                        <a href="/theauthor">
                            <img src="https://www.svgrepo.com/show/43652/avatar.svg" alt=""  width={'30px'} height={''} />
                        </a>
                        <a href="/theauthor">
                        <Text as='sub' fontSize='15px' fontWeight='bold'>
                            <a href="">
                                Author Name{''}
                            </a><Text as='sup' > . </Text>
                            <Link color='blue.500' href='/followauthor'>
                                Follow
                            </Link>
                        </Text>
                        <br />
                        <Text as='sup' >Studied at Illinois Institute of Technology Chicago - Illinois Tech<Text as='sup' > . </Text>Dec-12</Text>
                        </a>
                    </HStack>
                </Box>
                <Box fontWeight='bold' my='6px' >
                    <Link href='/question'>
                        What is the price for a new MacBook Pro?
                    </Link>
                </Box>
                <Box my='6px'>
                    Here are the base-model prices as of September 2014:
                    <li>
                        $1,099 for a 13" non-retina
                    </li>
                    <li>
                        $1,299 for a 13" retina
                    </li>
                    <li>
                        $1,999 for a 15" retina
                    </li>
                    <Image src="https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP.jpg" my='6px' />
                    Source: <Link color='blue' href='http://store.apple.com/us/buy-mac/macbook-pro'>http://store.apple.com/us/buy-mac/macbook-pro</Link>
                </Box>
                <Box border-top='1px'>
                    <Flex>
                        <Image src="https://www.svgrepo.com/show/87165/up-arrow.svg" w='25px' m='2'/>
                        <Image src="https://www.svgrepo.com/show/96252/down-arrow.svg" w='25px' m='2'/>
                        <Image src="https://www.svgrepo.com/show/343269/retweet.svg" w='25px' m='2'/>
                        <Image src="https://www.svgrepo.com/show/379891/comment.svg" w='25px' m='2'/>
                        <Spacer />
                        <Image src="https://www.svgrepo.com/show/309955/share.svg" w='25px' m='2'/>
                        <Image src="https://www.svgrepo.com/show/39847/more.svg" w='25px' m='2'/>
                    </Flex>
                </Box>
            </Box>
            <Box minW='570px' maxW='570px' p='16px 16px 0px' border='1px' borderColor='gray.200' bg='white' spacingY='100px' mb='20px'>
                <Box>
                    <HStack minw='538px' spacing={3} >
                        <a href="/theauthor">
                            <img src="https://www.svgrepo.com/show/43652/avatar.svg" alt=""  width={'30px'} height={''} />
                        </a>
                        <a href="/theauthor">
                        <Text as='sub' fontSize='15px' fontWeight='bold'>
                            <a href="">
                                Author Name{''}
                            </a><Text as='sup' > . </Text>
                            <Link color='blue.500' href='/followauthor'>
                                Follow
                            </Link>
                        </Text>
                        <br />
                        <Text as='sup' >Studied at Illinois Institute of Technology Chicago - Illinois Tech<Text as='sup' > . </Text>Dec-12</Text>
                        </a>
                    </HStack>
                </Box>
                <Box fontWeight='bold' my='6px' >
                    <Link href='/question'>
                        What is the price for a new MacBook Pro?
                    </Link>
                </Box>
                <Box my='6px'>
                    Here are the base-model prices as of September 2014:
                    <li>
                        $1,099 for a 13" non-retina
                    </li>
                    <li>
                        $1,299 for a 13" retina
                    </li>
                    <li>
                        $1,999 for a 15" retina
                    </li>
                    <Image src="https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP.jpg" my='6px' />
                    Source: <Link color='blue' href='http://store.apple.com/us/buy-mac/macbook-pro'>http://store.apple.com/us/buy-mac/macbook-pro</Link>
                </Box>
                <Box border-top='1px'>
                    <Flex>
                        <Image src="https://www.svgrepo.com/show/87165/up-arrow.svg" w='25px' m='2'/>
                        <Image src="https://www.svgrepo.com/show/96252/down-arrow.svg" w='25px' m='2'/>
                        <Image src="https://www.svgrepo.com/show/343269/retweet.svg" w='25px' m='2'/>
                        <Image src="https://www.svgrepo.com/show/379891/comment.svg" w='25px' m='2'/>
                        <Spacer />
                        <Image src="https://www.svgrepo.com/show/309955/share.svg" w='25px' m='2'/>
                        <Image src="https://www.svgrepo.com/show/39847/more.svg" w='25px' m='2'/>
                    </Flex>
                </Box>
            </Box>
            

        </Container> 
       
     );
}
 
export default Content;


{/* <Box minw='170px' maxW='170px' bg='teal.500'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas expedita dignissimos iste. Aliquam dignissimos ullam nostrum, exercitationem quo minus ipsam hic ut ab dolores culpa reprehenderit totam velit libero.
</Box>
<Box minw='250px' maxW='250px' bg='teal.500'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, autem voluptatibus quaerat non consectetur natus itaque, laudantium accusantium dicta harum facilis officiis beatae inventore quibusdam aut laborum. Nihil, doloremque et!
</Box>  */}