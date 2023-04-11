import React from 'react';
import { Text, Box, Tooltip } from "@chakra-ui/react";

const WhatsApp = () => {
	return <>
		<a href="https://api.whatsapp.com/send?phone=543547662637" target='_blank'>
		<Tooltip hasArrow label='Consultanos por disponibilidad!' padding={4} fontSize={'18px'} color={'#000'} bg='white.600' defaultIsOpen='true'>
		<Box 
			position={"fixed"} 
			bottom={5} 
			right={5} 
			width={"75px"} 
			height={"75px"} 
			display={"grid"} 
			placeContent={"center"} 
			borderRadius={"full"} 
			bgColor={"whatsapp.300"} 
			zIndex={"1000"}
			cursor={"pointer"}
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
				<path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
			</svg>
		</Box>
		</Tooltip>
		
		</a>
	
	</>;
};

export default WhatsApp;
