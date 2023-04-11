import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Text, Box, Button, Image, Divider } from '@chakra-ui/react'
// files
import data from '../../data/db.json'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';


const PropertyDetail = () => {

	const { key } = useParams();
	const { properties } = data


	const oneProperty = properties.find(
		(property) => property.ref == String(`${key}`)
	);

	const [images, setImages] = useState(oneProperty.images)
	const [selectedIndex, setSelectedIdex] = useState(0)
	const [selectedImage, setSelectedImage] = useState(images[0])

	const selectNewImage = (index, img, next = true) => {

		const condition = next ? selectedIndex < img.length - 1 : selectedIndex > 0;
		const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : img.length - 1;
		setSelectedImage(img[nextIndex])
		setSelectedIdex(nextIndex)
	}

	const nextImage = () => {
		selectNewImage(selectedIndex, images, false)


	}
	const backImage = () => {
		selectNewImage(selectedIndex, images,)
	}


	return <>
		<Box height="100%" minHeight={"100vh"} paddingY={0} paddingX={0}>
			<Box
				maxW="1440px"
				margin="0 auto"
				textAlign={{ base: "left", md: "center" }}
				paddingY={8}
			>
				<Box
					width={"100%"}
					display={"flex"}
					flexDirection={{ base: "column", md: "row-reverse" }}
					justifyContent={"space-around"}
					overflow={"hidden"}
					padding={2}

				>
					<Box display={"grid"} gap={6} padding={{ base: 0, sm: 6 }}  >
						<Box position={"relative"}  >
							<Box>
								<Image width={{ base: "450px", sm: "850px" }} height={{ base: "250px", sm: "400px" }} objectFit={"cover"} src={selectedImage} />
							</Box>
							<Box position={"absolute"} top={0} zIndex={20} width={"100%"} height={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={2}>
								<Button
									width={"55px"}
									height={"55px"}
									borderRadius={"full"}
									outline={"none"}
									bg={"rgba(0,0,0,0.2)"}
									border={"1px solid #000"}
									onClick={backImage}
								>

									<ArrowLeft />
								</Button>
								<Button
									width={"55px"}
									height={"55px"}
									borderRadius={"full"}
									outline={"none"}
									bg={"rgba(0,0,0,0.2)"}
									border={"1px solid #000"}
									onClick={nextImage}
								>
									<ArrowRight />
								</Button>
							</Box>
						</Box>
						<Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={6} paddingX={4}>
							<Box display={"grid"} placeItems={"center"} >
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
								<Text>
									{oneProperty.squareMeter}m2
								</Text>
							</Box>
							<Box display={"grid"} placeItems={"center"}>
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<circle cx="9" cy="7" r="4" />
									<path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
									<path d="M16 3.13a4 4 0 0 1 0 7.75" />
									<path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
								</svg>
								<Text>
									2/4 personas
								</Text>
							</Box>

						</Box>
						<Box width={"100%"} paddingY={2}>

							<a href="https://api.whatsapp.com/send?phone=543547662637">
								<Button width={"80%"} colorScheme='green' display={'flex'} gap={6} margin={'0 auto'} paddingY={6} _hover={{ bgColor: 'green.900' }}>
									<WhatsAppBtn />
									<Text fontSize={'18px'} fontWeight={300}>Consultar disponibilidad</Text>

								</Button>
							</a>

						</Box>
					</Box>

					<Box position={"relative"} width={{ base: "100%", sm: "80%" }} padding={6}>
						<Text width={"100%"} fontSize={"4xl"} color={"green.900"}
						>
							{oneProperty.name}
						</Text>

						<Text textAlign={"left"} paddingY={6} fontSize={"2xl"}>
							Níspero cuenta con un amplio espacio de cocina para preparar las delicias que quieras (además de heladera y cafetera para cápsulas) y un living con suntuosos sillones para relajarse en cualquier momento. Las habitaciones se encuentran en el piso superior, con una amplitud que brinda la comodidad deseada para descansar en la estadía. Además de WiFi y televisión por cable, se puede disfrutar de amenities premium con vista a las sierras y desayuno incluido para saborear las delicias serranas
						</Text>
					</Box>


				</Box >;
			</Box>
		</Box>

	</>
};

const ArrowRight = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<line x1="5" y1="12" x2="19" y2="12" />
			<line x1="15" y1="16" x2="19" y2="12" />
			<line x1="15" y1="8" x2="19" y2="12" />
		</svg>
	)
}

const ArrowLeft = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<line x1="5" y1="12" x2="19" y2="12" />
			<line x1="5" y1="12" x2="11" y2="18" />
			<line x1="5" y1="12" x2="11" y2="6" />
		</svg>
	)
}
const WhatsAppBtn = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
			<path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
		</svg>
	)
}

export default PropertyDetail;
