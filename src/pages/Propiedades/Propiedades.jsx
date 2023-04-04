import React from 'react';
import { Grid, Stack, Heading, Box, Card, CardHeader, CardBody, CardFooter, Image, Text, Divider, Button, ButtonGroup, GridItem } from '@chakra-ui/react'
import data from '../../data/db.json'
import { Link } from 'react-router-dom';
const Propiedades = () => {

	const DEPTOS = [
		{
			image: "https://images.unsplash.com/photo-1596313127813-b9f7c7a3b466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
			title: "La Soñada",
			descripton: "Apta para 2/4 personas",
			surface: "50m2"
		},
		{
			image: "https://images.unsplash.com/photo-1497870556705-2ee687d37bba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
			title: "Algarrobo",
			descripton: "Apta para 2/4 personas",
			surface: "50m2"
		},
		{
			image: "https://images.unsplash.com/photo-1497870556705-2ee687d37bba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
			title: "Algarrobo",
			descripton: "Apta para 2/4 personas",
			surface: "50m2"
		}
	]
	const { properties } = data



	return <>
		<Box as="main">
			<Heading padding={12} fontSize={{ base: "26px", md: "32px" }} color="green.600" fontFamily="Domine" fontWeight={600}>
				¡Tenemos la propiedad perfecta para tu descanso!
			</Heading>

			<Grid display={"grid"} templateColumns={{ base: "repeat(1, 1fr)", md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} justifyContent={"space-between"} gap={6} paddingY={12} padding={6} >

				{
					properties.map((dpto) => (
						<Card width={{ base: "100%", sm: "250px", lg: "100%" }}>
							<Box>
								<Image width={"100%"} objectFit={"cover"} height={"250px"} src={dpto.images[2]} alt='Dan Abramov' />
							</Box>
							<Box paddingY={6} display={"grid"} placeItems={"center"}>
								<Box display={"grid"} gap={6}>
									<Text fontSize="24px" fontWeight={600} fontFamily="Domine">{dpto.name}</Text>
									<Box display={"flex"} gap={8} justifyContent={"space-around"}>
										<Box display={"flex"} gap={2}>
											<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<circle cx="12" cy="11" r="3" />
												<path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
											</svg>
											<Text fontSize="18px" fontFamily="Poppins">{dpto.town}</Text>
										</Box>
										<Box display={"flex"} gap={2}>
											<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
												<line x1="4" y1="8" x2="6" y2="8" />
												<line x1="4" y1="12" x2="7" y2="12" />
												<line x1="4" y1="16" x2="6" y2="16" />
												<line x1="8" y1="4" x2="8" y2="6" />
												<polyline points="12 4 12 7 " />
												<polyline points="16 4 16 6 " />
											</svg>
											<Text fontSize="18px" fontFamily="Poppins">{dpto.squareMeter}m2</Text>
										</Box>
									</Box>
								</Box>
								<Box padding={4}>
									<Link to={`departamento/${dpto.ref}`}>
										<Button bgColor="green.300" color="white">VER MAS</Button>
									</Link>
								</Box>
							</Box>

						</Card>
					))
				}
			</Grid>
		</Box >
	</>;
};

export default Propiedades;
