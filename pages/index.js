import { Container, Box, Heading, Image, useColorModeValue,  Link, Button} from '@chakra-ui/react'
import Section from '../components/section'
import NextLink from 'next/link'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in Canada!
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Kirby Rodriguez
                    </Heading> 
                    <p>Artist / Developer / Designer / Sleepy</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md:6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="101px" display="inline-block" borderRadius="full" src="images/kirbys.jpg" alt="pfp" />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>LOTS OF TEXT LOTS OF TEXTLOTS OF TEXTLOTS OF TEXTLOTS OF TEXTLOTS OF TEXTLOTS OF TEXTLOTS OF TEXTLOTS OF TEXTLOTS OF TEXTLOTS OF TEXT
                <NextLink href="/works/inkdrop"><Link>Study Buddy</Link></NextLink>
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon colorScheme="teal"></ChevronRightIcon>}>My portfolio</Button>
                    </NextLink>
                </Box>
            </Section>
        </Container>
        
    )
}

export default Page