import React from 'react';
import {
	Box, Text, Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";

const FAQ = () => {

	const Questions = [
		{
			question: "¿Como hacer una reserva?",
			answer: "Para reservar deberás escribinos por WhatsApp, 🟢+54 9 3541 236733. Si tuviéramos disponibilidad para reservar deberás abonar al menos el 30% del valor total de las noches que te alojes como seña para poder concretar la reserva."
		},
		{
			question: "Formas de pago",
			answer: ` Formas de pago: 
			→ Efectivo
			→ Transferencia bancaria
			→ Mercado pago (con dinero en cuenta no tiene recargo)
			→ Tarjeta de crédito a través de Mercado Pago (consultar recargos)`
		}, {
			question: "Mascotas",
			answer: `Admitimos mascotas pequeñas y medianas, con la responsabilidad de sus dueños ante cualquier daño o ruptura. Tienen un espacio grande para disfrutar. Solo mascotas pequeñas pueden dormir en las habitaciones.`
		},
		{
			question: "Política de Cancelación",
			answer: `Las cancelaciones de reservas se pueden realizar dentro de las 72 horas antes del Check-In, caso contrario se pierde la seña de la reserva. `
		},
		{
			question: "Horario de check-in/out",
			answer: `Horario de Check-In:
			Desde las 14:00 pm a 00hs.
			
			Horario de Check-Out:
			Hasta las 11:00 am. `
		}
	]

	return <>
		<Box

			height="100%"
			paddingY={8}
			paddingX={6}
		>
			<Box width={"100%"} maxWidth={"1440px"} margin={"0 auto"}>
				<Text textAlign={"center"} fontFamily="Domine" fontWeight={600}
					fontSize={{ base: "26px", md: "32px" }} paddingY={6} color={"black.300"}>
					Preguntas Frecuentes
				</Text>
				<Accordion allowToggle width={{base:"100%", md: '80%'}} margin={"0 auto"}>
					{
						Questions.map((question) => (
							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box as="span" flex='1' textAlign='left' fontSize={'xl'} textTransform={'capitalize'}>
											{question.question}
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									{question.answer}
								</AccordionPanel>
							</AccordionItem>
						))
					}



				</Accordion>
			</Box>

		</Box>


	</>;
};

export default FAQ;
