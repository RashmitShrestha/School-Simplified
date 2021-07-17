import {
	Box,
	Flex,
	Heading,
	HStack,
	Image,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

// eslint-disable-next-line import/no-default-export
export default function Header(): JSX.Element {
	return (
		<>
			<Container
				bg="#636EE0CD"
				as="header"
				py="10px"
				w="100%"
				position="fixed"
				zIndex={1000}
				backdropFilter="blur(5px)"
			>
				<ContainerInside>
					<Flex
						justify="space-between"
						align="center"
						flexWrap="wrap"
					>
						<Link href="/" _hover={{}}>
							<Flex justify="center" align="center">
								<Image src="/logo.png" w={30} />
								<Heading size="md" ml={2.5}>
									School Simplified
								</Heading>
							</Flex>
						</Link>
						<HStack spacing={3}>
							<Link href="/">Home</Link>

							<Menu>
								<MenuButton
								// rightIcon={<ChevronDownIcon />}
								>
									Resources
								</MenuButton>
								<MenuList>
									<Link href="/tutoring">
										<MenuItem>Free Tutoring</MenuItem>
									</Link>
									<Link href="/essay">
										<MenuItem>Free Essay Revision</MenuItem>
									</Link>
									<Link href="/resources">
										<MenuItem>Free Notes</MenuItem>
									</Link>
								</MenuList>
							</Menu>
							<Link href="/volunteer">Volunteer</Link>
							<Link href="/contact">Contact</Link>
							<Link href="/faq">FAQ</Link>
						</HStack>
					</Flex>
				</ContainerInside>
			</Container>
			<Box w="100%" h="50px" />
		</>
	);
}
