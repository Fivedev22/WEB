import React from 'react';
import {
	Box, Text, Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";

const FAQ = () => {
	return <>
		<Box width={{ base: "100%", md: "60%" }} as="section" height="100%" paddingY={12} paddingX={0} >
			<Text fontSize={"2xl"} fontWeight={300} paddingY={6} color={"black.300"}>
				Preguntas Frecuentes
			</Text>
			<Accordion allowToggle width={"80%"} margin={"0 auto"}>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex='1' textAlign='left' fontSize={'xl'}>
								¿Como hacer una reserva?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex='1' textAlign='left' fontSize={'xl'}>
								Formas de pago
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Box>


	</>;
};

export default FAQ;
