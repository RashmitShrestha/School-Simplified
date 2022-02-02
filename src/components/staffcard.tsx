/* eslint-disable import/no-default-export */
import {
	Box,
	Center,
	Flex,
	Heading,
	Image,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
// import { RiBoxingLine } from "react-icons/ri";

type StaffCard = {
	name: string;
	title: string;
	img: string;
};

export default function StaffCard({
	title,
	name,
	img,
}: StaffCard): JSX.Element {
	const width = useBreakpointValue({ base: 200, lg: 300 }) || 200;
	return (
		<Flex flexDir="column" p="15px" m="5px" align="center">
			<Center
				w={width}
				h={width}
				backgroundColor="brand.transparent"
				rounded="50px"
			>
				<Image
					rounded="30px"
					boxSize={width - 35}
					objectFit="cover"
					backgroundPosition="top"
					alt={"Picture of " + name}
					src={img ?? "/staff/default.png"}
				/>
			</Center>
			<Box maxW={width} py="5px">
				<Heading size="md">{name}</Heading>
				<Text flexWrap="wrap">{title}</Text>
			</Box>
		</Flex>
	);
}
