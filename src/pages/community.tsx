import {
	Box,
	Center,
	Divider,
	Flex,
	Heading,
	Icon,
	Image,
	Link,
	Spacer,
	Text,
	VStack,
	Wrap,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { FaDiscord } from "react-icons/fa";
import {
	RiFacebookBoxLine,
	RiInstagramLine,
	RiLinkedinBoxLine,
	RiSpotifyLine,
	RiTwitterLine,
} from "react-icons/ri";
import { SiTiktok } from "react-icons/si";

export default function Home(): JSX.Element {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<>
			<Container bg="brand.purple.dark" maxW="xlg">
				<Wrap justify="center">
					<ContainerInside>
						<Image
							src="./duck_group_shot.png"
							alt="duck group shot"
							objectFit="cover"
							boxSize="250px"
						/>
					</ContainerInside>
				</Wrap>
			</Container>

			{/* art box */}
			<Container>
				<ContainerInside>
					<Flex textAlign="left">
						<Wrap spacing="40px" mt="20px">
							<VStack spacing={4} textAlign="left">
								<Heading size="md">Our Community</Heading>

								<Container maxW="container.sm">
									<Heading size="sm">
										Our organization features a global
										community of over 60,000 teenagers!
										Diverse, open-minded, and inclusive, our
										students enjoy conversing in an
										equitable environment where every new
										acquaintance becomes a longtime friend!
									</Heading>
								</Container>
								<Flex
									flexDir="column"
									justify="center"
									align="center"
								>
										<Box
											boxSize="500px"
											backgroundColor="brand.transparent2"
											padding="5px"
											rounded="65px"
										>
										
										<Button onClick={onOpen} size ="450px" rounded ="60px">
											<Image 
											src = "june.jpg"
											boxSize="450px"
											alt = "Winner of June Art Contest!"
											rounded = "50px"
											objectFit="cover"
											margin ='20px'
											/>
											
										</Button>
										<Modal isOpen={isOpen} onClose={onClose} isCentered>
											<ModalOverlay />
											<ModalContent>
											<ModalHeader>June Art Contest Winner</ModalHeader>
											<ModalCloseButton />
											<ModalBody>
												This months art contest prompt was: Embracement of Love and Identity. 
												Our winner for June was <Heading size='sm'>aishi! (aishi🦋#1613)</Heading>
												<Heading size='sm'>Artist Description:</Heading> 
												"I thought it to be a pride month painting as you can see two female faces intertwined with each other... 
												Like they are deeply connected mentally and physically
												I just wanted to do an abstract painting actually, representing this form of love
												and the closed eyes explain the satisfaction , sensuality and happiness she feels in love ... 
												And the half opened eyes represent shyness ...
												I used blue coz 1) it's my fav colour and 
												2) to give it a hallucinated look ... Like both of them are so much in love that 
												they feel like they are hallucinated ... They cannot think about anything else ... 
												They're madly in love "
												<Heading size='xsm'>Follow aishi on instagram: @aeishthetic </Heading>

											</ModalBody>

											<ModalFooter>
												<Button colorScheme="purple" mr={3} onClick={onClose} variant ="outline">
												Close
												</Button>
												<Button variant="ghost" onClick={onOpen}>Art Contest Info</Button>

											</ModalFooter>
											</ModalContent>
										</Modal>
			
										</Box>

										<Text fontSize="sm">
											Artwork from our event winners!
										</Text>

								</Flex>
							</VStack>
						</Wrap>

						<Spacer />

						<Wrap margin="30px" spacing="40px">
							<VStack spacing={6}>
								{/* info boxes */}
								<Flex
									boxSize="300px"
									backgroundColor="brand.transparent"
									padding="20px"
									rounded="40px"
									alignContent="left"
								>
									<Heading>Events</Heading>
								</Flex>

								<Flex
									boxSize="300px"
									backgroundColor="brand.transparent"
									padding="20px"
									rounded="40px"
									alignContent="left"
								>
									<Heading>Music</Heading>
								</Flex>

								<Flex
									boxSize="300px"
									backgroundColor="brand.transparent"
									padding="20px"
									rounded="40px"
									alignContent="left"
								>
									<Heading> Friends </Heading>
								</Flex>
							</VStack>
						</Wrap>
					</Flex>
				</ContainerInside>
			</Container>

			<Divider orientation="horizontal" borderColor="white" />
			<Container>
				<ContainerInside>
					<Flex textAlign="left">
						<Wrap spacing="40px" justify="left" margin="25px">
							{/* disc box */}
							<Box
								boxSize="500px"
								bg="brand.transparent"
								padding="13px"
								rounded="60px"
							>
								<Center>
									<Link
										href="https://discord.com/invite/school"
										isExternal
									>
										<Icon
											as={FaDiscord}
											boxSize="320px"
											color="brand.transparent2"
										/>
									</Link>
								</Center>

								<Text fontSize="27px" color="#5A60AD">
									Join our Discord. Come for the academic
									help, stay for the events, live music, and
									friends!
								</Text>
							</Box>
						</Wrap>

						<Spacer />
						<Wrap spacing="30px" margin="20px">
							{/* members box */}
							<Box>
								<Heading mb="36px"> Our Members </Heading>
								<Heading size="sm">
									Our community consists of members ranging
									from teenagers to teachers alike.
								</Heading>
							</Box>
						</Wrap>
					</Flex>
				</ContainerInside>
			</Container>

			<Divider orientation="horizontal" borderColor="white" />

			<Container>
				<ContainerInside>
					{/* staff box */}
					<Heading mb="22px"> Our Staff </Heading>

					<Heading fontSize="18px">School Simplified staff </Heading>
				</ContainerInside>
			</Container>

			<Divider orientation="horizontal" borderColor="white" />

			<Container>
				<ContainerInside>
					<Flex textAlign="left">
						<Wrap spacing="40px" margin="20px" mt="250px">
							<VStack spacing={8}>
								<Heading>Our Socials</Heading>
								<Container maxW="container.sm">
									<Heading fontSize="18px">
										Our organization features a global
										community of over 60,000 teenagers!
										Diverse, open-minded, and inclusive, our
										students enjoy conversing in an
										equitable environment where every new
										acquaintance becomes a longtime friend!
									</Heading>
								</Container>
							</VStack>
						</Wrap>

						<Spacer />

						<Wrap margin="30px" spacing="40px">
							<VStack spacing={3}>
								<Link href="" isExternal>
									<Icon
										as={RiSpotifyLine}
										boxSize="90px"
										color="white"
									/>
								</Link>

								<Link
									href="https://www.instagram.com/school.simplified/"
									isExternal
								>
									<Icon
										as={RiInstagramLine}
										boxSize="90px"
										color="white"
									/>
								</Link>

								<Link
									href="https://www.facebook.com/SchoolSimple/"
									isExternal
								>
									<Icon
										as={RiFacebookBoxLine}
										boxSize="100px"
										color="white"
									/>
								</Link>

								<Link
									href="https://www.tiktok.com/@schoolsimplified"
									isExternal
								>
									<Icon
										as={SiTiktok}
										boxSize="80px"
										color="white"
									/>
								</Link>

								<Link
									href="https://twitter.com/schoolsimplify"
									isExternal
								>
									<Icon
										as={RiTwitterLine}
										boxSize="100px"
										color="white"
									/>
								</Link>

								<Link
									href="https://www.linkedin.com/company/school-simplified"
									isExternal
								>
									<Icon
										as={RiLinkedinBoxLine}
										boxSize="100px"
										color="white"
									/>
								</Link>
							</VStack>
						</Wrap>
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}
