import React from 'react';
import { Text, Box, Image } from '@chakra-ui/react'


const Empresa = () => {
	return <>
		<Box>
			<Text fontSize={"32px"} color={"green.600"} fontFamily="Domine" fontWeight={600}>
				Nuestra Misión
			</Text>
			<Box display={"flex"} flexDirection={{ base: "column", md: "row" }} padding={6} gap={4} alignItems={"center"}>
				<Text fontSize={"22px"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui atque aliquid quasi magni sapiente beatae molestiae minima consequuntur harum.</Text>
				<Image borderRadius={"sm"} width={{ base: "250px", md: "450px" }} height={{ base: "250px", md: "450px" }} objectFit={"cover"} src="https://images.unsplash.com/photo-1593526613712-7b4b9a707330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
			</Box>

		</Box>
		<Box>
			<Text fontSize={"32px"} color={"green.600"} fontFamily="Domine" fontWeight={600}>
				Nuestra Historia
			</Text>
			<Box display={"flex"} flexDirection={{ base: "column", md: "row-reverse" }} padding={6} gap={4} alignItems={"center"}>
				<Text fontSize={"22px"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui atque aliquid quasi magni sapiente beatae molestiae minima consequuntur harum.</Text>
				<Image borderRadius={"sm"} width={{ base: "250px", md: "450px" }} height={{ base: "250px", md: "450px" }} objectFit={"cover"} src="https://images.unsplash.com/photo-1551845728-6820a30c64e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
			</Box>

		</Box>
	</>;
};

export default Empresa;
