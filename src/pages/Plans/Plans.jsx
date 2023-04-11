import React from 'react';
import { Box, Text, Image, } from "@chakra-ui/react";


const Plans = () => {


	const PlansArray = [
		{
			"title": "Alquileres por temporada",
			"text": "Desde Diciembre hasta Marzo"
		},
		{
			"title": "Alquileres Mensual",
			"text": "Consultar por disponibilidad"
		},
		{
			"title": "Alquileres Anual",
			"text": "Consultar por disponibilidad"
		},
	]

	return <>
		<Box
			backgroundAttachment="fixed"
			bgImage="url('https://images.unsplash.com/photo-1658143289468-6c5ecd2c39e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
			bgSize="cover"
			bgRepeat="no-repeat"
			height="100%"
		>
			<Box
				maxW="1440px"
				margin="0 auto"
				textAlign={{ base: "left", md: "center" }}
				paddingY={12}
			>

				<Box width="80%" margin={"0 auto"} borderRadius="9px" bgColor={"rgba(255, 255, 255, 0.8 )"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"space-around"} paddingY={8} >
					{
						PlansArray.map((plan, idx) => (
							<Box key={idx} width={"80%"} display={"flex"} flexDirection={"row-reverse"} alignItems={"center"} justifyContent={"space-between"} padding={6} gap={4} borderBottom={"1px solid #BDCDD6"}>
								<Image width={"80px"} borderRadius={"9px"} src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
								<Box textAlign={"left"}>
									<Text fontSize={{ base: "20px", md: "32px" }} fontFamily={"Poppins"} fontWeight={600} color={"#474E68"}>{plan.title}</Text>
									<Text fontSize={{ base: "18px", md: "22px" }} fontFamily={"Poppins"} color={"#787A91"}>{plan.text}</Text>

								</Box>
							</Box>
						))
					}
				</Box>
			</Box>
		</Box>
	</>;
};

export default Plans;
