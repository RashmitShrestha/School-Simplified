import { Center } from "@chakra-ui/react";

export default function Four(): JSX.Element {
	return (
		<Center position="fixed" h="100vh" w="100vw" mt="-50px" zIndex="99999">
			<iframe
				width="100%"
				height="100%"
				src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
				allowFullScreen
			></iframe>
		</Center>
	);
}

// .ytplayer {pointer-events: none;}
