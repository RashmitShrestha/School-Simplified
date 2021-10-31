import Hero from "./hero";
import { HStack, Center, VStack, Image} from "@chakra-ui/react";

import NextLink from "@components/nextChakra";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
// import BsShieldShaded from 'react-icons/bs';
// import IoCalendarOutline from 'react-icons/io';
// import GrGroup from 'react-icons/gr';

export default function Community() {
	return (
		<>
			<Container
				h="300px">
				<ContainerInside>
					<Hero heading="Community Applications" />
				</ContainerInside>
			</Container>
			<Container 
				bg="#8F9CFE"
				h="400px">
				<ContainerInside>
					<Center>
						<HStack>
							<Image
								src="/timmy/timmy_lanyard.png"
								alt="timmy with lanyard"
								w="300px"
								mr="70px"
							/>
							<VStack
								spacing="20px">
								<NextLink
									isExternal
									href="https://forms.gle/JaE31wNHXDcLE3jz6"
									_hover={{ textDecoration: "none" }}
								>
									<Button 
										bg="#7283FE"
										md="100px" 
										w="300px"
										h="50px"
										textAlign="left"
										> Moderator
									</Button>
								</NextLink>
								<NextLink
									isExternal
									href="https://forms.gle/CpCKy8Fi2f4oz6kU6"
									_hover={{ textDecoration: "none" }}
								>
									<Button 
										bg="#7283FE"
										md="100px" 
										w="300px"
										h="50px"
										textAlign="left"
										>
										Events Organizer
									</Button>
								</NextLink>
								<NextLink
									isExternal
									href="https://discord.gg/DVbhtXZjdA"
									_hover={{ textDecoration: "none" }}
								>
									<HStack>
										<Button 
											bg="#7283FE"
											md="100px" 
											w="300px"
											h="50px"
											textAlign="left"
											>
											Advisor
										</Button>
									</HStack>
									
								</NextLink>
							</VStack>
						</HStack>
					</Center>
					 
				</ContainerInside>
			</Container>
		</>
	);
}
