import React from 'react';
import {
	Text, Box, Image, FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Textarea,
	Button
} from '@chakra-ui/react'
import { useState } from 'react';

const Contact = () => {
	const [input, setInput] = useState('')

	const handleInputChange = (e) => setInput(e.target.value)

	const isError = input === ''
	return <>

		<Text fontSize={{ base: "26px", md: "42px" }} color={"green.600"} fontFamily="Domine" fontWeight={600}>
			Contactanos
		</Text>
		<Box display={"flex"} flexDirection={{ base: "column", md: "row" }} justifyContent={"space-between"} gap={8} paddingY={8}>
			<Box width={{ base: "100%", md: "650px" }}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15523.317739046415!2d-64.50036277800207!3d-31.335313054285365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d6511e23407fd%3A0x7e1211f3be694ed6!2sCaba%C3%B1as%20De%20Troncos%20%22Puente%20De%20Luz%22!5e0!3m2!1ses!2sar!4v1680543975944!5m2!1ses!2sar" width="100%" height="550"
					allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</Box>
			<Box width={{ base: "100%", md: "450px" }} display={"grid"} gap={6} padding={6} boxShadow='md'>
				<Box display={"flex"} gap={6}>
					<FormControl isInvalid={isError}>
						<FormLabel fontSize={"18px"}>Nombre</FormLabel>
						<Input type='email' value={input} onChange={handleInputChange} />
						{
							isError && <FormErrorMessage>Email is required.</FormErrorMessage>
						}
					</FormControl>
					<FormControl isInvalid={isError}>
						<FormLabel fontSize={"18px"}>Telefono</FormLabel>
						<Input type='email' value={input} onChange={handleInputChange} />
						{
							isError && <FormErrorMessage>Email is required.</FormErrorMessage>
						}
					</FormControl>
				</Box>
				<FormControl isInvalid={isError}>
					<FormLabel fontSize={"18px"}>Email</FormLabel>
					<Input type='email' value={input} onChange={handleInputChange} />
					{
						isError && <FormErrorMessage>Email is required.</FormErrorMessage>
					}
				</FormControl>
				<Textarea placeholder='Here is a sample placeholder' />
				<Button colorScheme='teal'>Button</Button>
			</Box>
		</Box>
	</>;
};

export default Contact;
